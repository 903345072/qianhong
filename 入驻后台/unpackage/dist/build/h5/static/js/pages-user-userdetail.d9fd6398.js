(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userdetail"],{"0a1f":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};e.default=n},"0a6e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"zaiui-bar-title-box"},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},a=[]},"0d33":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("a612").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return null!=t.user?i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white"}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("用户详情")])],2),t.mask?i("v-uni-view",{staticStyle:{position:"absolute",left:"0",right:"0",top:"0",bottom:"0","z-index":"999",background:"rgba(167, 166, 166, 0.6)"}}):t._e(),i("v-uni-view",{staticStyle:{"border-top":"2px solid #EEEEEE","border-bottom":"2px solid #EEEEEE"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","margin-left":"20rpx","margin-top":"20rpx","margin-bottom":"20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",[i("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx","border-radius":"15rpx"},attrs:{src:t.getSrc(t.user.avatar)}})],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"flex-start","margin-left":"20rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"30rpx"}},[t._v(t._s(t.user.nickname))]),i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#818181"}},[t._v("联系方式: "+t._s(t.user.phone))]),i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#818181"}},[t._v("绑定时间: "+t._s(t.user.bind_time))])],1)],1),i("v-uni-view")],1)],1),i("v-uni-view",{staticStyle:{"border-bottom":"6px solid #EEEEEE"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBill()}}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","margin-top":"20rpx","margin-bottom":"20rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"36rpx"}},[t._v("账户明细")])],1)],1),i("v-uni-view",{staticStyle:{"border-bottom":"6px solid #EEEEEE"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRecord()}}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","margin-top":"20rpx","margin-bottom":"20rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"36rpx"}},[t._v("投注记录")])],1)],1),i("v-uni-view",{staticStyle:{"border-bottom":"6px solid #EEEEEE"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.transferUsers()}}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","margin-top":"20rpx","margin-bottom":"20rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"36rpx"}},[t._v("转移客户")])],1)],1),i("v-uni-view",{staticStyle:{"border-bottom":"6px solid #EEEEEE"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","margin-top":"20rpx","margin-bottom":"20rpx","margin-left":"20rpx","flex-direction":"column","margin-right":"20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[i("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v("交易统计")]),t.user.orders.length>0?i("v-uni-view",{staticStyle:{color:"#818181"}},[t._v("最近下单时间: "+t._s(t.user.orders[0]["order_time"]))]):t._e(),0==t.user.orders.length?i("v-uni-view",{staticStyle:{color:"#818181"}},[t._v("最近下单时间: 无")]):t._e()],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%",margin:"20rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"flex-start","line-height":"40rpx"}},[i("v-uni-text",{staticStyle:{color:"#818181","font-size":"26rpx"}},[t._v("累计消费金额")]),i("v-uni-text",{staticStyle:{color:"red","font-size":"32rpx"}},[t._v(t._s(t.user.sum_amount))])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"flex-start","line-height":"40rpx"}},[i("v-uni-text",{staticStyle:{color:"#818181","font-size":"26rpx"}},[t._v("近5单中奖情况")]),i("v-uni-view",{staticStyle:{display:"flex"}},t._l(t.user.fives,(function(e,n){return i("v-uni-text",{key:n,staticStyle:{color:"red","font-size":"32rpx",display:"flex"}},[1==e?i("v-uni-text",{staticStyle:{color:"red"}},[t._v("红")]):t._e(),0==e?i("v-uni-text",{staticStyle:{color:"black"}},[t._v("黑")]):t._e()],1)})),1)],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[i("v-uni-view",{staticStyle:{"font-size":"28rpx","line-height":"40rpx"}},[i("v-uni-view",{staticStyle:{color:"#818181","font-size":"26rpx"}},[t._v("累计下单数")]),i("v-uni-view",{staticStyle:{color:"#000000","font-size":"32rpx","font-weight":"bold"}},[t._v(t._s(t.user.order_count))])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%",margin:"20rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"flex-start","line-height":"40rpx"}},[i("v-uni-text",{staticStyle:{color:"#818181","font-size":"26rpx"}},[t._v("余额")]),i("v-uni-text",{staticStyle:{color:"red","font-size":"32rpx"}},[t._v(t._s(t.getToatal()))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",{staticStyle:{border:"1px solid #007AFF",color:"#007AFF","border-radius":"3px",padding:"5rpx 60rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openAddPop()}}},[t._v("修改金额")])],1)],1)],1)],1),null!=t.user?i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 20rpx","line-height":"80rpx",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","border-bottom":"1px solid #EEEEEE",padding:"15rpx 0"}},[i("v-uni-text",{staticStyle:{color:"#000000"}},[t._v("设为销售")]),i("v-uni-switch",{staticStyle:{color:"red"},attrs:{checked:1==t.user.is_seller},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setSeller(t.user.uid)}}})],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","border-bottom":"1px solid #EEEEEE",padding:"15rpx 0"}},[i("v-uni-text",{staticStyle:{color:"#000000"}},[t._v("是否启用")]),i("v-uni-switch",{attrs:{checked:1==t.user.status,color:"#007AFF"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setStatus(t.user.uid)}}})],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","border-bottom":"1px solid #EEEEEE",padding:"15rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goInvitedUser()}}},[i("v-uni-text",{staticStyle:{color:"#000000"}},[t._v("他的邀请")]),i("v-uni-text",[t._v(t._s(t.user.children_count))])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","border-bottom":"1px solid #EEEEEE",padding:"15rpx 0","align-items":"center"}},[i("v-uni-text",{staticStyle:{color:"#000000"}},[t._v("佣金比例")]),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-input",{staticStyle:{width:"60rpx","background-color":"#EEEEEE"},attrs:{type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.setYjRate(t.user.uid)}},model:{value:t.yj_rate,callback:function(e){t.yj_rate=e},expression:"yj_rate"}}),i("v-uni-text",[t._v("%")])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("v-uni-text",{staticStyle:{color:"#000000"}},[t._v("他的上级")]),i("v-uni-text",[t._v(t._s(t.user.parent_user))])],1)],1):t._e(),i("uni-popup",{ref:"addpop",staticStyle:{"z-index":"999999",height:"300rpx",position:"relative"},attrs:{"mask-click":!1,type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticClass:"cuIcon-close",staticStyle:{position:"absolute",top:"30rpx",right:"30rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close()}}}),i("v-uni-view",{staticStyle:{padding:"40rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","font-size":"34rpx","font-weight":"bold","margin-bottom":"10rpx","align-items":"center"}},[i("v-uni-text",[t._v("修改金额")]),i("v-uni-text",{staticStyle:{color:"grey","font-size":"25rpx"}},[t._v("(正数增加金额,负数减小金额)")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","border-bottom":"1px solid #EEEEEE",margin:"50rpx 0",padding:"10rpx 0"}},[i("v-uni-text",{staticStyle:{"margin-right":"50rpx",color:"grey"}},[t._v("金额")]),i("v-uni-input",{staticStyle:{width:"300rpx"},attrs:{type:"number",placeholder:"请输入金额,单笔5万"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","border-bottom":"1px solid #EEEEEE",margin:"50rpx 0",padding:"10rpx 0"}},[i("v-uni-text",{staticStyle:{"margin-right":"50rpx",color:"grey"}},[t._v("备注")]),i("v-uni-input",{staticStyle:{width:"300rpx"},attrs:{placeholder:"请输入备注"},model:{value:t.mark,callback:function(e){t.mark=e},expression:"mark"}})],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","font-size":"28rpx","font-weight":"bold","margin-bottom":"10rpx",color:"white","background-color":"#007AFF","border-radius":"60rpx",padding:"20rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMoney()}}},[t._v("提交")])],1)],1),i("uni-popup",{ref:"subpop",staticStyle:{"z-index":"999999"},attrs:{"mask-click":!1,type:"bottom","background-color":"#fff"}},[t._v("asd")])],1):t._e()},s=[]},"191d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'uni-page-body[data-v-678e780b]{background-color:#fff}body.?%PAGE?%[data-v-678e780b]{background-color:#fff}.uni-switch-input[data-v-678e780b]{background-color:#007aff!important}uni-switch .uni-switch-input[data-v-678e780b]:not([class*="bg-"]){background-color:#007aff!important}',""]),t.exports=e},"20a4":function(t,e,i){"use strict";i.r(e);var n=i("0d33"),a=i("689c");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("6373");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"678e780b",null,!1,n["a"],void 0);e["default"]=r.exports},"3ae2":function(t,e,i){var n=i("d785");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1ccef42a",n,!0,{sourceMap:!1,shadowMode:!1})},"50d7":function(t,e,i){var n=i("191d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("a4f1402a",n,!0,{sourceMap:!1,shadowMode:!1})},6373:function(t,e,i){"use strict";var n=i("50d7"),a=i.n(n);a.a},"689c":function(t,e,i){"use strict";i.r(e);var n=i("a94b"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},a936:function(t,e,i){"use strict";i.r(e);var n=i("0a1f"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},a94b:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("acd8"),i("a9e3");var a=n(i("da09")),s=(n(i("0ddc")),{name:"userdetail",components:{barTitle:a.default},data:function(){return{mask:!1,user:null,yj_rate:0,dashen_order:0,is_dashen:0,is_seller:0,is_moni:0,money:0,mark:"",status:1}},onLoad:function(t){var e={uid:t.uid};this.getData(e)},methods:{getData:function(t){var e=this;this.$api.getUserInfo(t).then((function(t){e.user=t.data,e.yj_rate=e.user.yj_rate,e.dashen_order=e.user.dashen_order,e.is_dashen=e.user.is_dashen,e.is_seller=e.user.is_seller,e.is_moni=e.user.is_moni,e.status=e.user.status}))},transferUsers:function(){var t=this;uni.showModal({title:"受转移销售昵称",editable:!0,success:function(e){e.confirm&&e.content&&t.$api.transferUser({uid:t.user.uid,real_name:e.content}).then((function(e){uni.showToast({title:"修改成功",success:function(){t.getData({uid:t.user.uid})}})}))}})},getSrc:function(t){return t},close:function(){this.mask=!1,this.$refs.addpop.close("bottom")},goInvitedUser:function(){uni.navigateTo({url:"/pages/user/InvitedUser?uid="+this.user.uid})},goBill:function(){uni.navigateTo({url:"/pages/user/bill?uid="+this.user.uid})},goRecord:function(){uni.navigateTo({url:"/pages/user/orderRecord?uid="+this.user.uid})},changeMoney:function(){var t=this;if(this.money&&0!=parseFloat(this.money)){var e={uid:this.user.uid,value:this.money,mark:this.mark};this.$api.changeMoney(e).then((function(e){t.mask=!1,t.money=0,t.mark="",t.user.now_money=e.data.now_money,t.$refs.addpop.close("bottom"),uni.showToast({title:"操作成功"})}))}},openAddPop:function(){this.mask=!0,this.$refs.addpop.open("bottom")},getToatal:function(){return parseFloat(Number(this.user.now_money)+Number(this.user.award_amount)).toFixed(2)},setDashen:function(t){this.is_dashen=1==this.is_dashen?0:1;var e={uid:t,value:this.is_dashen};this.$api.setDashen(e).then((function(t){uni.showToast({title:"操作成功"})}))},setMoni:function(t){this.is_moni=1==this.is_moni?0:1;var e={uid:t,value:this.is_moni};this.$api.setMoni(e).then((function(t){uni.showToast({title:"操作成功"})}))},setStatus:function(t){this.status=1==this.status?0:1;var e={uid:t,value:this.status};this.$api.setStatus(e).then((function(t){uni.showToast({title:"操作成功"})}))},setDashenOrder:function(t){var e={uid:t,value:this.dashen_order};this.dashen_order&&parseFloat(this.dashen_order)>0&&this.$api.setDashenOrder(e).then((function(t){uni.showToast({title:"操作成功"})}))},setYjRate:function(t){var e={uid:t,value:this.yj_rate};this.yj_rate&&parseFloat(this.yj_rate)>=0&&this.$api.setYjRate(e).then((function(t){uni.showToast({title:"操作成功"})}))},setSeller:function(t){this.is_seller=1==this.is_seller?0:1;var e={uid:t,value:this.is_seller};this.$api.setSeller(e).then((function(t){uni.showToast({title:"操作成功"})}))}}});e.default=s},ab22:function(t,e,i){"use strict";var n=i("3ae2"),a=i.n(n);a.a},d785:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-771a69a1]{z-index:998;padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-771a69a1]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-771a69a1]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-771a69a1]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-771a69a1]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-771a69a1]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-771a69a1]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=e},da09:function(t,e,i){"use strict";i.r(e);var n=i("0a6e"),a=i("a936");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("ab22");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"771a69a1",null,!1,n["a"],void 0);e["default"]=r.exports}}]);