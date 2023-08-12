<template>
	<view>
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">钱包</block>
		</bar-title>
		<view>
			<view style="margin: 30rpx 40rpx">我的余额</view>
			<view style="background: linear-gradient(90deg,#51caff,#3192ff);padding: 60rpx 0;margin: 20rpx 30rpx;border-radius: 20rpx;">
				<view style="display: flex;align-items: center;justify-content: space-around;color: white;">
					<view style="width: 80rpx;height: 80rpx;border-radius: 80rpx;text-align: center;background-color: white;line-height: 100rpx;">
						<image style="width: 80rpx;height: 80rpx;border-radius: 80rpx;" :src="avatar"></image>
					</view>
					
					<view style="display: flex;flex-direction: column;">
						<text>店铺余额</text>
						<text style="margin-top: 30rpx;">预存在平台用于服务费扣除</text>
					</view>
					<view style="display: flex;flex-direction: column;align-items: flex-end;">
						<text style="font-weight: bold;">{{money}}</text>
						<view style="display: flex;margin-top: 30rpx;">
							<view @click="goToWithdraw()" style="border: 1px solid white;padding: 5rpx 25rpx;border-radius: 10rpx;">提现</view>
							<view @click="goToRecharge()" style="border: 1px solid white;padding: 5rpx 25rpx;border-radius: 10rpx;background-color: white;color: #007AFF;margin-left: 10rpx;">充值</view>
						</view>
					</view>
				</view>
			</view>
			<view style="display: flex;margin: 40rpx 20rpx;justify-content: space-between;">
				<view style="display: flex;align-items: center;">
					<view style="width: 4px;height: 16px;background-color: #007AFF;"></view>
					<view style="margin-left: 10rpx;">余额变动明细</view>
				</view>
				<view style="display: flex;align-items: center;" @tap="goShopRe">
					<view>全部</view>
					<view class="cuIcon-right"></view>
				</view>
			</view>
			
			<view>
				<view v-if="index<5" v-for="(item,index) in list" :key="index" style="display: flex;background: linear-gradient(90deg,#f2f6ff,#b4d5ff);padding: 25rpx 20rpx;margin: 20rpx 30rpx;border-radius: 20rpx;justify-content: space-between;align-content: center;">
					<view style="display: flex;flex-direction: column;">
						<text>{{item.title}}</text>
						<text style="padding-top: 10rpx;color: grey;">{{item.time}}</Text>
					</view>
					
					<view style="display: flex;flex-direction: column;">
						<text> <span v-if="item.pm==0">-</span>{{item.number}}</text>
						<text style="padding-top: 10rpx;color: grey;">{{item.balance}}</Text>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	export default {
		name: "wallet",
		components: {
			barTitle
		},
		data(){
			return {
				money:0,
				can_withdraw:0,
				no_withdraw:0,
				is_sm:false,
				avatar:"",
				list:[]
			}
		},
		onLoad() {
			this.$api.getShopInfo().then(res=>{
				this.money = res.data.shop.shop_money
				this.can_withdraw = res.data.shop.shop_money
			    this.avatar = res.data.logo
			})
			this.getList()
		},
		methods:{
			goToWithdraw(){
				uni.navigateTo({
					url:"/pages/finace/withdraw"
				})
			},
			goShopRe(){
				uni.navigateTo({
					url:"/pages/user/shopRecord"
				})
			},
			getList(range){
				var data = {}
				this.$api.getShopBillList(data).then(res=>{
					this.list = res.data.data
				})
			},
			goToRecharge(){
			
				uni.navigateTo({
					url:"/pages/finace/recharge?money="+this.money
				})
			},
			goToWithdraw(){
				
				uni.navigateTo({
					url:"/pages/finace/withdraw?can_withdraw="+this.can_withdraw+"&no_withdraw="+this.no_withdraw
				})
			}
		}
	}
</script>

<style>
</style>
