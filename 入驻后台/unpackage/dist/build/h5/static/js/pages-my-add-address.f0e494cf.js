(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-add-address"],{"08e2":function(t,a,e){"use strict";e.r(a);var i=e("c6ef"),n=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},"0a1f":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=i},"0a6e":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"zaiui-bar-title-box"},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},"3ae2":function(t,a,e){var i=e("d785");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1ccef42a",i,!0,{sourceMap:!1,shadowMode:!1})},"4e01":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".wecanui-footer-fixed .flex-direction[data-v-4c45ecce]{padding:%?18.18?%}",""]),t.exports=a},"74d3":function(t,a,e){"use strict";e.r(a);var i=e("a96a"),n=e("08e2");for(var u in n)["default"].indexOf(u)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(u);e("96db");var l=e("f0c5"),o=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"4c45ecce",null,!1,i["a"],void 0);a["default"]=o.exports},"96db":function(t,a,e){"use strict";var i=e("aabc"),n=e.n(i);n.a},a936:function(t,a,e){"use strict";e.r(a);var i=e("0a1f"),n=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},a96a:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("新增地址")]),e("template",{attrs:{slot:"right"},slot:"right"},[e("v-uni-text",{staticClass:"text-orange"},[t._v("保存")])],1)],2),e("v-uni-view",{staticClass:"cu-form-group margin-top"},[e("v-uni-view",{staticClass:"title"},[t._v("收货人名")]),e("v-uni-input",{attrs:{placeholder:"您的姓名"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.nameInput.apply(void 0,arguments)}}}),t.nameClose?e("v-uni-text",{staticClass:"cuIcon-roundclosefill text-grey"}):t._e()],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),e("v-uni-input",{attrs:{placeholder:"卖家和快递员联系您的方式"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.phoneInput.apply(void 0,arguments)}}}),t.phoneClose?e("v-uni-text",{staticClass:"cuIcon-roundclosefill text-grey"}):t._e()],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("所在地区")]),e("v-uni-picker",{attrs:{mode:"multiSelector",value:t.multiIndex,range:t.multiArray},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.MultiChange.apply(void 0,arguments)},columnchange:function(a){arguments[0]=a=t.$handleEvent(a),t.MultiColumnChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.multiArray[0][t.multiIndex[0]])+"，"+t._s(t.multiArray[1][t.multiIndex[1]])+"，"+t._s(t.multiArray[2][t.multiIndex[2]]))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("详细地址")]),e("v-uni-input",{attrs:{placeholder:"请输入详细的地址信息"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.addressInput.apply(void 0,arguments)}}}),t.addressClose?e("v-uni-text",{staticClass:"cuIcon-roundclosefill text-grey"}):t._e()],1)],1)},n=[]},aabc:function(t,a,e){var i=e("4e01");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("02f9868f",i,!0,{sourceMap:!1,shadowMode:!1})},ab22:function(t,a,e){"use strict";var i=e("3ae2"),n=e.n(i);n.a},c6ef:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("da09")),u=i(e("e3f4")),l={components:{barTitle:n.default},data:function(){return{multiIndex:[0,0,0],nameClose:!1,phoneClose:!1,addressClose:!1,multiArray:[["重庆市","四川省"],["渝中区","渝北区","江北区","南岸区"],["周边","周边地区"]]}},onLoad:function(){},onReady:function(){u.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{nameInput:function(t){var a=t.detail.value;this.nameClose=""!=a},phoneInput:function(t){var a=t.detail.value;this.phoneClose=""!=a},addressInput:function(t){var a=t.detail.value;this.addressClose=""!=a},MultiChange:function(t){this.multiIndex=t.detail.value},MultiColumnChange:function(t){var a={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(a.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:switch(a.multiIndex[0]){case 0:a.multiArray[1]=["渝中区","渝北区","江北区","南岸区"],a.multiArray[2]=["周边","周边地区"];break;case 1:a.multiArray[1]=["渝中区","渝北区","江北区","南岸区"],a.multiArray[2]=["周边","周边地区"];break}a.multiIndex[1]=0,a.multiIndex[2]=0;break;case 1:switch(a.multiIndex[0]){case 0:switch(a.multiIndex[1]){case 0:a.multiArray[2]=["周边","周边地区"];break;case 1:a.multiArray[2]=["周边","周边地区"];break;case 2:a.multiArray[2]=["周边","周边地区"];break;case 3:a.multiArray[2]=["周边","周边地区"];break;case 4:a.multiArray[2]=["周边","周边地区"];break}break;case 1:switch(a.multiIndex[1]){case 0:a.multiArray[2]=["周边","周边地区"];break;case 1:a.multiArray[2]=["周边","周边地区"];break;case 2:a.multiArray[2]=["周边","周边地区"];break}break}a.multiIndex[2]=0;break}this.multiArray=a.multiArray,this.multiIndex=a.multiIndex}}};a.default=l},d785:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-771a69a1]{z-index:998;padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-771a69a1]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-771a69a1]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-771a69a1]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-771a69a1]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-771a69a1]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-771a69a1]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},da09:function(t,a,e){"use strict";e.r(a);var i=e("0a6e"),n=e("a936");for(var u in n)["default"].indexOf(u)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(u);e("ab22");var l=e("f0c5"),o=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"771a69a1",null,!1,i["a"],void 0);a["default"]=o.exports}}]);