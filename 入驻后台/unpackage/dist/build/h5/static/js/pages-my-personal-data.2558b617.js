(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-personal-data"],{"02c0":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-head-box[data-v-72357904]{position:relative;padding:%?45.45?% %?90.9?%}.zaiui-btn-view[data-v-72357904]{position:fixed;width:100%;bottom:0}.zaiui-btn-view .flex[data-v-72357904]{padding:%?18.18?%}",""]),t.exports=a},"0a1f":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},"0a6e":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box"},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},"199e":function(t,a,i){"use strict";var e=i("afea"),n=i.n(e);n.a},"3ae2":function(t,a,i){var e=i("d785");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("1ccef42a",e,!0,{sourceMap:!1,shadowMode:!1})},6845:function(t,a,i){"use strict";i.r(a);var e=i("7325"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},7325:function(t,a,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("da09")),s=e(i("e3f4")),c={components:{barTitle:n.default},data:function(){return{avatar_img:"/static/images/avatar/1.jpg",sexIndex:0,sexPicker:["男","女"],dateValue:"1945-10-01"}},onLoad:function(){},onReady:function(){s.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{editNameTap:function(){uni.navigateTo({url:"/pages/my/edit-name"})},sexPickerChange:function(t){this.sexIndex=t.detail.value},datePickerChange:function(t){this.dateValue=t.detail.value},synopsisTap:function(){uni.navigateTo({url:"/pages/my/edit-synopsis"})},addressTap:function(){uni.navigateTo({url:"/pages/my/address"})},editPhoneTap:function(){uni.navigateTo({url:"/pages/my/edit-phone"})},editContactCardsTap:function(){uni.navigateTo({url:"/pages/my/contact-cards"})},regionTap:function(){uni.navigateTo({url:"/pages/my/region"})}}};a.default=c},"8c6c":function(t,a,i){"use strict";i.r(a);var e=i("9dbe"),n=i("6845");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("199e");var c=i("f0c5"),o=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"72357904",null,!1,e["a"],void 0);a["default"]=o.exports},"9dbe":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("个人资料")])],2),i("v-uni-view",{staticClass:"bg-white solid-top zaiui-head-box"},[i("v-uni-view",{staticClass:"text-center margin-bottom-sm"},[i("v-uni-text",{staticClass:"text-black"},[t._v("完成")]),i("v-uni-text",{staticClass:"text-orange text-xxl"},[t._v("100%")]),i("v-uni-text",{staticClass:"text-black"},[t._v("，太棒啦！")])],1),i("v-uni-progress",{staticClass:"zaiui-progress-radius",attrs:{percent:"100",active:!0,"stroke-width":"10",activeColor:"#f37b1d"}})],1),i("v-uni-view",{staticClass:"cu-list menu sm-border margin-top"},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[t._v("头像")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"cu-avatar round sm",style:[{backgroundImage:"url("+t.avatar_img+")"}]})],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editNameTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("昵称")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("仔仔")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[t._v("性别")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-picker",{attrs:{value:t.sexIndex,range:t.sexPicker},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.sexPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker text-gray"},[t._v(t._s(t.sexIndex>-1?t.sexPicker[t.sexIndex]:"男"))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[t._v("出生日期")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-picker",{attrs:{mode:"date",value:t.dateValue,start:"1920-01-01",end:"2020-05-01"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.datePickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker text-gray"},[t._v(t._s(t.dateValue))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.synopsisTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("个人简介")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("交个朋友")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu sm-border margin-top"},[i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editPhoneTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("手机号")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("138****8000")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.regionTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("地区")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("太阳")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.addressTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("收货地址")])],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editContactCardsTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("联系卡")])],1)],1),i("v-uni-view",{staticClass:"cu-list menu sm-border margin-top"},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[t._v("注销账户")])],1)],1)],1)},n=[]},a936:function(t,a,i){"use strict";i.r(a);var e=i("0a1f"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},ab22:function(t,a,i){"use strict";var e=i("3ae2"),n=i.n(e);n.a},afea:function(t,a,i){var e=i("02c0");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("2d93a91a",e,!0,{sourceMap:!1,shadowMode:!1})},d785:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-771a69a1]{z-index:998;padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-771a69a1]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-771a69a1]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-771a69a1]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-771a69a1]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-771a69a1]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-771a69a1]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},da09:function(t,a,i){"use strict";i.r(a);var e=i("0a6e"),n=i("a936");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("ab22");var c=i("f0c5"),o=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"771a69a1",null,!1,e["a"],void 0);a["default"]=o.exports}}]);