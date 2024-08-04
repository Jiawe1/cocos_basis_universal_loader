
const Format = {
    "UNKNOWN": 0,
    "A8": 1,
    "L8": 2,
    "LA8": 3,
    "R8": 4,
    "R8SN": 5,
    "R8UI": 6,
    "R8I": 7,
    "R16F": 8,
    "R16UI": 9,
    "R16I": 10,
    "R32F": 11,
    "R32UI": 12,
    "R32I": 13,
    "RG8": 14,
    "RG8SN": 15,
    "RG8UI": 16,
    "RG8I": 17,
    "RG16F": 18,
    "RG16UI": 19,
    "RG16I": 20,
    "RG32F": 21,
    "RG32UI": 22,
    "RG32I": 23,
    "RGB8": 24,
    "SRGB8": 25,
    "RGB8SN": 26,
    "RGB8UI": 27,
    "RGB8I": 28,
    "RGB16F": 29,
    "RGB16UI": 30,
    "RGB16I": 31,
    "RGB32F": 32,
    "RGB32UI": 33,
    "RGB32I": 34,
    "RGBA8": 35,
    "BGRA8": 36,
    "SRGB8_A8": 37,
    "RGBA8SN": 38,
    "RGBA8UI": 39,
    "RGBA8I": 40,
    "RGBA16F": 41,
    "RGBA16UI": 42,
    "RGBA16I": 43,
    "RGBA32F": 44,
    "RGBA32UI": 45,
    "RGBA32I": 46,
    "R5G6B5": 47,
    "R11G11B10F": 48,
    "RGB5A1": 49,
    "RGBA4": 50,
    "RGB10A2": 51,
    "RGB10A2UI": 52,
    "RGB9E5": 53,
    "DEPTH": 54,
    "DEPTH_STENCIL": 55,
    "BC1": 56,
    "BC1_ALPHA": 57,
    "BC1_SRGB": 58,
    "BC1_SRGB_ALPHA": 59,
    "BC2": 60,
    "BC2_SRGB": 61,
    "BC3": 62,
    "BC3_SRGB": 63,
    "BC4": 64,
    "BC4_SNORM": 65,
    "BC5": 66,
    "BC5_SNORM": 67,
    "BC6H_UF16": 68,
    "BC6H_SF16": 69,
    "BC7": 70,
    "BC7_SRGB": 71,
    "ETC_RGB8": 72,
    "ETC2_RGB8": 73,
    "ETC2_SRGB8": 74,
    "ETC2_RGB8_A1": 75,
    "ETC2_SRGB8_A1": 76,
    "ETC2_RGBA8": 77,
    "ETC2_SRGB8_A8": 78,
    "EAC_R11": 79,
    "EAC_R11SN": 80,
    "EAC_RG11": 81,
    "EAC_RG11SN": 82,
    "PVRTC_RGB2": 83,
    "PVRTC_RGBA2": 84,
    "PVRTC_RGB4": 85,
    "PVRTC_RGBA4": 86,
    "PVRTC2_2BPP": 87,
    "PVRTC2_4BPP": 88,
    "ASTC_RGBA_4X4": 89,
    "ASTC_RGBA_5X4": 90,
    "ASTC_RGBA_5X5": 91,
    "ASTC_RGBA_6X5": 92,
    "ASTC_RGBA_6X6": 93,
    "ASTC_RGBA_8X5": 94,
    "ASTC_RGBA_8X6": 95,
    "ASTC_RGBA_8X8": 96,
    "ASTC_RGBA_10X5": 97,
    "ASTC_RGBA_10X6": 98,
    "ASTC_RGBA_10X8": 99,
    "ASTC_RGBA_10X10": 100,
    "ASTC_RGBA_12X10": 101,
    "ASTC_RGBA_12X12": 102,
    "ASTC_SRGBA_4X4": 103,
    "ASTC_SRGBA_5X4": 104,
    "ASTC_SRGBA_5X5": 105,
    "ASTC_SRGBA_6X5": 106,
    "ASTC_SRGBA_6X6": 107,
    "ASTC_SRGBA_8X5": 108,
    "ASTC_SRGBA_8X6": 109,
    "ASTC_SRGBA_8X8": 110,
    "ASTC_SRGBA_10X5": 111,
    "ASTC_SRGBA_10X6": 112,
    "ASTC_SRGBA_10X8": 113,
    "ASTC_SRGBA_10X10": 114,
    "ASTC_SRGBA_12X10": 115,
    "ASTC_SRGBA_12X12": 116,
    "COUNT": 117
}

const COMPRESSED_RGBA_ASTC_4x4_KHR = 0x93B0;
const COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;
const COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;
const COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;
const COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;
const COMPRESSED_RGBA_BPTC_UNORM = 0x8E8C;
const COMPRESSED_RGB_ETC1_WEBGL = 0x8D64;
const COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8C00;
const COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8C02;
const GL_NEAREST = 9728;                // gl.NEAREST
const GL_LINEAR = 9729;                 // gl.LINEAR
const GL_NEAREST_MIPMAP_NEAREST = 9984; // gl.NEAREST_MIPMAP_NEAREST
const GL_LINEAR_MIPMAP_NEAREST = 9985;  // gl.LINEAR_MIPMAP_NEAREST
const GL_NEAREST_MIPMAP_LINEAR = 9986;  // gl.NEAREST_MIPMAP_LINEAR
const GL_LINEAR_MIPMAP_LINEAR = 9987;   // gl.LINEAR_MIPMAP_LINEAR
// const GL_BYTE = 5120;                  // gl.BYTE
const GL_UNSIGNED_BYTE = 5121;            // gl.UNSIGNED_BYTE
// const GL_SHORT = 5122;                 // gl.SHORT
const GL_UNSIGNED_SHORT = 5123;           // gl.UNSIGNED_SHORT
const GL_UNSIGNED_INT = 5125;             // gl.UNSIGNED_INT
const GL_FLOAT = 5126;                    // gl.FLOAT
const GL_UNSIGNED_SHORT_5_6_5 = 33635;    // gl.UNSIGNED_SHORT_5_6_5
const GL_UNSIGNED_SHORT_4_4_4_4 = 32819;  // gl.UNSIGNED_SHORT_4_4_4_4
const GL_UNSIGNED_SHORT_5_5_5_1 = 32820;  // gl.UNSIGNED_SHORT_5_5_5_1
const GL_HALF_FLOAT_OES = 36193;          // gl.HALF_FLOAT_OES
const GL_DEPTH_COMPONENT = 6402; // gl.DEPTH_COMPONENT
const GL_ALPHA = 6406;            // gl.ALPHA
const GL_RGB = 6407;              // gl.RGB
const GL_RGBA = 6408;             // gl.RGBA
const GL_LUMINANCE = 6409;        // gl.LUMINANCE
const GL_LUMINANCE_ALPHA = 6410;  // gl.LUMINANCE_ALPHA

const GL_COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;   // ext.COMPRESSED_RGB_S3TC_DXT1_EXT
const GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;  // ext.COMPRESSED_RGBA_S3TC_DXT1_EXT
const GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;  // ext.COMPRESSED_RGBA_S3TC_DXT3_EXT
const GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;  // ext.COMPRESSED_RGBA_S3TC_DXT5_EXT

const GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8C00;  // ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
const GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8C01;  // ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG
const GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8C02; // ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
const GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8C03; // ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG

const GL_COMPRESSED_RGB_ETC1_WEBGL = 0x8D64; // ext.COMPRESSED_RGB_ETC1_WEBGL

const GL_COMPRESSED_RGB8_ETC2 = 0x9274;       // ext.COMPRESSED_RGB8_ETC2
const GL_COMPRESSED_RGBA8_ETC2_EAC = 0x9278;  // ext.COMPRESSED_RGBA8_ETC2_EAC

const _filterGL = [
    [GL_NEAREST, GL_NEAREST_MIPMAP_NEAREST, GL_NEAREST_MIPMAP_LINEAR],
    [GL_LINEAR, GL_LINEAR_MIPMAP_NEAREST, GL_LINEAR_MIPMAP_LINEAR],
];

const _textureFmtGL = [
    // TEXTURE_FMT_RGB_DXT1: 0
    { format: GL_RGB, internalFormat: GL_COMPRESSED_RGB_S3TC_DXT1_EXT, pixelType: null },

    // TEXTURE_FMT_RGBA_DXT1: 1
    { format: GL_RGBA, internalFormat: GL_COMPRESSED_RGBA_S3TC_DXT1_EXT, pixelType: null },

    // TEXTURE_FMT_RGBA_DXT3: 2
    { format: GL_RGBA, internalFormat: GL_COMPRESSED_RGBA_S3TC_DXT3_EXT, pixelType: null },

    // TEXTURE_FMT_RGBA_DXT5: 3
    { format: GL_RGBA, internalFormat: GL_COMPRESSED_RGBA_S3TC_DXT5_EXT, pixelType: null },

    // TEXTURE_FMT_RGB_ETC1: 4
    { format: GL_RGB, internalFormat: GL_COMPRESSED_RGB_ETC1_WEBGL, pixelType: null },

    // TEXTURE_FMT_RGB_PVRTC_2BPPV1: 5
    { format: GL_RGB, internalFormat: GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG, pixelType: null },

    // TEXTURE_FMT_RGBA_PVRTC_2BPPV1: 6
    { format: GL_RGBA, internalFormat: GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG, pixelType: null },

    // TEXTURE_FMT_RGB_PVRTC_4BPPV1: 7
    { format: GL_RGB, internalFormat: GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG, pixelType: null },

    // TEXTURE_FMT_RGBA_PVRTC_4BPPV1: 8
    { format: GL_RGBA, internalFormat: GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG, pixelType: null },

    // TEXTURE_FMT_A8: 9
    { format: GL_ALPHA, internalFormat: GL_ALPHA, pixelType: GL_UNSIGNED_BYTE },

    // TEXTURE_FMT_L8: 10
    { format: GL_LUMINANCE, internalFormat: GL_LUMINANCE, pixelType: GL_UNSIGNED_BYTE },

    // TEXTURE_FMT_L8_A8: 11
    { format: GL_LUMINANCE_ALPHA, internalFormat: GL_LUMINANCE_ALPHA, pixelType: GL_UNSIGNED_BYTE },

    // TEXTURE_FMT_R5_G6_B5: 12
    { format: GL_RGB, internalFormat: GL_RGB, pixelType: GL_UNSIGNED_SHORT_5_6_5 },

    // TEXTURE_FMT_R5_G5_B5_A1: 13
    { format: GL_RGBA, internalFormat: GL_RGBA, pixelType: GL_UNSIGNED_SHORT_5_5_5_1 },

    // TEXTURE_FMT_R4_G4_B4_A4: 14
    { format: GL_RGBA, internalFormat: GL_RGBA, pixelType: GL_UNSIGNED_SHORT_4_4_4_4 },

    // TEXTURE_FMT_RGB8: 15
    { format: GL_RGB, internalFormat: GL_RGB, pixelType: GL_UNSIGNED_BYTE },

    // TEXTURE_FMT_RGBA8: 16
    { format: GL_RGBA, internalFormat: GL_RGBA, pixelType: GL_UNSIGNED_BYTE },

    // TEXTURE_FMT_RGB16F: 17
    { format: GL_RGB, internalFormat: GL_RGB, pixelType: GL_HALF_FLOAT_OES },

    // TEXTURE_FMT_RGBA16F: 18
    { format: GL_RGBA, internalFormat: GL_RGBA, pixelType: GL_HALF_FLOAT_OES },

    // TEXTURE_FMT_RGB32F: 19
    { format: GL_RGB, internalFormat: GL_RGB, pixelType: GL_FLOAT },

    // TEXTURE_FMT_RGBA32F: 20
    { format: GL_RGBA, internalFormat: GL_RGBA, pixelType: GL_FLOAT },

    // TEXTURE_FMT_R32F: 21
    { format: null, internalFormat: null, pixelType: null },

    // TEXTURE_FMT_111110F: 22
    { format: null, internalFormat: null, pixelType: null },

    // TEXTURE_FMT_SRGB: 23
    { format: null, internalFormat: null, pixelType: null },

    // TEXTURE_FMT_SRGBA: 24
    { format: null, internalFormat: null, pixelType: null },

    // TEXTURE_FMT_D16: 25
    { format: GL_DEPTH_COMPONENT, internalFormat: GL_DEPTH_COMPONENT, pixelType: GL_UNSIGNED_SHORT },

    // TEXTURE_FMT_D32: 26
    { format: GL_DEPTH_COMPONENT, internalFormat: GL_DEPTH_COMPONENT, pixelType: GL_UNSIGNED_INT },

    // TEXTURE_FMT_D24S8: 27
    { format: GL_DEPTH_COMPONENT, internalFormat: GL_DEPTH_COMPONENT, pixelType: GL_UNSIGNED_INT },

    // TEXTURE_FMT_RGB_ETC2: 28
    { format: GL_RGB, internalFormat: GL_COMPRESSED_RGB8_ETC2, pixelType: null },

    // TEXTURE_FMT_RGBA_ETC2: 29
    { format: GL_RGBA, internalFormat: GL_COMPRESSED_RGBA8_ETC2_EAC, pixelType: null },
];

_textureFmtGL[Format.BC7] = { format: Format.BC7, internalFormat: COMPRESSED_RGBA_BPTC_UNORM, pixelType: GL_UNSIGNED_BYTE };
_textureFmtGL[Format.BC1] = { format: Format.BC1, internalFormat: COMPRESSED_RGB_S3TC_DXT1_EXT, pixelType: null };
_textureFmtGL[Format.BC3] = { format: Format.BC3, internalFormat: COMPRESSED_RGBA_S3TC_DXT5_EXT, pixelType: null };
_textureFmtGL[Format.ASTC_RGBA_4X4] = { format: Format.ASTC_RGBA_4X4, internalFormat: COMPRESSED_RGBA_ASTC_4x4_KHR, pixelType: null };
_textureFmtGL[Format.ETC_RGB8] = { format: Format.ETC_RGB8, internalFormat: COMPRESSED_RGB_ETC1_WEBGL, pixelType: null };
_textureFmtGL[Format.PVRTC_RGB4] = { format: Format.PVRTC_RGB4, internalFormat: COMPRESSED_RGB_PVRTC_4BPPV1_IMG, pixelType: null };
_textureFmtGL[Format.PVRTC_RGBA4] = { format: Format.PVRTC_RGBA4, internalFormat: COMPRESSED_RGBA_PVRTC_4BPPV1_IMG, pixelType: null };


const BASIS_FORMAT = {
    "cTFETC1": 0,
    "cTFETC2": 1,
    "cTFBC1": 2,
    "cTFBC3": 3,
    "cTFBC4": 4,
    "cTFBC5": 5,
    "cTFBC7": 6,
    "cTFPVRTC1_4_RGB": 8,
    "cTFPVRTC1_4_RGBA": 9,
    "cTFASTC_4x4": 10,
    "cTFRGBA32": 13,
    "cTFRGB565": 14,
    "cTFRGBA4444": 16,
    "cTFPVRTC2_4_RGBA": 19
}

/**
 * enums
 */
const enums = {
    // buffer usage
    USAGE_STATIC: 35044,  // gl.STATIC_DRAW
    USAGE_DYNAMIC: 35048, // gl.DYNAMIC_DRAW
    USAGE_STREAM: 35040,  // gl.STREAM_DRAW

    // index buffer format
    INDEX_FMT_UINT8: 5121,  // gl.UNSIGNED_BYTE
    INDEX_FMT_UINT16: 5123, // gl.UNSIGNED_SHORT
    INDEX_FMT_UINT32: 5125, // gl.UNSIGNED_INT (OES_element_index_uint)

    // vertex attribute semantic
    ATTR_POSITION: 'a_position',
    ATTR_NORMAL: 'a_normal',
    ATTR_TANGENT: 'a_tangent',
    ATTR_BITANGENT: 'a_bitangent',
    ATTR_WEIGHTS: 'a_weights',
    ATTR_JOINTS: 'a_joints',
    ATTR_COLOR: 'a_color',
    ATTR_COLOR0: 'a_color0',
    ATTR_COLOR1: 'a_color1',
    ATTR_UV: 'a_uv',
    ATTR_UV0: 'a_uv0',
    ATTR_UV1: 'a_uv1',
    ATTR_UV2: 'a_uv2',
    ATTR_UV3: 'a_uv3',
    ATTR_UV4: 'a_uv4',
    ATTR_UV5: 'a_uv5',
    ATTR_UV6: 'a_uv6',
    ATTR_UV7: 'a_uv7',
    ATTR_TEX_COORD: 'a_texCoord',
    ATTR_TEX_COORD1: 'a_texCoord1',
    ATTR_TEX_COORD2: 'a_texCoord2',
    ATTR_TEX_COORD3: 'a_texCoord3',
    ATTR_TEX_COORD4: 'a_texCoord4',
    ATTR_TEX_COORD5: 'a_texCoord5',
    ATTR_TEX_COORD6: 'a_texCoord6',
    ATTR_TEX_COORD7: 'a_texCoord7',
    ATTR_TEX_COORD8: 'a_texCoord8',


    // vertex attribute type
    ATTR_TYPE_INT8: 5120,    // gl.BYTE
    ATTR_TYPE_UINT8: 5121,   // gl.UNSIGNED_BYTE
    ATTR_TYPE_INT16: 5122,   // gl.SHORT
    ATTR_TYPE_UINT16: 5123,  // gl.UNSIGNED_SHORT
    ATTR_TYPE_INT32: 5124,   // gl.INT
    ATTR_TYPE_UINT32: 5125,  // gl.UNSIGNED_INT
    ATTR_TYPE_FLOAT32: 5126, // gl.FLOAT

    // texture filter
    FILTER_NEAREST: 0,
    FILTER_LINEAR: 1,

    // texture wrap mode
    WRAP_REPEAT: 10497, // gl.REPEAT
    WRAP_CLAMP: 33071,  // gl.CLAMP_TO_EDGE
    WRAP_MIRROR: 33648, // gl.MIRRORED_REPEAT

    // texture format
    // compress formats
    TEXTURE_FMT_RGB_DXT1: 0,
    TEXTURE_FMT_RGBA_DXT1: 1,
    TEXTURE_FMT_RGBA_DXT3: 2,
    TEXTURE_FMT_RGBA_DXT5: 3,
    TEXTURE_FMT_RGB_ETC1: 4,
    TEXTURE_FMT_RGB_PVRTC_2BPPV1: 5,
    TEXTURE_FMT_RGBA_PVRTC_2BPPV1: 6,
    TEXTURE_FMT_RGB_PVRTC_4BPPV1: 7,
    TEXTURE_FMT_RGBA_PVRTC_4BPPV1: 8,

    // normal formats
    TEXTURE_FMT_A8: 9,
    TEXTURE_FMT_L8: 10,
    TEXTURE_FMT_L8_A8: 11,
    TEXTURE_FMT_R5_G6_B5: 12,
    TEXTURE_FMT_R5_G5_B5_A1: 13,
    TEXTURE_FMT_R4_G4_B4_A4: 14,
    TEXTURE_FMT_RGB8: 15,
    TEXTURE_FMT_RGBA8: 16,
    TEXTURE_FMT_RGB16F: 17,
    TEXTURE_FMT_RGBA16F: 18,
    TEXTURE_FMT_RGB32F: 19,
    TEXTURE_FMT_RGBA32F: 20,
    TEXTURE_FMT_R32F: 21,
    TEXTURE_FMT_111110F: 22,
    TEXTURE_FMT_SRGB: 23,
    TEXTURE_FMT_SRGBA: 24,

    // depth formats
    TEXTURE_FMT_D16: 25,
    TEXTURE_FMT_D32: 26,
    TEXTURE_FMT_D24S8: 27,

    // etc2 format
    TEXTURE_FMT_RGB_ETC2: 28,
    TEXTURE_FMT_RGBA_ETC2: 29,

    // depth and stencil function
    DS_FUNC_NEVER: 512,    // gl.NEVER
    DS_FUNC_LESS: 513,     // gl.LESS
    DS_FUNC_EQUAL: 514,    // gl.EQUAL
    DS_FUNC_LEQUAL: 515,   // gl.LEQUAL
    DS_FUNC_GREATER: 516,  // gl.GREATER
    DS_FUNC_NOTEQUAL: 517, // gl.NOTEQUAL
    DS_FUNC_GEQUAL: 518,   // gl.GEQUAL
    DS_FUNC_ALWAYS: 519,   // gl.ALWAYS

    // render-buffer format
    RB_FMT_RGBA4: 32854,    // gl.RGBA4
    RB_FMT_RGB5_A1: 32855,  // gl.RGB5_A1
    RB_FMT_RGB565: 36194,   // gl.RGB565
    RB_FMT_D16: 33189,      // gl.DEPTH_COMPONENT16
    RB_FMT_S8: 36168,       // gl.STENCIL_INDEX8
    RB_FMT_D24S8: 34041,    // gl.DEPTH_STENCIL

    // blend-equation
    BLEND_FUNC_ADD: 32774,              // gl.FUNC_ADD
    BLEND_FUNC_SUBTRACT: 32778,         // gl.FUNC_SUBTRACT
    BLEND_FUNC_REVERSE_SUBTRACT: 32779, // gl.FUNC_REVERSE_SUBTRACT

    // blend
    BLEND_ZERO: 0,                          // gl.ZERO
    BLEND_ONE: 1,                           // gl.ONE
    BLEND_SRC_COLOR: 768,                   // gl.SRC_COLOR
    BLEND_ONE_MINUS_SRC_COLOR: 769,         // gl.ONE_MINUS_SRC_COLOR
    BLEND_DST_COLOR: 774,                   // gl.DST_COLOR
    BLEND_ONE_MINUS_DST_COLOR: 775,         // gl.ONE_MINUS_DST_COLOR
    BLEND_SRC_ALPHA: 770,                   // gl.SRC_ALPHA
    BLEND_ONE_MINUS_SRC_ALPHA: 771,         // gl.ONE_MINUS_SRC_ALPHA
    BLEND_DST_ALPHA: 772,                   // gl.DST_ALPHA
    BLEND_ONE_MINUS_DST_ALPHA: 773,         // gl.ONE_MINUS_DST_ALPHA
    BLEND_CONSTANT_COLOR: 32769,            // gl.CONSTANT_COLOR
    BLEND_ONE_MINUS_CONSTANT_COLOR: 32770,  // gl.ONE_MINUS_CONSTANT_COLOR
    BLEND_CONSTANT_ALPHA: 32771,            // gl.CONSTANT_ALPHA
    BLEND_ONE_MINUS_CONSTANT_ALPHA: 32772,  // gl.ONE_MINUS_CONSTANT_ALPHA
    BLEND_SRC_ALPHA_SATURATE: 776,          // gl.SRC_ALPHA_SATURATE

    // stencil operation
    STENCIL_DISABLE: 0,             // disable stencil
    STENCIL_ENABLE: 1,              // enable stencil
    STENCIL_INHERIT: 2,             // inherit stencil states

    STENCIL_OP_KEEP: 7680,          // gl.KEEP
    STENCIL_OP_ZERO: 0,             // gl.ZERO
    STENCIL_OP_REPLACE: 7681,       // gl.REPLACE
    STENCIL_OP_INCR: 7682,          // gl.INCR
    STENCIL_OP_INCR_WRAP: 34055,    // gl.INCR_WRAP
    STENCIL_OP_DECR: 7683,          // gl.DECR
    STENCIL_OP_DECR_WRAP: 34056,    // gl.DECR_WRAP
    STENCIL_OP_INVERT: 5386,        // gl.INVERT

    // cull
    CULL_NONE: 0,
    CULL_FRONT: 1028,
    CULL_BACK: 1029,
    CULL_FRONT_AND_BACK: 1032,

    // primitive type
    PT_POINTS: 0,         // gl.POINTS
    PT_LINES: 1,          // gl.LINES
    PT_LINE_LOOP: 2,      // gl.LINE_LOOP
    PT_LINE_STRIP: 3,     // gl.LINE_STRIP
    PT_TRIANGLES: 4,      // gl.TRIANGLES
    PT_TRIANGLE_STRIP: 5, // gl.TRIANGLE_STRIP
    PT_TRIANGLE_FAN: 6,   // gl.TRIANGLE_FAN
};

// Same as the Module.transcoder_texture_format enum
const BASIS_FORMAT_2_GL_FORMAT = {
    [BASIS_FORMAT.cTFETC1]: Format.ETC_RGB8,
    [BASIS_FORMAT.cTFETC2]: Format.ETC2_RGB8,
    [BASIS_FORMAT.cTFBC1]: Format.BC1,
    [BASIS_FORMAT.cTFBC3]: Format.BC3,
    [BASIS_FORMAT.cTFBC4]: Format.BC4,
    [BASIS_FORMAT.cTFBC5]: Format.BC5,
    [BASIS_FORMAT.cTFBC7]: Format.BC7,
    [BASIS_FORMAT.cTFPVRTC1_4_RGB]: Format.PVRTC_RGB4,
    [BASIS_FORMAT.cTFPVRTC1_4_RGBA]: Format.PVRTC_RGBA4,
    [BASIS_FORMAT.cTFASTC_4x4]: Format.ASTC_RGBA_4X4,
    // cTFATC_RGB:,
    // cTFATC_RGBA_INTERPOLATED_ALPHA:, 
    [BASIS_FORMAT.cTFRGBA32]: Format.RGBA32F,
    [BASIS_FORMAT.cTFRGB565]: Format.R5G6B5,
    // cTFBGR565:,
    [BASIS_FORMAT.cTFRGBA4444]: Format.RGBA16F,
    // cTFFXT1_RGB:, // FXT1 (desktop, Intel devices, this is a super obscure format)
    // cTFPVRTC2_4_RGB:,
    [BASIS_FORMAT.cTFPVRTC2_4_RGBA]: Format.PVRTC_RGBA4,
    // cTFETC2_EAC_R11:,
    // cTFETC2_EAC_RG11:,
}

const glTextureFmt = function (fmt) {
    let result = _textureFmtGL[fmt];
    if (result === undefined) {
        return _textureFmtGL[enums.TEXTURE_FMT_RGBA8];
    }
    return result;
}

/**
 * Basis 和 WebGL 压缩格式编号互转
 */
const BasisFormat2GlFormat = function (basisFormat) {
    return BASIS_FORMAT_2_GL_FORMAT[basisFormat];
}

async function start() {
    // if (window['CC_PREVIEW']) return;
    const WasmModule = await BASIS();
    const { BasisFile, initializeBasis } = WasmModule;
    initializeBasis();

    const log = console.log;

    var cccImageDownloader = function (url, options, onComplete) {
        if (cc.sys.capabilities.imageBitmap && cc.macro.ALLOW_IMAGE_BITMAP) {
            options.responseType = "blob";
            cc.assetManager.downloader.downloadFile(url, options, options.onFileProgress, onComplete);
        } else {
            cc.assetManager.downloader.downloadDomImage(url, options, onComplete);
        }
    }

    var downloadImage = function (url, options, onComplete) {
        if (window['CC_PREVIEW']) {
            cccImageDownloader(url, options, onComplete);
            return
        }

        let newFile = cc.path.changeExtname(url, '.basis');
        options.responseType = 'arraybuffer';
        cc.assetManager.downloader.downloadFile(newFile, options, (error, data) => {
            if (error) {
                cccImageDownloader(url, options, onComplete);
            } else {
                parseBasis(data, onComplete);
            }
        });
    }

    cc.assetManager.downloader.register({
        '.png': downloadImage,
        '.jpg': downloadImage,
    });


    var astcSupported, etcSupported, dxtSupported, pvrtcSupported, bc7Supported;
    var checkSupport = function () {
        let canvas = cc.game.canvas;
        let newCanvas = null;

        function call(params) {
            var gl = cc.game.canvas.getContext('webgl');
            astcSupported = !!gl.getExtension('WEBGL_compressed_texture_astc');
            etcSupported = !!gl.getExtension('WEBGL_compressed_texture_etc1');
            dxtSupported = !!gl.getExtension('WEBGL_compressed_texture_s3tc');
            pvrtcSupported = !!(gl.getExtension('WEBGL_compressed_texture_pvrtc')) || !!(gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'));
            bc7Supported = !!gl.getExtension('EXT_texture_compression_bptc');
            return;
        }

        if (!canvas) {
            cc.game.once(cc.game.EVENT_GAME_INITED, call);
            newCanvas = document.createElement('canvas');
            document.body.appendChild(newCanvas);
            var gl = newCanvas.getContext('webgl');
            astcSupported = !!gl.getExtension('WEBGL_compressed_texture_astc');
            etcSupported = !!gl.getExtension('WEBGL_compressed_texture_etc1');
            dxtSupported = !!gl.getExtension('WEBGL_compressed_texture_s3tc');
            pvrtcSupported = !!(gl.getExtension('WEBGL_compressed_texture_pvrtc')) || !!(gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'));
            bc7Supported = !!gl.getExtension('EXT_texture_compression_bptc');
            newCanvas.remove();
        } else {
            call();
        }

    }
    checkSupport();

    //region Extension
    //引擎扩展
    var engineExtend = function () {

        Object.defineProperty(cc.Texture2D.prototype, '_nativeAsset', {
            set: function (data) {
                if (data._compressed && data._data) {
                    this.initWithData(data._data, data.format || this._format, data.width, data.height);
                }
                else {
                    this.initWithElement(data);
                }
            },
            configurable: true,
            enumerable: true
        });

        if (cc.renderer && cc.renderer.Texture2D) {
            cc.renderer.Texture2D.prototype._setMipmap = function (images, flipY, premultiplyAlpha) {
                let glFmt = glTextureFmt(this._format);
                if (this._format == Format.BC7 ||
                    this._format == Format.BC1 ||
                    this._format == Format.BC3 ||
                    this._format == Format.ASTC_RGBA_4X4) {
                    this._compressed = true
                }
                let options = {
                    width: this._width,
                    height: this._height,
                    flipY: flipY,
                    premultiplyAlpha: premultiplyAlpha,
                    level: 0,
                    image: null
                };
                for (let i = 0; i < images.length; ++i) {
                    options.level = i;
                    options.width = this._width >> i;
                    options.height = this._height >> i;
                    options.image = images[i];
                    this._setImage(glFmt, options);
                }
            }
        } else {
            if (cc.gfx && cc.gfx.Texture2D) {
                cc.gfx.Texture2D.prototype._setMipmap = function (images, flipY, premultiplyAlpha) {
                    let glFmt = glTextureFmt(this._format);
                    if (this._format == Format.BC7 ||
                        this._format == Format.BC1 ||
                        this._format == Format.BC3 ||
                        this._format == Format.ASTC_RGBA_4X4) {
                        this._compressed = true
                    }
                    let options = {
                        width: this._width,
                        height: this._height,
                        flipY: flipY,
                        premultiplyAlpha: premultiplyAlpha,
                        level: 0,
                        image: null
                    };
                    for (let i = 0; i < images.length; ++i) {
                        options.level = i;
                        options.width = this._width >> i;
                        options.height = this._height >> i;
                        options.image = images[i];
                        this._setImage(glFmt, options);
                    }
                }
            }
        }
    }
    engineExtend();

    //region Parser
    var parseBasis = async function (data, onComplete) {
        const startTime = performance.now();
        const basisFile = new BasisFile(new Uint8Array(data));
        var width = basisFile.getImageWidth(0, 0);
        var height = basisFile.getImageHeight(0, 0);
        var images = basisFile.getNumImages();
        var levels = basisFile.getNumLevels(0);
        var has_alpha = basisFile.getHasAlpha();

        if (!width || !height || !images || !levels) {
            console.warn('Invalid .basis file');
            basisFile.close();
            basisFile.delete();
        }
        var formatString = 'UNKNOWN', format;
        if (astcSupported) {
            formatString = 'ASTC';
            format = BASIS_FORMAT.cTFASTC_4x4;
        } else if (bc7Supported) {
            formatString = 'BC7';
            format = BASIS_FORMAT.cTFBC7;
        } else if (dxtSupported) {
            if (has_alpha) {
                formatString = 'BC3';
                format = BASIS_FORMAT.cTFBC3;
            }
            else {
                formatString = 'BC1';
                format = BASIS_FORMAT.cTFBC1;
            }
        } else if (pvrtcSupported) {
            if (has_alpha) {
                formatString = 'PVRTC1_RGBA';
                format = BASIS_FORMAT.cTFPVRTC1_4_RGBA;
            }
            else {
                formatString = 'PVRTC1_RGB';
                format = BASIS_FORMAT.cTFPVRTC1_4_RGB;
            }

            if (((width & (width - 1)) != 0) || ((height & (height - 1)) != 0)) {
                log('ERROR: PVRTC1 requires square power of 2 textures');
            }
            if (width != height) {
                log('ERROR: PVRTC1 requires square power of 2 textures');
            }
        } else if (etcSupported) {
            formatString = 'ETC1';
            format = BASIS_FORMAT.cTFETC1;
        } else {
            formatString = 'RGB565';
            format = BASIS_FORMAT.cTFRGB565;
            log('Decoding .basis data to 565');
        }

        if (!basisFile.startTranscoding()) {
            log('startTranscoding failed');
            basisFile.close();
            basisFile.delete();
            return;
        }

        const isUncompressedFormat = WasmModule.formatIsUncompressed(format);
        const blockWidth = isUncompressedFormat ? 1 : 4, blockHeight = isUncompressedFormat ? 1 : 4;
        const bytesPerBlockOrPixel = WasmModule.getBytesPerBlockOrPixel(format);

        const dstSize = basisFile.getImageTranscodedSizeInBytes(0, 0, format);
        const dst = new Uint8Array(dstSize);
        // Use the high-level transcode API, which requires a .basis file. 
        if (!basisFile.transcodeImage(dst, 0, 0, format, 0, 0)) {
            // Always transcode the first image and the first mipmap level
            const image_index = 0;
            const level_index = 0;
            // Get the .basis file description
            var basisFileDesc = basisFile.getFileDesc();
            // Get the description of the file's first image (there could be multiple images, for texture arrays or videos)
            var basisImageDesc = basisFile.getImageDesc(image_index);
            // Get the description of this image's mipmap level
            var basisImageLevelDesc = basisFile.getImageLevelDesc(image_index, level_index);
            var status = false;
            // If we're transcoding to ETC1S, use the LowLevelETC1SImageTranscoder class. Otherwise use the transcodeUASTCImage() function.
            if (basisFileDesc.texFormat == WasmModule.basis_tex_format.cETC1S.value) {
                // Create an instance of the LowLevelETC1SImageTranscoder class.
                const etc1s_transcoder = new WasmModule.LowLevelETC1SImageTranscoder();

                // Create Uint8Array's pointing into the various bits of the .basis file holding the compressed data for the codebooks and the Huffman tables.
                var selectorPalette = new Uint8Array(data, basisFileDesc.selectorPaletteOfs, basisFileDesc.selectorPaletteLen);
                var endpointPalette = new Uint8Array(data, basisFileDesc.endpointPaletteOfs, basisFileDesc.endpointPaletteLen);
                var tables = new Uint8Array(data, basisFileDesc.tablesOfs, basisFileDesc.tablesLen);

                // Create a Uint8Array pointing to the image's compressed data. 
                // If it's an opaque .basis file, there will only be RGB data. For transparant .basis files, each RGB slice will be immediately followed by an alpha slice.
                // Compressed ETC1S alpha data is guaranteed to immediately follow the RGB data (it's always at odd slices in the .basis file).
                var compData = new Uint8Array(data, basisImageLevelDesc.rgbFileOfs, basisImageLevelDesc.rgbFileLen + basisImageLevelDesc.alphaFileLen);

                // Decompress the palettes. This only has to be done once for each .basis file.
                var status = etc1s_transcoder.decodePalettes(basisFileDesc.numEndpoints, endpointPalette, basisFileDesc.numSelectors, selectorPalette);
                if (status) {
                    // Decompress the Huffman tables. This only has to be done once for each .basis file.
                    status = etc1s_transcoder.decodeTables(tables);
                    if (status) {
                        // Now transcode the image using the container independent transcode API. This API does not interpret any .basis file structures - only the compressed ETC1S data.
                        status = etc1s_transcoder.transcodeImage(
                            format,
                            dst, dstSize / bytesPerBlockOrPixel,
                            compData,
                            basisImageDesc.numBlocksX, basisImageDesc.numBlocksY, basisImageDesc.origWidth, basisImageDesc.origHeight, level_index,
                            0, basisImageLevelDesc.rgbFileLen, basisFileDesc.hasAlphaSlices ? basisImageLevelDesc.rgbFileLen : 0, basisImageLevelDesc.alphaFileLen,
                            0,
                            basisFileDesc.hasAlphaSlices,
                            basisFileDesc.isVideo,
                            0,
                            0);

                        if (!status) {
                            log('transcodeImage() failed');
                        }
                    }
                    else {
                        log('decodeTables() failed');
                    }
                }
                else {
                    log('decodePalettes() failed');
                }

                etc1s_transcoder.delete();

                if (!status) {
                    log('etc1s_transcoder failed');
                    console.warn('etc1s_transcoder failed');
                    basisFile.close();
                    basisFile.delete();
                    return;
                }
                else {
                    log('Successfully called etc1s_transcoder.transcodeImage()', status);
                }
            } else {
                var compData = new Uint8Array(data, basisImageLevelDesc.rgbFileOfs, basisImageLevelDesc.rgbFileLen);
                status = WasmModule.transcodeUASTCImage(
                    format,
                    dst, dstSize / bytesPerBlockOrPixel,
                    compData,
                    basisImageDesc.numBlocksX, basisImageDesc.numBlocksY, basisImageDesc.origWidth, basisImageDesc.origHeight, level_index,
                    0, basisImageLevelDesc.rgbFileLen,
                    0,
                    basisFileDesc.hasAlphaSlices,
                    basisFileDesc.isVideo,
                    0,
                    0,
                    -1, -1);

                if (!status) {
                    log('transcodeUASTCImage() failed');
                    console.warn('transcodeUASTCImage() failed');
                    basisFile.close();
                    basisFile.delete();
                    return;
                } else {
                    log('Successfully called transcodeUASTCImage()', status);
                }
            }
        }

        const elapsed = performance.now() - startTime;

        basisFile.close();
        basisFile.delete();

        var alignedWidth = (width + 3) & ~3;
        var alignedHeight = (height + 3) & ~3;

        let err = null, out = null;
        out = {
            _data: dst,
            _compressed: true,
            width: alignedWidth,
            height: alignedHeight,
            format: BasisFormat2GlFormat(format)
        }
        onComplete && onComplete(err, out);
    }
}


start();
