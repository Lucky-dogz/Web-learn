(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{2981:function(t,n,i){"use strict";i.r(n);var o=i("61a8"),a=i("ee22");for(var e in a)"default"!==e&&function(t){i.d(n,t,(function(){return a[t]}))}(e);i("d84b");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"76a3e42c",null,!1,o["a"],s);n["default"]=c.exports},"3a9f":function(t,n,i){var o=i("6a0a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("2813a718",o,!0,{sourceMap:!1,shadowMode:!1})},4059:function(t,n,i){var o=i("e251");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("01487f59",o,!0,{sourceMap:!1,shadowMode:!1})},"4adc":function(t,n,i){"use strict";var o;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"goods_list"},t._l(t.goods,(function(n){return n.goods_big_logo?i("v-uni-view",{key:n.goods_id,staticClass:"goods_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigator(n.goods_id)}}},[i("v-uni-image",{attrs:{src:n.goods_big_logo}}),i("v-uni-view",{staticClass:"price"},[i("v-uni-text",[t._v("$"+t._s(n.goods_price))]),i("v-uni-text",[t._v("$2499")])],1),i("v-uni-view",{staticClass:"name"},[t._v(t._s(n.goods_name))])],1):t._e()})),1)},e=[]},"511a":function(t,n,i){"use strict";var o=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(i("8c89")),e={components:{goodsList:a.default},data:function(){return{swipers:[],goods:[],navs:[{icon:"iconfont icon-ziyuan",title:"Tom商城",path:"/pages/goods/goods"},{icon:"iconfont icon-guanyuwomen",title:"联系我们",path:"/pages/contact/contact"},{icon:"iconfont icon-tupian",title:"社区图片",path:"/pages/pics/pics"},{icon:"iconfont icon-shipin",title:"学习视频",path:"/pages/videos/videos"}]}},onLoad:function(){this.getSwipers(),this.getHotGoods()},methods:{getSwipers:function(){var t=this;this.$myRequest({url:"/v1/home/swiperdata"}).then((function(n){t.swipers=n.data.message}))},getHotGoods:function(){var t=this;this.$myRequest({url:"/v1/goods/search?pagenum=1"}).then((function(n){t.goods=n.data.message.goods}))},navItemClick:function(t){uni.navigateTo({url:t})},goGoodsDetail:function(t){uni.navigateTo({url:"/pages/goods-detail/goods-detail?goods_id="+t})}}};n.default=e},"5a93":function(t,n,i){"use strict";i.r(n);var o=i("ccd7"),a=i.n(o);for(var e in o)"default"!==e&&function(t){i.d(n,t,(function(){return o[t]}))}(e);n["default"]=a.a},"61a8":function(t,n,i){"use strict";var o;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"home"},[i("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"3000"}},t._l(t.swipers,(function(t){return i("v-uni-swiper-item",{key:t.id},[i("v-uni-image",{attrs:{src:t.image_src}})],1)})),1),i("v-uni-view",{staticClass:"nav"},t._l(t.navs,(function(n,o){return i("v-uni-view",{key:o,staticClass:"nav_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navItemClick(n.path)}}},[i("v-uni-view",{class:n.icon}),i("v-uni-text",[t._v(t._s(n.title))])],1)})),1),i("v-uni-view",{staticClass:"hot_goods"},[i("v-uni-view",{staticClass:"tit"},[t._v("推荐商品")]),i("goodsList",{attrs:{goods:t.goods},on:{goGoodsDetail:function(n){arguments[0]=n=t.$handleEvent(n),t.goGoodsDetail.apply(void 0,arguments)}}})],1)],1)},e=[]},6538:function(t,n,i){"use strict";var o=i("3a9f"),a=i.n(o);a.a},"6a0a":function(t,n,i){var o=i("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods_list[data-v-a55411f6]{display:flex;padding:0 %?15?%;flex-wrap:wrap;justify-content:space-between}.goods_list .goods_item[data-v-a55411f6]{background-color:#fff;width:%?350?%;margin:%?10?% 0;padding:%?20?%;box-sizing:border-box}.goods_list .goods_item uni-image[data-v-a55411f6]{display:block;width:80%;height:150px;margin:%?5?% auto}.goods_list .goods_item .price[data-v-a55411f6]{color:#b50e03;font-size:%?36?%}.goods_list .goods_item .price uni-text[data-v-a55411f6]:nth-child(2){color:#ccc;font-size:%?28?%;margin-left:%?17?%;text-decoration:line-through}.goods_list .goods_item .name[data-v-a55411f6]{font-size:%?28?%;line-height:%?45?%;padding-bottom:%?12?%;padding-top:%?10?%}',""]),t.exports=n},"8c89":function(t,n,i){"use strict";i.r(n);var o=i("4adc"),a=i("5a93");for(var e in a)"default"!==e&&function(t){i.d(n,t,(function(){return a[t]}))}(e);i("6538");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"a55411f6",null,!1,o["a"],s);n["default"]=c.exports},ccd7:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={props:["goods"],methods:{navigator:function(t){this.$emit("goGoodsDetail",t)}}};n.default=o},d84b:function(t,n,i){"use strict";var o=i("4059"),a=i.n(o);a.a},e251:function(t,n,i){var o=i("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home uni-swiper[data-v-76a3e42c]{width:100%;height:%?380?%}.home uni-swiper uni-image[data-v-76a3e42c]{width:100%;height:100%}.nav[data-v-76a3e42c]{display:flex}.nav .nav_item[data-v-76a3e42c]{width:25%;text-align:center;padding-bottom:%?10?%}.nav .nav_item uni-view[data-v-76a3e42c]{width:%?120?%;height:%?120?%;background-color:#b50e03;border-radius:%?60?%;margin:10px auto;line-height:%?120?%;color:#fff;font-size:%?48?%}.nav .nav_item .icon-tupian[data-v-76a3e42c]{font-size:%?42?%}.nav .nav_item uni-text[data-v-76a3e42c]{font-size:%?30?%}.hot_goods[data-v-76a3e42c]{background-color:#eee;overflow:hidden;margin-top:%?10?%}.hot_goods .tit[data-v-76a3e42c]{height:50px;line-height:50px;color:#b50e03;text-align:center;letter-spacing:15px;font-weight:600;background-color:#fff;margin:%?10?% 0}',""]),t.exports=n},ee22:function(t,n,i){"use strict";i.r(n);var o=i("511a"),a=i.n(o);for(var e in o)"default"!==e&&function(t){i.d(n,t,(function(){return o[t]}))}(e);n["default"]=a.a}}]);