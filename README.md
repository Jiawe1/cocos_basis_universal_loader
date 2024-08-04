# 在Cocos Creator中使用Basis Universal 纹理压缩

## 前言
cocos creator 项目中的纹理压缩中，通常需要根据设备类型选择不同的压缩格式。比如 `web` 项目，设置纹理压缩格式就需要设置pvr、etc等不同的压缩格式，这里带给我们的问题就是多种压缩格式配置下`构建时间明显增长以及资源包体变大`。
所以就想有没有一种可以支持所有设备的压缩格式？

## 关于Basis Universal
[Basis Universal](https://github.com/BinomialLLC/basis_universal) 是一个开源的 GPU 纹理压缩库,它提供了一种高效的纹理压缩方法，能够在保持高质量图像的同时，显著减小文件大小。

Basis Universal 的特点包括：
- 跨平台支持：支持多种平台和设备，包括 PC、游戏机和移动设备。
- 多种压缩模式：提供了不同的压缩级别，以适应不同的图像质量和性能需求。
- 透明支持：能够处理包含透明信息的图像。
- 实时转码：可以在运行时将 Basis 压缩的纹理解码为 GPU 可理解的格式。
- 开源：允许开发者自由使用和修改，以适应特定的项目需求。

看到这里【跨平台支持】的特点，这不就是我要找的吗。

## 实现
思路：
1. 构建项目
2. 将构建后的资源压缩成.basis文件
3. 实现.basis文件的加载和解析

### 压缩.basis文件
使用 Basis Universal提供工具 [basisu](https://github.com/BinomialLLC/basis_universal/releases) 对图片资源进行压缩。
```
basisu -file xxx.png
```
当然，这是最简单的压缩命令，更多压缩参数参见 [Basisu.exe命令行工具选项](https://github.com/BinomialLLC/basis_universal/wiki/basisu.exe-Command-Line-Tool-Options)

### 加载 .basis
新建脚本BasisDownloader.js，并将脚本作为插件加载
```ts
    //BasisDownloader.js
    //...

    //cc 原始的加载方法
    var cccImageDownloader = function(url, options, onComplete){
        if(cc.sys.capabilities.imageBitmap && cc.macro.ALLOW_IMAGE_BITMAP){
            options.responseType = "blob";
            cc.assetManager.downloader.downloadFile(url, options, options.onFileProgress, onComplete);
        }else{
            cc.assetManager.downloader.downloadDomImage(url, options, onComplete);
        }
    }

    var downloadImage = function (url, options, onComplete) {
        if (window['CC_PREVIEW']) {
            cccImageDownloader(url, options, onComplete);
            return
        }

        let newFile = cc.path.changeExtname(url, '.basis');//替换文件后缀
        options.responseType = 'arraybuffer';
        //加载.basis文件
        cc.assetManager.downloader.downloadFile(newFile, options, (error, data) => {
            if (error) {
                //加载basis失败则加载原图
                cccImageDownloader(url, options, onComplete);
            } else {
                //解析.basis
                parseBasis(data, onComplete);
            }
        });
    }

    cc.assetManager.downloader.register({
        '.png': downloadImage,
        '.jpg': downloadImage,
    });
```

### 解析 .basis

下载basis[ 转码器 ](https://github.com/BinomialLLC/basis_universal/tree/master/webgl/transcoder)，将`basis_transcoder.js`和`basis_transcoder.wasm`放到同一文件夹下，并确保`wasm`模块在 BasisDownloader.js 脚本之前实例化完成，否则可能导致.basis加载成功了却无法解析。

`parseBasis`的实现：代码太长，这里就不贴全代码了。主要参考https://github.com/BinomialLLC/basis_universal/blob/master/webgl/texture/index.html

```ts
 var parseBasis = function(data,onComplete){
    //解析basis参考 https://github.com/BinomialLLC/basis_universal/blob/master/webgl/texture/index.html

    //...

    //输出
    let err = null,out = null;
    out = {
        _data: dst,//解析出来的数据
        _compressed: true,//是否压缩
        width: alignedWidth,
        height: alignedHeight,
        format: formatFromBasis//从basis中解析出的格式
    }
    onComplete && onComplete(err, out);

 }
```

有几点需要注意的地方：

1. basis解析出来的数据需要让 gl去调用 compressedTexImage2D 方法，所以需要重写方法。
```ts
    Object.defineProperty(cc.Texture2D.prototype, '_nativeAsset', {
        set: function (data) {
            if (data._compressed && data._data) {
                // 将 //从basis中解析出的格式 传入
                this.initWithData(data._data, data.format || this._format, datawidth, data.height);
            }
            else {
                this.initWithElement(data);
            }
        },
        configurable: true,
        enumerable: true
    });

    cc.renderer.Texture2D.prototype._setMipmap = function (images, flipY, premultiplyAlpha) {
        let glFmt = glTextureFmt(this._format);
        if (this._format == '从basis中解析出的格式') {
            //这里将image的数据作为压缩格式，那么在调用 _setImage 的时候 gl 就会调用 compressedTexImage2D  
            this._compressed = true;
        }
        //...
    }

    // 这里 需要对_textureFmtGL添加 【从basis中解析出的格式 】相关的数据
    //如: _textureFmtGL[70] = { format: 70, internalFormat: 36492, pixelType: 5121 };
    const glTextureFmt = function (fmt) {
        let result = _textureFmtGL[fmt];
        if (result === undefined) {
            return _textureFmtGL[enums.TEXTURE_FMT_RGBA8];
            }
        return result;
    }
```
2. 解析的时候需要先判断当前设备支持的压缩格式，代码如下：
```ts
            var gl = cc.game.canvas.getContext('webgl');
            astcSupported = !!gl.getExtension('WEBGL_compressed_texture_astc');
            etcSupported = !!gl.getExtension('WEBGL_compressed_texture_etc1');
            dxtSupported = !!gl.getExtension('WEBGL_compressed_texture_s3tc');
            pvrtcSupported = !!(gl.getExtension('WEBGL_compressed_texture_pvrtc')) || !!(gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'));
            bc7Supported = !!gl.getExtension('EXT_texture_compression_bptc');
```
这里需要注意的是需要在 cc.game.EVENT_GAME_INITED 之后再调用，不然会出现canvas颜色不对。

## 结语
这是一次关于纹理压缩的尝试，实际项目运行效果有待验证。另外因为条件有限，测试并未覆盖全平台，欢迎各位大神一起交流验证。

