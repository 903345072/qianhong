(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-region","components-zaiui-common-basics-orderdetail"],{"0353":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.indexes[data-v-4168727e]{position:relative}.indexBar[data-v-4168727e]{position:fixed;right:0;bottom:16%;padding:%?20?% %?20?% %?20?% %?60?%;display:flex;align-items:center}.indexBar .indexBar-box[data-v-4168727e]{width:%?40?%;height:auto;background:#fff;display:flex;flex-direction:column;box-shadow:0 0 %?20?% rgba(0,0,0,.1);border-radius:%?10?%}.indexBar-item[data-v-4168727e]{flex:1;width:%?40?%;height:%?40?%;display:flex;align-items:center;justify-content:center;font-size:%?24?%;color:#888}uni-movable-view.indexBar-item[data-v-4168727e]{width:%?40?%;height:%?40?%;z-index:9;position:relative}uni-movable-view.indexBar-item[data-v-4168727e]::before{content:"";display:block;position:absolute;left:0;top:%?10?%;height:%?20?%;width:%?4?%;background-color:#f37b1d}.indexToast[data-v-4168727e]{position:fixed;top:0;right:%?80?%;bottom:0;background:rgba(0,0,0,.5);width:%?100?%;height:%?100?%;border-radius:%?10?%;margin:auto;color:#fff;line-height:%?100?%;text-align:center;font-size:%?48?%}',""]),t.exports=i},"03f8":function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac1f"),e("e25e");var n=a(e("57e0")),o=a(e("e192")),s={components:{barTitle:n.default},data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,hidden:!0,listCurID:"",list:[],listCur:""}},onLoad:function(){for(var t=[{}],i=0;i<26;i++)t[i]={},t[i].name=String.fromCharCode(65+i);this.list=t,this.listCur=t[0]},onReady:function(){var t=this;o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0}),uni.createSelectorQuery().select(".indexBar-box").boundingClientRect((function(i){t.boxTop=i.top})).exec(),uni.createSelectorQuery().select(".indexes").boundingClientRect((function(i){t.barTop=i.top})).exec()},methods:{getCur:function(t){this.hidden=!1,this.listCur=this.list[t.target.id].name},setCur:function(t){this.hidden=!0,this.listCur=this.listCur},tMove:function(t){var i=t.touches[0].clientY,e=this.boxTop;if(i>e){var a=parseInt((i-e)/20);this.listCur=this.list[a].name}},tStart:function(){this.hidden=!1},tEnd:function(){this.hidden=!0,this.listCurID=this.listCur},indexSelect:function(t){for(var i=this.barHeight,e=this.list,a=Math.ceil(e.length*t.detail.y/i),n=0;n<e.length;n++)if(a<n+1)return this.listCur=e[n].name,this.movableY=20*n,!1}}};i.default=s},"45b4":function(t,i,e){var a=e("8d70");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("59144fcb",a,!0,{sourceMap:!1,shadowMode:!1})},4759:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("地区")])],2),e("v-uni-view",{staticClass:"padding"},[t._v("当前位置")]),e("v-uni-view",{staticClass:"cu-list menu"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"cuIcon-location text-red"}),e("v-uni-text",{staticClass:"text-black"},[t._v("重庆")])],1)],1)],1),e("v-uni-scroll-view",{staticClass:"indexes",style:[{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}],attrs:{"scroll-y":!0,"scroll-into-view":"indexes-"+t.listCurID,"scroll-with-animation":!0,"enable-back-to-top":!0}},[t._l(t.list,(function(i,a){return[e("v-uni-view",{key:a+"_0",class:"indexItem-"+i.name,attrs:{id:"indexes-"+i.name,"data-index":i.name}},[e("v-uni-view",{staticClass:"padding"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"cu-list menu"},t._l(2,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"text-black"},[t._v(t._s(i.name)+" "+t._s(t.list[n].name))])],1)],1)})),1)],1)]}))],2),e("v-uni-view",{staticClass:"indexBar",style:[{height:"calc(100vh - "+t.CustomBar+"px - 50px)"}]},[e("v-uni-view",{staticClass:"indexBar-box",on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.tStart.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.tEnd.apply(void 0,arguments)},touchmove:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.tMove.apply(void 0,arguments)}}},t._l(t.list,(function(i,a){return e("v-uni-view",{key:a,staticClass:"indexBar-item",attrs:{id:a},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.getCur.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.setCur.apply(void 0,arguments)}}},[t._v(t._s(i.name))])})),1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],staticClass:"indexToast"},[t._v(t._s(t.listCur))])],1)},n=[]},"57e0":function(t,i,e){"use strict";e.r(i);var a=e("c288"),n=e("cdf8");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("9e8c");var s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1f1d0f19",null,!1,a["a"],void 0);i["default"]=c.exports},"75c5":function(t,i,e){"use strict";var a=e("e688"),n=e.n(a);n.a},"8d70":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},"9e8c":function(t,i,e){"use strict";var a=e("45b4"),n=e.n(a);n.a},a162:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=a},c001:function(t,i,e){"use strict";e.r(i);var a=e("03f8"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},c288:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},cdf8:function(t,i,e){"use strict";e.r(i);var a=e("a162"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},d80b:function(t,i,e){"use strict";e.r(i);var a=e("4759"),n=e("c001");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("75c5");var s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4168727e",null,!1,a["a"],void 0);i["default"]=c.exports},e688:function(t,i,e){var a=e("0353");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("496a0b63",a,!0,{sourceMap:!1,shadowMode:!1})}}]);