(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-add-admin"],{"0a1f":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=n},"0a6e":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box"},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},e=[]},"0c87":function(t,a,i){"use strict";i.r(a);var n=i("8640"),e=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},"10da":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,"",""]),t.exports=a},1502:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("添加代理")])],2),i("v-uni-view",{staticClass:"cu-list menu margin-top"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[t._v("账号")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入账号"},model:{value:t.u_account,callback:function(a){t.u_account=a},expression:"u_account"}})],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[t._v("密码")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-input",{attrs:{placeholder:"请输入密码"},model:{value:t.u_pwd,callback:function(a){t.u_pwd=a},expression:"u_pwd"}})],1)],1)],1),i("v-uni-view",{staticClass:"bg-white zaiui-footer-fixed zaiui-foot-padding-bottom",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.savePwd()}}},[i("v-uni-view",{staticClass:"flex padding-sm flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-red"},[t._v("保存")])],1)],1)],1)},e=[]},"3ae2":function(t,a,i){var n=i("d785");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("1ccef42a",n,!0,{sourceMap:!1,shadowMode:!1})},"3d17":function(t,a,i){var n=i("10da");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("1e946b42",n,!0,{sourceMap:!1,shadowMode:!1})},6286:function(t,a,i){"use strict";var n=i("3d17"),e=i.n(n);e.a},8640:function(t,a,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(i("da09")),o=n(i("e3f4")),u={components:{barTitle:e.default},data:function(){return{skin:!0,pwd:"",gonggao:"",u_account:"",u_name:"",u_pwd:""}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{savePwd:function(){var t={u_pwd:this.u_pwd,u_account:this.u_account};this.$api.addAdmin(t).then((function(t){uni.showToast({title:"操作成功"})}))},SwitchSex:function(t){this.skin=t.detail.value},realNameTap:function(){uni.navigateTo({url:"/pages/real_name/index"})},personalTap:function(){uni.navigateTo({url:"/pages/my/personal-data"})}}};a.default=u},"90a3":function(t,a,i){"use strict";i.r(a);var n=i("1502"),e=i("0c87");for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("6286");var u=i("f0c5"),c=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,"af5d1264",null,!1,n["a"],void 0);a["default"]=c.exports},a936:function(t,a,i){"use strict";i.r(a);var n=i("0a1f"),e=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},ab22:function(t,a,i){"use strict";var n=i("3ae2"),e=i.n(n);e.a},d785:function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-771a69a1]{z-index:998;padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-771a69a1]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-771a69a1]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-771a69a1]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-771a69a1]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-771a69a1]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-771a69a1]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},da09:function(t,a,i){"use strict";i.r(a);var n=i("0a6e"),e=i("a936");for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("ab22");var u=i("f0c5"),c=Object(u["a"])(e["default"],n["b"],n["c"],!1,null,"771a69a1",null,!1,n["a"],void 0);a["default"]=c.exports}}]);