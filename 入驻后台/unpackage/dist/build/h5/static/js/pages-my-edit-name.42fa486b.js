(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-edit-name"],{"0a1f":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=i},"0a6e":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"zaiui-bar-title-box"},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},"253e":function(t,a,e){var i=e("be1a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0793519c",i,!0,{sourceMap:!1,shadowMode:!1})},3048:function(t,a,e){"use strict";e.r(a);var i=e("f1fb"),n=e("7c77");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("c4e9");var c=e("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"205c107e",null,!1,i["a"],void 0);a["default"]=u.exports},"3ae2":function(t,a,e){var i=e("d785");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1ccef42a",i,!0,{sourceMap:!1,shadowMode:!1})},"7c77":function(t,a,e){"use strict";e.r(a);var i=e("7d06"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"7d06":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("da09")),o=i(e("e3f4")),c={components:{barTitle:n.default},data:function(){return{}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{}};a.default=c},a936:function(t,a,e){"use strict";e.r(a);var i=e("0a1f"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},ab22:function(t,a,e){"use strict";var i=e("3ae2"),n=e.n(i);n.a},be1a:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.cu-form-group .title[data-v-205c107e]:before{content:"";position:absolute;height:%?27.27?%;width:%?3.63?%;background:#e6e6e6;top:%?16.36?%;right:%?12.72?%}.cu-form-group uni-input[data-v-205c107e]{color:#333}',""]),t.exports=a},c4e9:function(t,a,e){"use strict";var i=e("253e"),n=e.n(i);n.a},d785:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-771a69a1]{z-index:998;padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-771a69a1]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-771a69a1]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-771a69a1]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-771a69a1]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-771a69a1]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-771a69a1]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},da09:function(t,a,e){"use strict";e.r(a);var i=e("0a6e"),n=e("a936");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("ab22");var c=e("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"771a69a1",null,!1,i["a"],void 0);a["default"]=u.exports},f1fb:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[this._v("修改昵称")]),a("template",{attrs:{slot:"right"},slot:"right"},[a("v-uni-text",{staticClass:"text-orange"},[this._v("保存")])],1)],2),a("v-uni-view",{staticClass:"bg-red light text-sm zaiui-tip-view"},[a("v-uni-view",{staticClass:"text-cut content"},[this._v("昵称90天只能修改一次，请慎重哦")]),a("v-uni-text",{staticClass:"cuIcon-close icon"})],1),a("v-uni-view",{staticClass:"cu-form-group margin-top"},[a("v-uni-view",{staticClass:"title"},[this._v("新昵称")]),a("v-uni-input",{attrs:{placeholder:"请输入新昵称",value:"仔仔"}})],1),a("v-uni-view",{staticClass:"text-sm text-gray padding-sm"},[this._v("13个字以内，仅支持汉字、字母、数字或下划线")])],1)},n=[]}}]);