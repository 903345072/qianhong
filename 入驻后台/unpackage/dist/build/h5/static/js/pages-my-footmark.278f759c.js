(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-footmark"],{"0a1f":function(i,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var i=getCurrentPages();i&&i.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};t.default=e},"0a6e":function(i,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"zaiui-bar-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[i.fixed?"fixed":"",i.shadow?"":"no-shadow",i.bgColor]},[i.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[i._v(i._s(i.backText))])],1):i._e(),i.isBack?i._e():a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.leftTap.apply(void 0,arguments)}}},[i._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.contentTap.apply(void 0,arguments)}}},[i._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.rightTap.apply(void 0,arguments)}}},[i._t("right")],2)],1),i.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):i._e()],1)},o=[]},1930:function(i,t,a){var e=a("24fb");t=e(!1),t.push([i.i,".zaiui-nav-view[data-v-8caa7414]{position:-webkit-sticky;position:sticky;transition:all .25s;padding-bottom:%?3.63?%;z-index:9999;width:100%}.zaiui-goods-list-view[data-v-8caa7414]{position:relative;margin:%?27.27?%;padding:%?27.27?%;border-radius:%?9.09?%}.zaiui-goods-list-view .zaiui-checked[data-v-8caa7414]{position:absolute;visibility:hidden}.zaiui-goods-list-view .zaiui-goods-list-box[data-v-8caa7414]{position:relative;padding:%?27.27?% 0}.zaiui-goods-list-view .zaiui-goods-list-box .cu-avatar[data-v-8caa7414]{position:absolute;height:%?127.27?%;width:%?127.27?%;transition:left .15s}.zaiui-goods-list-view .zaiui-goods-list-box .img-lower-box[data-v-8caa7414]{position:absolute;height:%?90.9?%;width:%?90.9?%;background-color:rgba(0,0,0,.6);border-radius:%?181.81?%;text-align:center;line-height:%?90.9?%;font-size:%?21.81?%;color:#dedede;top:%?45.45?%;left:%?18.18?%;transition:left .15s}.zaiui-goods-list-view .zaiui-goods-list-box .goods-info-view[data-v-8caa7414]{position:relative;padding-left:%?154.54?%;height:%?127.27?%;transition:all .15s}.zaiui-goods-list-view .zaiui-goods-list-box .goods-info-view .goods-info-tools[data-v-8caa7414]{position:absolute;bottom:0;width:calc(100% - %?154.54?%);transition:width .15s}.zaiui-goods-list-view .zaiui-goods-list-box .goods-info-view .goods-info-tools .cu-tag[data-v-8caa7414]{position:absolute;right:0;bottom:%?3.63?%}.zaiui-goods-list-view .zaiui-goods-list-box[data-v-8caa7414]:last-child{padding-bottom:0}.zaiui-goods-list-view .zaiui-goods-list-box + .zaiui-goods-list-box[data-v-8caa7414]{border-top:%?2?% solid hsla(0,0%,70.2%,.1)}.zaiui-goods-list-view .zaiui-goods-list-box.zaiui-lower-shelf .cu-avatar[data-v-8caa7414]{opacity:.6}.zaiui-goods-list-view .zaiui-goods-list-box.zaiui-lower-shelf .goods-info-view[data-v-8caa7414]{opacity:.6}.zaiui-goods-list-view.checked .zaiui-checkbox-view .zaiui-checked[data-v-8caa7414]{top:%?21.81?%;transition:top .15s}.zaiui-goods-list-view.checked .zaiui-checkbox-view .text-black[data-v-8caa7414]{padding-left:%?59.99?%;transition:all .15s}.zaiui-goods-list-view.checked .zaiui-goods-list-box .zaiui-checked[data-v-8caa7414]{top:%?69.09?%;transition:top .15s}.zaiui-goods-list-view.checked .zaiui-goods-list-box .cu-avatar[data-v-8caa7414]{left:%?59.99?%;transition:left .15s}.zaiui-goods-list-view.checked .zaiui-goods-list-box .goods-info-view[data-v-8caa7414]{padding-left:%?209.09?%;transition:all .15s}.zaiui-goods-list-view.checked .zaiui-goods-list-box .goods-info-view .goods-info-tools[data-v-8caa7414]{width:calc(100% - %?209.09?%);transition:width .15s}.zaiui-goods-list-view.checked .zaiui-goods-list-box.zaiui-lower-shelf .img-lower-box[data-v-8caa7414]{left:%?76.36?%;transition:all .15s}.zaiui-goods-list-view.checked .zaiui-checked[data-v-8caa7414]{position:absolute;visibility:visible;-webkit-transform:scale(.7);transform:scale(.7);z-index:999}.zaiui-footer-fixed[data-v-8caa7414]{box-shadow:0 %?-2?% %?9.09?% 0 #ececec;z-index:99999}.zaiui-footer-fixed .cu-bar[data-v-8caa7414]{width:100%}.zaiui-footer-fixed .cu-bar .checked-view[data-v-8caa7414]{position:relative;z-index:999}.zaiui-footer-fixed .cu-bar .checked-view .zaiui-checked[data-v-8caa7414]{position:relative;margin-right:%?9.09?%;top:%?-5.45?%;-webkit-transform:scale(.7);transform:scale(.7)}.zaiui-add-btn-view-box[data-v-8caa7414]{position:fixed;z-index:999999;bottom:%?181.81?%;right:%?27.27?%}.zaiui-add-btn-view-box .cu-btn[data-v-8caa7414]{margin:auto;width:%?81.81?%;height:%?81.81?%;font-weight:800;border-radius:50%;font-size:%?36.36?%;border:%?9.09?% solid #fff;box-shadow:0 0 %?14.54?% %?7.27?% #d0d0d0}",""]),i.exports=t},"3ae2":function(i,t,a){var e=a("d785");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var o=a("4f06").default;o("1ccef42a",e,!0,{sourceMap:!1,shadowMode:!1})},"3e9c":function(i,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white",isBack:!0},on:{rightTap:function(t){arguments[0]=t=i.$handleEvent(t),i.rightTap.apply(void 0,arguments)}}},[a("template",{attrs:{slot:"content"},slot:"content"},[i._v("我的足迹")]),i.goods_checked?a("template",{attrs:{slot:"right"},slot:"right"},[i._v("完成")]):a("template",{attrs:{slot:"right"},slot:"right"},[i._v("编辑")])],2),a("v-uni-view",{staticClass:"bg-white zaiui-nav-view"},[a("v-uni-scroll-view",{staticClass:"nav z",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":i.headTab.scrollLeft}},[i._l(i.headTab.list,(function(t,e){return[a("v-uni-view",{key:e+"_0",staticClass:"cu-item",class:e==i.headTab.TabCur?"select":"",attrs:{"data-id":e},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tabSelect.apply(void 0,arguments)}}},[a("v-uni-view",{class:e==i.headTab.TabCur?"text-black":""},[i._v(i._s(t))]),a("v-uni-view",{staticClass:"tab-dot bg-red"})],1)]}))],2)],1),a("v-uni-checkbox-group",{staticClass:"block",on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.checkboxChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"bg-white zaiui-goods-list-view",class:i.goods_checked?"checked":""},[a("v-uni-view",{staticClass:"zaiui-checkbox-view"},[a("v-uni-checkbox",{staticClass:"round red zaiui-checked",class:i.checkbox_list[0].checked?"checked":"",attrs:{checked:!!i.checkbox_list[0].checked,value:i.checkbox_list[0].id+""}}),a("v-uni-view",{staticClass:"text-black"},[i._v("今天")])],1),a("v-uni-view",{staticClass:"zaiui-goods-list-box"},[a("v-uni-checkbox",{staticClass:"round red zaiui-checked",class:i.checkbox_list[1].checked?"checked":"",attrs:{checked:!!i.checkbox_list[1].checked,value:i.checkbox_list[1].id+""}}),a("v-uni-view",{staticClass:"cu-avatar radius",style:[{backgroundImage:"url("+i.goods_img+")"}]}),a("v-uni-view",{staticClass:"goods-info-view"},[a("v-uni-view",{staticClass:"text-cut-2 text-black"},[i._v("商品名称 99新 苹果 iPhoneX")]),a("v-uni-view",{staticClass:"goods-info-tools"},[a("v-uni-text",{staticClass:"text-price text-red text-lg"},[i._v("2999.00")]),a("v-uni-text",{staticClass:"cu-tag radius line-red sm"},[i._v("找相似")])],1)],1)],1),a("v-uni-view",{staticClass:"zaiui-goods-list-box"},[a("v-uni-checkbox",{staticClass:"round red zaiui-checked",class:i.checkbox_list[2].checked?"checked":"",attrs:{checked:!!i.checkbox_list[2].checked,value:i.checkbox_list[2].id+""}}),a("v-uni-view",{staticClass:"cu-avatar radius",style:[{backgroundImage:"url("+i.goods_img+")"}]}),a("v-uni-view",{staticClass:"goods-info-view"},[a("v-uni-view",{staticClass:"text-cut-2 text-black"},[i._v("商品名称 99新 苹果 iPhoneX 256G 银色 测试换行内容的 测试一下效果的")]),a("v-uni-view",{staticClass:"goods-info-tools"},[a("v-uni-text",{staticClass:"text-price text-red text-lg"},[i._v("2999.00")]),a("v-uni-text",{staticClass:"cu-tag radius line-red sm"},[i._v("找相似")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"bg-white zaiui-goods-list-view",class:i.goods_checked?"checked":""},[a("v-uni-view",{staticClass:"zaiui-checkbox-view"},[a("v-uni-checkbox",{staticClass:"round red zaiui-checked",class:i.checkbox_list[3].checked?"checked":"",attrs:{checked:!!i.checkbox_list[3].checked,value:i.checkbox_list[3].id+""}}),a("v-uni-view",{staticClass:"text-black"},[i._v("2020-04-01")])],1),a("v-uni-view",{staticClass:"zaiui-goods-list-box zaiui-lower-shelf"},[a("v-uni-checkbox",{staticClass:"round red zaiui-checked",class:i.checkbox_list[4].checked?"checked":"",attrs:{checked:!!i.checkbox_list[4].checked,value:i.checkbox_list[4].id+""}}),a("v-uni-view",{staticClass:"cu-avatar radius",style:[{backgroundImage:"url("+i.goods_img_a+")"}]}),a("v-uni-view",{staticClass:"img-lower-box"},[i._v("已下架")]),a("v-uni-view",{staticClass:"goods-info-view"},[a("v-uni-view",{staticClass:"text-cut-2 text-black"},[i._v("商品名称 99新 苹果 iPhoneX")]),a("v-uni-view",{staticClass:"goods-info-tools"},[a("v-uni-text",{staticClass:"text-price text-red text-lg"},[i._v("2999.00")]),a("v-uni-text",{staticClass:"cu-tag radius line-red sm"},[i._v("找相似")])],1)],1)],1),a("v-uni-view",{staticClass:"zaiui-goods-list-box zaiui-lower-shelf"},[a("v-uni-checkbox",{staticClass:"round red zaiui-checked",class:i.checkbox_list[5].checked?"checked":"",attrs:{checked:!!i.checkbox_list[5].checked,value:i.checkbox_list[5].id+""}}),a("v-uni-view",{staticClass:"cu-avatar radius",style:[{backgroundImage:"url("+i.goods_img_a+")"}]}),a("v-uni-view",{staticClass:"img-lower-box"},[i._v("已下架")]),a("v-uni-view",{staticClass:"goods-info-view"},[a("v-uni-view",{staticClass:"text-cut-2 text-black"},[i._v("商品名称 99新 苹果 iPhoneX 256G 银色 测试换行内容的 测试一下效果的")]),a("v-uni-view",{staticClass:"goods-info-tools"},[a("v-uni-text",{staticClass:"text-price text-red text-lg"},[i._v("2999.00")]),a("v-uni-text",{staticClass:"cu-tag radius line-red sm"},[i._v("找相似")])],1)],1)],1)],1)],1),i.goods_checked?a("v-uni-view",{staticClass:"cu-tabbar-height"}):i._e(),i.goods_checked?a("v-uni-view",{staticClass:"bg-white zaiui-footer-fixed zaiui-foot-padding-bottom"},[a("v-uni-view",{staticClass:"cu-bar padding-lr"},[a("v-uni-view",{staticClass:"checked-view",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tapChecked.apply(void 0,arguments)}}},[a("v-uni-checkbox",{staticClass:"round red sm zaiui-checked",class:i.checkbox_all?"checked":"",attrs:{checked:i.checkbox_all}}),a("v-uni-text",{staticClass:"text-black text-lg"},[i._v("全选")])],1),a("v-uni-view",{staticClass:"btn-view"},[a("v-uni-button",{staticClass:"cu-btn radius bg-red"},[i._v("删除(3)")])],1)],1)],1):i._e()],1)},o=[]},"42ee":function(i,t,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("caad"),a("2532");var o=e(a("da09")),s=e(a("e3f4")),c={components:{barTitle:o.default},data:function(){return{headTab:{TabCur:0,scrollLeft:0,list:[]},goods_img:"/static/images/home/goods/1.png",goods_img_a:"/static/images/home/goods/2.png",checkbox_list:[],checkbox_all:!1,goods_checked:!1}},onLoad:function(){this.checkbox_list=[{id:1,checked:!0},{id:2,checked:!1},{id:3,checked:!1},{id:4,checked:!1},{id:5,checked:!1},{id:6,checked:!1}],this.headTab.list=["全部","手机","图书","电脑办公","游戏交易","办公用品","家电","数码","教育","测试","测试1"]},onReady:function(){s.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{tabSelect:function(i){var t=i.currentTarget.dataset.id;this.headTab.TabCur=t,this.headTab.scrollLeft=60*(t-1),uni.pageScrollTo({scrollTop:0,duration:100})},rightTap:function(){this.goods_checked?this.goods_checked=!1:this.goods_checked=!0},checkboxChange:function(i){for(var t=this.checkbox_list,a=i.detail.value,e=0;e<t.length;e++){var o=a.includes(t[e].id+"");t[e].checked=!!o}},tapChecked:function(){this.checkbox_all?this.checkbox_all=!1:this.checkbox_all=!0}}};t.default=c},"87d6":function(i,t,a){"use strict";var e=a("d485"),o=a.n(e);o.a},"97aa":function(i,t,a){"use strict";a.r(t);var e=a("42ee"),o=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return e[i]}))}(s);t["default"]=o.a},a936:function(i,t,a){"use strict";a.r(t);var e=a("0a1f"),o=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return e[i]}))}(s);t["default"]=o.a},ab22:function(i,t,a){"use strict";var e=a("3ae2"),o=a.n(e);o.a},d485:function(i,t,a){var e=a("1930");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var o=a("4f06").default;o("0a8d1a8a",e,!0,{sourceMap:!1,shadowMode:!1})},d785:function(i,t,a){var e=a("24fb");t=e(!1),t.push([i.i,".zaiui-bar-title-box .cu-bar[data-v-771a69a1]{z-index:998;padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-771a69a1]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-771a69a1]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-771a69a1]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-771a69a1]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-771a69a1]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-771a69a1]{width:100%;height:calc(0px + %?101?%)}",""]),i.exports=t},da09:function(i,t,a){"use strict";a.r(t);var e=a("0a6e"),o=a("a936");for(var s in o)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return o[i]}))}(s);a("ab22");var c=a("f0c5"),d=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"771a69a1",null,!1,e["a"],void 0);t["default"]=d.exports},dccc:function(i,t,a){"use strict";a.r(t);var e=a("3e9c"),o=a("97aa");for(var s in o)["default"].indexOf(s)<0&&function(i){a.d(t,i,(function(){return o[i]}))}(s);a("87d6");var c=a("f0c5"),d=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"8caa7414",null,!1,e["a"],void 0);t["default"]=d.exports}}]);