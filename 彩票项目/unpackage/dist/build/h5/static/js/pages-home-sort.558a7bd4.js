(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-sort"],{"0330":function(i,a,t){"use strict";t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={sortListData:function(){return[{id:1,name:"苹果",img:"/static/images/home/grid-icon/30.png"},{id:2,name:"华为",img:"/static/images/home/grid-icon/31.png"},{id:3,name:"小米",img:"/static/images/home/grid-icon/32.png"},{id:4,name:"vivo",img:"/static/images/home/grid-icon/33.png"},{id:5,name:"oppo",img:"/static/images/home/grid-icon/34.png"},{id:6,name:"魅族",img:"/static/images/home/grid-icon/35.png"},{id:7,name:"寄卖优选",img:"/static/images/home/grid-icon/36.png"},{id:8,name:"验机特惠",img:"/static/images/home/grid-icon/37.png"},{id:9,name:"直播特卖",img:"/static/images/home/grid-icon/38.png"},{id:10,name:"更多分类",img:"/static/images/home/grid-icon/39.png"}]}};a.default=e},"5f0e":function(i,a,t){"use strict";t("7a82");var e=t("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("ac1f");var n=e(t("0330")),o=e(t("e192")),c={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0,sortList:[]}},onLoad:function(){for(var i=[{}],a=0;a<26;a++)i[a]={},i[a].name=String.fromCharCode(65+a),i[a].id=a;this.list=i,this.listCur=i[0],this.sortList=n.default.sortListData()},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{BackPage:function(){uni.navigateBack()},TabSelect:function(i){this.tabCur=i.currentTarget.dataset.id,this.mainCur=i.currentTarget.dataset.id,this.verticalNavTop=50*(i.currentTarget.dataset.id-1)},VerticalMain:function(i){var a=this,t=0;if(this.load){for(var e=function(i){var e=uni.createSelectorQuery().select("#main-"+a.list[i].id);e.fields({size:!0},(function(e){a.list[i].top=t,t+=e.height,a.list[i].bottom=t})).exec()},n=0;n<this.list.length;n++)e(n);this.load=!1}for(var o=i.detail.scrollTop+10,c=0;c<this.list.length;c++)if(o>this.list[c].top&&o<this.list[c].bottom)return this.verticalNavTop=50*(this.list[c].id-1),this.tabCur=this.list[c].id,console.log(o),!1},searchTap:function(){uni.navigateTo({url:"/pages/home/search"})}}};a.default=c},b060:function(i,a,t){"use strict";var e=t("db54"),n=t.n(e);n.a},c3d8:function(i,a,t){var e=t("24fb");a=e(!1),a.push([i.i,'uni-page-body[data-v-e9a80ba2]{background-color:#fff}body.?%PAGE?%[data-v-e9a80ba2]{background-color:#fff}.zaiui-bar-search-title-box .cu-bar[data-v-e9a80ba2]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-search-title-box .cu-bar .content[data-v-e9a80ba2]{top:0;left:%?18.18?%;width:calc(100% - %?127.27?%)}.zaiui-bar-search-title-box .cu-bar .content .search-form[data-v-e9a80ba2]{display:inherit;flex:inherit;margin:0;color:#717171}.zaiui-bar-search-title-box .cu-bar .content .search-form [class*="cuIcon-"][data-v-e9a80ba2]{margin:0}.zaiui-bar-search-title-box .cu-bar.fixed.no-shadow[data-v-e9a80ba2]{box-shadow:inherit}.zaiui-bar-search-title-box .cu-bar.bg-white[data-v-e9a80ba2]{color:#333}.zaiui-bar-search-title-box .zaiui-seat-height[data-v-e9a80ba2]{width:100%;height:calc(0px + %?101?%)}.VerticalNav.nav[data-v-e9a80ba2]{width:%?200?%;color:#666;height:calc(100vh - (0px + %?101?%));white-space:normal}.VerticalNav.nav .cu-item[data-v-e9a80ba2]{width:100%;text-align:center;background-color:#fafafa;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-e9a80ba2]{background-color:#fff}.VerticalNav.nav .cu-item.cur[data-v-e9a80ba2]::after{content:"";width:%?7.27?%;height:%?32.72?%;border-radius:0 %?9.09?% %?9.09?% 0;position:absolute;background-color:currentColor;top:0;left:0;bottom:0;margin:auto}.VerticalBox[data-v-e9a80ba2]{display:flex}.VerticalMain[data-v-e9a80ba2]{background-color:#fff;height:calc(100vh - (0px + %?101?%));flex:1}.zaiui-grid-icon-box[data-v-e9a80ba2]{position:relative;width:100%}.zaiui-grid-icon-box .cu-list.grid[data-v-e9a80ba2]{background-color:inherit}.zaiui-grid-icon-box .cu-list.grid .grid-icon[data-v-e9a80ba2]{margin:0}.zaiui-grid-icon-box .cu-list.grid .grid-icon .icon[data-v-e9a80ba2]{width:%?127.27?%}.zaiui-grid-icon-box .cu-list.grid > .cu-item[data-v-e9a80ba2]{padding-bottom:%?9.09?%}.zaiui-grid-icon-box .cu-list.grid > .cu-item uni-text[data-v-e9a80ba2]{color:#333}.zaiui-grid-icon-box .cu-list.grid.no-border[data-v-e9a80ba2]{padding:0}',""]),i.exports=a},c44b:function(i,a,t){"use strict";t.d(a,"b",(function(){return e})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){}));var e=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("v-uni-view",[t("v-uni-view",{staticClass:"zaiui-bar-search-title-box"},[t("v-uni-view",{staticClass:"cu-bar fixed no-shadow bg-white"},[t("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.BackPage.apply(void 0,arguments)}}},[t("v-uni-text",{staticClass:"cuIcon-back"})],1),t("v-uni-view",{staticClass:"content search",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.searchTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"search-form round"},[t("v-uni-text",{staticClass:"cuIcon-search"}),t("v-uni-text",{staticClass:"margin-left-xs"},[i._v("输入您正在找的宝贝")])],1)],1)],1),t("v-uni-view",{staticClass:"zaiui-seat-height"})],1),t("v-uni-view",{staticClass:"VerticalBox"},[t("v-uni-scroll-view",{staticClass:"VerticalNav nav",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":i.verticalNavTop}},[i._l(i.list,(function(a,e){return[t("v-uni-view",{key:e+"_0",staticClass:"cu-item",class:e==i.tabCur?"text-red cur":"",attrs:{"data-id":e},on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.TabSelect.apply(void 0,arguments)}}},[t("v-uni-view",{class:e==i.tabCur?"text-black text-bold":""},[i._v("分类-"+i._s(a.name))])],1)]}))],2),t("v-uni-scroll-view",{staticClass:"VerticalMain",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-into-view":"main-"+i.mainCur},on:{scroll:function(a){arguments[0]=a=i.$handleEvent(a),i.VerticalMain.apply(void 0,arguments)}}},[i._l(i.list,(function(a,e){return[t("v-uni-view",{key:e+"_0",staticClass:"padding-top padding-lr",attrs:{id:"main-"+e}},[t("v-uni-view",{staticClass:"cu-bar bg-white"},[t("v-uni-view",{staticClass:"action"},[t("v-uni-text",{staticClass:"cuIcon-title text-red"}),t("v-uni-text",[i._v("标题栏-"+i._s(a.name))])],1)],1),t("v-uni-view",{staticClass:"zaiui-grid-icon-box"},[t("v-uni-view",{staticClass:"cu-list grid col-3 no-border"},[i._l(i.sortList,(function(a,e){return[t("v-uni-view",{key:e+"_0",staticClass:"cu-item"},[t("v-uni-view",{staticClass:"grid-icon"},[t("v-uni-image",{staticClass:"icon",attrs:{src:a.img,"lazy-load":!0,mode:"widthFix"}})],1),t("v-uni-text",{staticClass:"text-black"},[i._v(i._s(a.name))])],1)]}))],2)],1)],1)]}))],2)],1)],1)},n=[]},db54:function(i,a,t){var e=t("c3d8");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var n=t("4f06").default;n("98948894",e,!0,{sourceMap:!1,shadowMode:!1})},e671:function(i,a,t){"use strict";t.r(a);var e=t("c44b"),n=t("e880");for(var o in n)["default"].indexOf(o)<0&&function(i){t.d(a,i,(function(){return n[i]}))}(o);t("b060");var c=t("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"e9a80ba2",null,!1,e["a"],void 0);a["default"]=r.exports},e880:function(i,a,t){"use strict";t.r(a);var e=t("5f0e"),n=t.n(e);for(var o in e)["default"].indexOf(o)<0&&function(i){t.d(a,i,(function(){return e[i]}))}(o);a["default"]=n.a}}]);