<template>
	<view class="zaiui-my-box" :class="show?'show':''">
		<view class="bg-gradual-red zaiui-head-box" style="background-image:linear-gradient(to right,#b4e8ff,#55aaff) ;position: relative;height: 400rpx;">
			<!--标题栏-->
			<!--小程序端不显示-->
		
			
			<!--用户信息-->
			<view class="zaiui-user-info-box" style="background-color: white;padding: 30rpx 30rpx;width: 90%;position: absolute;top: 30rpx;left: 5%;border-radius: 30rpx;">
				<!--未登陆-->
			
				
				<!--已登陆-->
				<view class="cu-list menu-avatar" >
					<view class="cu-item">
						<image class="cu-avatar round lg" :src="logo"></image>
					
						<view class="content text-xl">
							<view class="text-white">
								<text class="margin-right;" style="color: #3479df;">{{name}}</text>
								
							</view>
							<view class="text-white-bg text-sm" style="display: flex;align-items: center;background-color: #badafb;width: 100rpx;justify-content: center;height: 30rpx;border-radius: 15rpx;">
								<view style="color: white;background-color: #367bdf;width: 20rpx;height: 20rpx;text-align: center;line-height: 20rpx;border-radius: 20rpx;">
									<view class="cuIcon-check" style="font-size: 20rpx;"></view>
								</view>
								<text style="margin-left: 10rpx;color: #367bdf;font-size: 20rpx;">已认证</text>
							</view>
						</view>
					</view>
				</view>
				
				<!--用户数据-->
				<view class="z"  style="margin-top: 30rpx;">
					<view class="" style="color: #3479df;display: flex;align-items: center;justify-content: space-between;">
						<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;line-height: 60rpx;">
							<text>用户余额</text>
							<text>{{user_money}}</text>
						</view>
					    <view style="height: 50rpx;width: 1px;border-left: 1px solid #bbd5f1;">
					    	
					    </view>
						<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;line-height: 60rpx;">
							<text>用户数量</text>
							<text>{{user_count}}</text>
						</view>
						<view style="height: 50rpx;width: 1px;border-left: 1px solid #bbd5f1;">
							
						</view>
						<view @click="goShopRe()" style="display: flex;flex-direction: column;justify-content: center;align-items: center;line-height: 60rpx;">
							<view>
								<text>店铺余额</text>
								<text style="color: red;border-bottom: 1px solid grey;">(钱包)</text>
							</view>
							<text>{{shop_money}}</text>
						</view>
						
						
					
					</view>
				</view>
			</view>
			
		</view>
		
		
		<view class="zaiui-view-content" style="margin-top: 40rpx;">
			<!--用户数据-->
			<view class="padding-xs bg-white zaiui-user-info-order-box">
			
				<view class="cu-list grid col-4 no-border" style="display: flex;justify-content: space-around;align-items: center;">
					<view class="cu-item" @click="goOrderList()">
						
						<view   class="text-xxl text-black" ><image style="width: 60rpx;" mode="widthFix" src="../../../static/images/index/order.png"></image></view>
						<text class="text-sm">订单记录</text>
					</view>
					
					<view class="cu-item" @click="goNoSend()" style="position: relative;">
						
						<view  class="text-xxl text-black" ><image style="width: 80rpx;" mode="widthFix" src="../../../static/images/index/daikaijiang.png"></image></view>
						<text class="text-sm">待派奖</text>
						<view v-if="no_send_count>0" style="position: absolute;color: white;background-color: red;width: 42rpx;height: 42rpx;border-radius: 42rpx;top: 10rpx;right: 10rpx;line-height: 42rpx;">{{no_send_count}}</view>
					</view>
					
					<view class="cu-item" @click="goRechargeVerify()" style="position: relative;">
						
						<view  class="text-xxl text-black" ><image style="width: 80rpx;" mode="widthFix" src="../../../static/images/index/exchange.png"></image></view>
						<text class="text-sm">充值审核</text>
						<view v-if="no_recharge>0" style="position: absolute;color: white;background-color: red;width: 42rpx;height: 42rpx;border-radius: 42rpx;top: 10rpx;right: 10rpx;line-height: 42rpx;">{{no_recharge}}</view>
						
					</view>
					
					<view class="cu-item" @tap="goTixian()" style="position: relative;">
						
						<view class="text-xxl text-black" ><image style="width: 80rpx;" mode="widthFix"  src="../../../static/images/index/torecharge.png"></image></view>
						<text class="text-sm">提现申请</text>
						<view v-if="no_withdraw>0" style="position: absolute;color: white;background-color: red;width: 42rpx;height: 42rpx;border-radius: 42rpx;top: 10rpx;right: 10rpx;line-height: 42rpx;">{{no_withdraw}}</view>
						
					</view>
				
				</view>
			</view>
			
			<!--天天有钱-->
			<!-- <view class="padding-xs bg-white margin-top zaiui-user-info-money-box">
				<view class="text-black text-lg text-bold padding-sm">天天有钱</view>
				<view class="grid col-2 money-col">
					<view class="money-item">
						<view class="money-item-view">
							<view class="cu-avatar lg" style="background-image:url(/static/images/my/1.png);"/>
							<view class="money-content">
								<view class="text-black text-cut">边逛边赚钱</view>
								<view class="text-gray text-sm text-cut">最高提现20元</view>
							</view>
						</view>
					</view>
					<view class="money-item">
						<view class="money-item-view">
							<view class="cu-avatar lg" style="background-image:url(/static/images/my/2.png);"/>
							<view class="money-content">
								<view class="text-black text-cut">发条借钱</view>
								<view class="text-gray text-sm text-cut">最高额度50000</view>
							</view>
						</view>
					</view>
				</view>
			</view> -->
			
			<!--推荐工具-->
			<view class="padding-xs bg-white margin-top zaiui-user-info-tools-box">
				<view class="padding-sm tools-view">
					<view class="text-black text-bold text-lg tools-title">系统管理</view>
					
				</view>
				
				<view class="zaiui-tools-list-box">
					<view class="cu-list grid col-4 no-border">
						<block v-for="(item,index) in toolsList" :key="index">
							<view class="cu-item" v-if="index < 12" @tap="gridTap(item)">
								<view class="text-black" :class="['cuIcon-' + item.icon]"/>
								<text>{{item.name}}</text>
							</view>
						</block>
					</view>
				</view>
				
			</view>
			
		</view>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import config from '@/api/interface.js'
	import _my_data from '@/static/zaiui/data/my.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		name: 'my',
		components: { 
			barTitle
		},
		data() {
			return {
				toolsList: [], login: false,
				shop_money:0,
				name:"",
				logo:"",
				user_count:0,
				user_money:0,
				no_send_count:0,
				no_recharge:0,
				no_withdraw:0,
				timer: '',

			
			}
		},
		beforeDestroy() {
		      
				clearInterval(this.timer);
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
			
			
		},
		mounted() {
	
			this.$api.getShopInfo({}).then(res=>{
				this.user_count = res.data.user_count
				this.name = res.data.name
				this.logo = res.data.logo
				this.user_money = res.data.shop_money
				this.shop_money =res.data.shop.shop_money
				this.toolsList = _my_data.toolsListData();
			})
			
			
			
			this.getNoDealData()
			
			_tool.setBarColor(false);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
			this.timer = setInterval(()=>{
					this.getNoDealData()
					}, 15000);
			
		},
		methods: {
			getNoDealData(){
				var that = this
				uni.request({
						url:  config.config.baseUrl+"User/getNoDealData",				
						method: 'GET',
						header:{
							'token':uni.getStorageSync("token")
							
							// HTTP 请求 Header, header 中不能设置 Referer
						},
						data: {},
						success: res => {
							that.no_recharge = res.data.data.no_recharge
							that.no_send_count = res.data.data.no_send_count
							that.no_withdraw = res.data.data.no_withdraw
				       },
						fail: () => {},
						complete: () => {}
				});
				
				// this.$api.getNoDealData({}).then(res=>{
				// 	this.no_recharge = res.data.no_recharge
				// 	this.no_send_count = res.data.no_send_count
				// 	this.no_withdraw = res.data.no_withdraw
				// })
			},
			goShopRe(){
				uni.navigateTo({
					url:"/pages/finace/wallet"
				})
			},
			goRechargeVerify(){
				uni.navigateTo({
					url:"/pages/finace/rechargeVerify"
				})
			},
			
			goTixian(){
				uni.navigateTo({
					url:"/pages/finace/tixian"
				})
			},
			goNoSend(){
				uni.navigateTo({
					url:"/pages/order/noSendAwardOrderList"
				})
			},
			goOrderList(){
				uni.navigateTo({
					url:"/pages/order/orderlist"
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
			//购物车
			cartTap() {
				uni.navigateTo({
					url: "/pages/goods/my_cart"
				});
			},
			//足迹
			footmarkTap() {
				uni.navigateTo({
					url: "/pages/my/footmark"
				});
			},
			//我买到的
			order_list_tap() {
				uni.navigateTo({
					url: "/pages/order/orderlist"
				});
			},
			loginUrlTap() {
				uni.navigateTo({
					url: "/pages/my/login"
				});
			},
			loginTap() {
				if(this.login) {
					this.login = false;
				} else {
					this.login = true;
				}
			},
			realNameTap() {
				uni.navigateTo({
					url: "/pages/real_name/index"
				});
			},
			setupTap() {
				uni.navigateTo({
					url: "/pages/my/set-up"
				});
			},
			gridTap(item) {
				if(item.name == '退出登录') {
					uni.setStorageSync("token",null)
					this.loginUrlTap()
				}
				
				if(item.name == '系统设置') {
					this.setupTap()
				}
				
				if(item.name == '添加代理') {
					uni.navigateTo({
						url: "/pages/my/add-admin"
					});
				}
				if(item.name == '彩种管理') {
					uni.navigateTo({
						url: "/pages/my/game-set"
					});
				}
				if(item.name == '支付设置') {
					uni.navigateTo({
						url: "/pages/my/paysetting"
					});
				}
				if(item.name == '店铺充值') {
					uni.navigateTo({
						url: "/pages/finace/recharge?money="+this.shop_money
					});
				}
			},
			sponsoredTap() {
				uni.navigateTo({
					url: "/pages/my/sponsored"
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-my-box {
		width: 100%;
		display: none;
		.zaiui-head-box {
			padding-top: 0;
			padding-bottom: 72.72rpx;
			.zaiui-user-info-box {
				/* #ifdef MP */
				padding-top: calc(var(--status-bar-height) + 50rpx);
				/* #endif */
				.login-user-view {
					position: relative;
					text-align: center;
					.login-user-avatar-view {
						position: relative;
						margin-bottom: 18.18rpx;
					}
				}
				.cu-list.menu-avatar>.cu-item {
					background-color: inherit;
					.content {
						width: calc(100% - 94.54rpx - 59.99rpx - 20rpx);
						.text-white-bg {
							color: #e8e8e8;
							.text-border-x {
								margin-right: 25.45rpx;
							    position: relative;
								&:after {
									position: absolute;
									background: #dddddd;
								    top: 5.45rpx;
								    width: 1.81rpx;
									right: -12.72rpx;
								    height: 16.36rpx;
								    content: " ";
								}
							}
						}
					}
					&:after {
						width: 0;
						height: 0;
						border-bottom: 0;
					}
				}
				.cu-list.menu-avatar>.cu-item .content>view:first-child {
					font-size: 34.54rpx;
				}
			}
			.zaiui-user-info-num-box {
				.cu-list.grid.no-border {
					padding: 0;
				}
				.cu-list.grid.no-border>.cu-item {
				    padding-top: 27.27rpx;
				    padding-bottom: 9.09rpx;
				}
				.cu-list.grid {
					background-color: inherit;
				}
				.cu-list.grid>.cu-item text {
					color: #e8e8e8;
					font-size: 20rpx;
					line-height: 27.27rpx;
				}
			}
			.zaiui-user-info-tip-box {
				position: relative;
				margin: 18.18rpx 27.27rpx;
				border-radius: 9.09rpx;
				padding: 18.18rpx 27.27rpx;
				background: #ea8d8d;
				background-image: linear-gradient(45deg, #f7615f, #f553b3);
				.text-cut {
					padding-right: 45.45rpx;
				}
				.icon {
					position: absolute;
					right: 27.27rpx;
					top: 23.63rpx;
				}
			}
		}
		.zaiui-view-content {
			padding: 0 27.27rpx 54.54rpx;
			margin-top: -63.63rpx;
			.zaiui-user-info-order-box {
				border-radius: 18.18rpx;
				.cu-list.grid.no-border {
				    padding: 0;
				}
				.cu-list.grid.no-border>.cu-item {
				    padding-bottom: 9.09rpx;
				}
			}
			.cu-list.grid>.cu-item text {
			    color: inherit;
			}
			.zaiui-user-info-money-box {
				border-radius: 18.18rpx;
				.money-col {
					padding: 0 9.09rpx 9.09rpx;
					.money-item {
						position: relative;
						padding: 9.09rpx;
						.money-item-view {
							border: 1.81rpx solid #f3f2f3;
							border-radius: 18.18rpx;
							position: relative;
							padding: 9.09rpx;
							.cu-avatar {
								position: absolute;
								left: 9.09rpx;
							}
							.money-content {
								position: relative;
							    margin-left: 109.09rpx;
							    margin-bottom: 27.27rpx;
							    top: 12.72rpx;
							}
						}
					}
				}
			}
			.zaiui-user-info-tools-box {
				border-radius: 18.18rpx;
				.tools-view {
					position: relative;
					.tools-title {
						padding-right: 81.81rpx;	
					}
					.tools-right {
						position: absolute;
					    right: 9.09rpx;
					    bottom: 23.63rpx;	
					}
				}
				
			}
		}
	}
	.zaiui-my-box.show {
		display: block;
	}
</style>
