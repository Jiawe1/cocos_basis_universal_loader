// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Test extends cc.Component {

    @property(cc.Node)
    imageContent: cc.Node = null;

    @property(cc.Prefab)
    imagePrefab: cc.Prefab = null;

    @property(cc.Label)
    imageListInfo: cc.Label = null;

    start() {
        cc.resources.loadDir('textures', cc.SpriteFrame, (err, data: cc.SpriteFrame[]) => {
            if (!err) {
                this.imageListInfo.string = `图片数量：${data.length}`
                for (let i = 0; i < data.length; i++) {
                    let temp = cc.instantiate(this.imagePrefab);
                    temp.parent = this.imageContent;
                    temp.getComponentInChildren(cc.Sprite).spriteFrame = data[i];
                    temp.getComponentInChildren(cc.Label).string = data[i].name;
                }
            }
        })
    }

}
