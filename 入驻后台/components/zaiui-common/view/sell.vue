<template>
	<view class="zaiui-sell-box" :class="show?'show':''">
		
		<view class="zaiui-bar-view-box">
			<!--小程序端的标题-->
			<!-- #ifdef MP -->
			<view class="text-center text-black zaiui-small-routine-title">消息列表</view>
			<!-- #endif -->
			
			<!--标题栏-->
			<!-- <view class="text-gray zaiui-bar-box">
				<text class="text-black text-lg">发布闲置</text>
				<text class="margin-left-sm">平台帮你卖 极速成交</text>
				<text class="cuIcon-close text-right close" @tap="closeTap"></text>
			</view> -->
		</view>
		
		<!--占位的-->
		<view class="zaiui-seat-height"></view>
		
		<!--中间内容区域-->
		<view v-if="typeListData.length==0" style="text-align: center;">
			暂无消息
		</view>
		<view class="zaiui-view-content">
			<type-list :list_data="typeListData" @listTap="typeListTap"></type-list>
		</view>
	</view>
</template>

<script>
	import typeList from '@/components/zaiui-common/list/type-list';
	
	import _sell_data from '@/static/zaiui/data/sell.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	
	export default {
		name: 'sell',
		components: { 
			typeList
		},
		data() {
			return {
				typeListData: [],
				timer: '',
				uid:0
			}
		},
		props: {
			show: {
				type: Boolean,
				default: true
			},
			scrollY: {
				type: Number,
				default: 0
			},
			scrollBottom: {
				type: Number,
				default: 0
			}
		},
		watch: {
			scrollY() {
				//通知他妈的滚动了。
				this.setPageScroll(this.scrollY);
			},
			scrollBottom() {
				if(this.scrollBottom != 0) {
					//通知他妈的触底了
					this.setReachBottom();
				}
			},
		},
		created() {
			//加载虚拟数据
			//this.typeListData = _sell_data.typeListData();
			var that = this
			this.$api.getShopChatList().then(res=>{
			
				that.typeListData = res.data
			})
			
		},
		mounted() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
			var that = this
			this.$api.getShopInfo().then(res=>{
					
				that.uid = res.data.uid+"shopid"
				this.connectSocketInit();
			
			})
		 
		},
		beforeDestroy() {
		           this.closeSocket();
							 clearInterval(this.timer);
		       },
		methods: {
			setData(msg){
				var gg = ""
				var gdata = this.typeListData
				console.log(msg)
				for(let i in gdata){
					if(gdata[i]["u_id"]+"uid" == msg.toId){
						gdata[i]["content"]["msg"] = msg.msg
						gg = gdata[i]
						gdata.splice(i,1)
					}
				}
				if(gg){
					this.typeListData.unshift(gg)
				}
			},
			connectSocketInit() {
			                // 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】
			                this.socketTask = uni.connectSocket({
			                    // 【非常重要】必须确保你的服务器是成功的,如果是手机测试千万别使用ws://127.0.0.1:9099【特别容易犯的错误】
			                    url: "ws://8.130.121.124:82?id="+this.uid,
			                    success(data) {
			                        console.log("websocket连接成功");
			                    },
			                });
			 var that = this
			                // 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
			                this.socketTask.onOpen((res) => {
			                  //  console.log("WebSocket连接正常打开中...！");
			                    this.is_open_socket = true;
			                    // 注：只有连接正常打开中 ，才能正常成功发送消息
			               
								//var dd = {type:'user',msg:{id:lastid,time:nowDate.getHours()+":"+nowDate.getMinutes(),type:type,userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:content}}
								var dd = {"flag":"heart","msg":{"type":"ping"}}
								this.timer = setInterval(()=>{
										this.socketTask.send({
											data: JSON.stringify(dd),
											async success() {
																				       
														},
													})
										}, 5000);
			                    // 注：只有连接正常打开中 ，才能正常收到消息
			                    this.socketTask.onMessage((res) => {
									
			                     var msgs = JSON.parse(res.data)
							  
								  if(msgs["msg"]["type"] != "ping" && msgs["msg"]["type"] != "bind"){
								
									var gdata = that.typeListData
									var uidarr =[]
									var is_inc = false
									var gg = ""
									for(let i in gdata){
										if(gdata[i]["u_id"]+"uid" == msgs.msg.userinfo.uid){
											gdata[i]["content"]["msg"] = msgs.msg
											gg = gdata[i]
											gdata.splice(i,1)
											is_inc = true
										}
									}
									if(gg){
										that.typeListData.unshift(gg)
									}
									
									if(is_inc == false){
										var d = {}
										d["u_id"] = parseInt(msgs["msg"]["userinfo"]["uid"])
										d["avatar"] = msgs["msg"]["userinfo"]["face"]
										d["u_name"] = msgs["msg"]["userinfo"]["username"]
										d["content"] = msgs
										that.typeListData.unshift(d)
									}
									
									//that.typeListData = []
								  }
								
								  	//msg = {type:'user',msg:{id:lastid,time:nowDate.getHours()+":"+nowDate.getMinutes(),type:type,userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:content}}
								  	// 本地模拟发送消息
								 
								
			                    });
			                })
			                // 这里仅是事件监听【如果socket关闭了会执行】
			                this.socketTask.onClose(() => {
			                    console.log("消息列表已经被关闭了")
			                })
			            },
			            // 关闭websocket【离开这个页面的时候执行关闭】
			            closeSocket() {
			                this.socketTask.close({
			                    success(res) {
			                        this.is_open_socket = false;
			                        console.log("消息列表关闭成功", res)
			                    },
			                    fail(err) {
			                        console.log("消息列表关闭失败", err)
			                    }
			                })
			            },
			
			//页面被滚动
			setPageScroll(scrollTop) {
				//console.log(scrollTop);
			},
			//触底了
			setReachBottom() {
				console.log('触底了');
			},
			closeTap() {
				this.$emit('closeTap');
			},
			typeListTap(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-sell-box {
		background: #FAFAFA;
		position: relative;
		min-height: 100vh;
		z-index: 99999;
		width: 100%;
		display: none;
		.zaiui-bar-view-box {
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 999999;
			background: #FAFAFA;
			
			/* #ifndef MP */
			height: calc(var(--status-bar-height) + 99.99rpx);
			/* #endif */
			
			/* #ifdef MP */
			height: calc(var(--status-bar-height) + 189.99rpx);
			/* #endif */
			
			padding: var(--status-bar-height) 27.27rpx 0 27.27rpx;
			align-items: center;
			.zaiui-bar-box {
				position: relative;
				width: 100%;
				align-items: center;
				line-height: 99.99rpx;
				.close {
					position: absolute;
					right: 27.27rpx;
					font-size: 40rpx;
					bottom: 9.09rpx;
				}
			}
		}
		
		.zaiui-seat-height {
			width: 100%;
			
			/* #ifndef MP */
			height: calc(var(--status-bar-height) + 99.99rpx);
			/* #endif */
			
			/* #ifdef MP */
			height: calc(var(--status-bar-height) + 199.99rpx);
			/* #endif */
		}
		.zaiui-view-content {
			padding: 0 27.27rpx 27.27rpx;
		}
	}
	.zaiui-sell-box.show {
		display: block;
	}
</style>
