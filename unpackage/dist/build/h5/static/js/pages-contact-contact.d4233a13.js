(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-contact"],{1626:function(n,t,a){"use strict";var e=a("4852"),i=a.n(e);i.a},3707:function(n,t,a){"use strict";a.r(t);var e=a("ac0b"),i=a.n(e);for(var r in e)"default"!==r&&function(n){a.d(t,n,(function(){return e[n]}))}(r);t["default"]=i.a},4852:function(n,t,a){var e=a("cfdd");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("ad4f7692",e,!0,{sourceMap:!1,shadowMode:!1})},ac0b:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{longitude:113.028439,latitude:23.146825}},methods:{callPhone:function(){uni.makePhoneCall({phoneNumber:"400-618-9090"})}}};t.default=e},c173:function(n,t,a){"use strict";a.r(t);var e=a("c8a0"),i=a("3707");for(var r in i)"default"!==r&&function(n){a.d(t,n,(function(){return i[n]}))}(r);a("1626");var c,o=a("f0c5"),u=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"d90c7ee0",null,!1,e["a"],c);t["default"]=u.exports},c8a0:function(n,t,a){"use strict";var e;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return e}));var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"contact"},[a("v-uni-image",{staticClass:"img",attrs:{src:"http://www.itcast.cn/2018czydz/images/gywmban.jpg"}}),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.callPhone.apply(void 0,arguments)}}},[n._v("联系电话：400-618-9090（点击拨打）")]),a("v-uni-view",[n._v("联系地址：广东省佛山市南海区狮山镇南海软件信息园桃园西路")])],1),a("v-uni-map",{staticClass:"map",attrs:{latitude:n.latitude,longitude:n.longitude}})],1)},r=[]},cfdd:function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contact .img[data-v-d90c7ee0]{width:%?750?%;height:%?320?%}.contact .info[data-v-d90c7ee0]{font-size:%?30?%}.contact .info uni-view[data-v-d90c7ee0]{padding:%?15?% %?20?%;line-height:%?70?%;border-bottom:1px solid #eee}.contact .map[data-v-d90c7ee0]{width:%?750?%;height:%?750?%}',""]),n.exports=t}}]);