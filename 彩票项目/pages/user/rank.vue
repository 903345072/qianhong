<template>
	<view style="width: 100%;overflow: hidden;position: absolute;">
		<view style="overflow: hidden;position: relative;background: url(../../static/images/index/god_bg.png) no-repeat 50%;width: 100%;background-size: 100% 100%;height: 1800rpx;">
			<view @tap="back" class="cuIcon-back" style="color: white;position: absolute;left: 10rpx;top: 20rpx;font-size: 50rpx;font-weight: bold;"></view>
			<view v-if="list.length>0" style="position: absolute;top: 550rpx;width: 100%;">
				<view @click="goDetail(list[0]['id'])" style="box-shadow: 5rpx 5rpx 10rpx #CCCCCC;padding: 20rpx 20rpx;margin: 20rpx 60rpx;margin-top: 30rpx;border-radius: 20rpx;background: linear-gradient(180deg,#fff,#ffe9bf);">
					<view style="margin-top: 20rpx;">
						<view style="display: flex;align-items: center;">
							<text style="color:#ffd85e;font-weight: bold;font-size: 32rpx;">NO.1</text>
							<view style="flex: 1;display: flex;align-items: center;">
								<view style="background: url(../../../static/img/no1.png) no-repeat;background-size: 115rpx 115rpx;position: relative;width: 120rpx;height: 120rpx;margin: 0 20rpx;">
									<image :src='list[0]["user"]["avatar"]' style="position: absolute;width: 92rpx;height: 92rpx;border-radius: 100%;top: 18rpx;left:18rpx"></image>
								</view>
								<text style="font-weight: bold;font-size: 32rpx;">{{list[0]["user"]["real_name"]}}</text>
								<text style="color: #d04343;font-weight: 700;font-size: 36rpx;margin-left: 55rpx;">{{list[0]["award_money"]}}元</text>
							</view>
						</view>
					</view>
				</view>
				<view @click="goDetail(list[1]['id'])" style="box-shadow: 5rpx 5rpx 10rpx #CCCCCC;padding: 20rpx 20rpx;margin: 20rpx 60rpx;margin-top: 30rpx;border-radius: 20rpx;background: linear-gradient(180deg,#fff,#ffdbdb);">
					<view style="margin-top: 20rpx;">
						<view style="display: flex;align-items: center;justify-content: space-around;">
							<text style="color:#cdcdd7;font-weight: bold;font-size: 32rpx;">NO.2</text>
							<view style="flex: 1;display: flex;align-items: center;">
								<view style="background: url(../../../static/img/no2.png) no-repeat;background-size: 115rpx 115rpx;position: relative;width: 120rpx;height: 120rpx;margin: 0 20rpx">
									<image :src='list[1]["user"]["avatar"]' style="position: absolute;width: 92rpx;height: 92rpx;border-radius: 100%;top: 18rpx;left:18rpx"></image>
								</view>
								<text style="font-weight: bold;font-size: 32rpx;">{{list[1]["user"]["real_name"]}}</text>
								<text style="color: #d04343;font-weight: 700;font-size: 36rpx;margin-left: 55rpx;">{{list[1]["award_money"]}}元</text>
							</view>
						</view>
					</view>
				</view>
				<view @click="goDetail(list[2]['id'])" style="box-shadow: 5rpx 5rpx 10rpx #CCCCCC;padding: 20rpx 20rpx;margin: 20rpx 60rpx;margin-top: 30rpx;border-radius: 20rpx;background: linear-gradient(180deg,#fff,#fcf4e3);">
					<view style="margin-top: 20rpx;">
						<view style="display: flex;align-items: center;justify-content: space-around;">
							<text style="color:#f3935c;font-weight: bold;font-size: 32rpx;">NO.3</text>
							<view style="flex: 1;display: flex;align-items: center;">
								<view style="background: url(../../../static/img/no3.png) no-repeat;background-size: 115rpx 115rpx;position: relative;width: 120rpx;height: 120rpx;margin: 0 20rpx">
									<image :src='list[2]["user"]["avatar"]' style="position: absolute;width: 92rpx;height: 92rpx;border-radius: 100%;top: 18rpx;left:18rpx"></image>
								</view>
								<text style="font-weight: bold;font-size: 32rpx;">{{list[2]["user"]["real_name"]}}</text>
								<text style="color: #d04343;font-weight: 700;font-size: 36rpx;margin-left: 55rpx;">{{list[2]["award_money"]}}元</text>
							</view>
						</view>
					</view>
				</view>
				<view @click="goDetail(item.id)" v-for="(item,index) in list" :key="index" v-if="index>=3" style="box-shadow: 5rpx 5rpx 10rpx #CCCCCC;padding: 20rpx 20rpx;margin: 20rpx 60rpx;margin-top: 30rpx;border-radius: 20rpx;background: white;">
					<view style="margin-top: 20rpx;">
						<view style="display: flex;align-items: center;justify-content: space-around;">
							<text style="color:black;font-weight: bold;font-size: 32rpx;">NO.{{index+1}}</text>
							<view style="flex: 1;display: flex;align-items: center;">
								<view style="position: relative;width: 120rpx;height: 120rpx;margin: 0 20rpx">
									<image :src="item.user.avatar" style="position: absolute;width: 92rpx;height: 92rpx;border-radius: 100%;top: 18rpx;left:18rpx"></image>
								</view>
								<text style="font-weight: bold;font-size: 32rpx;">{{item.user.real_name}}</text>
								<text style="color: #d04343;font-weight: 700;font-size: 36rpx;margin-left: 55rpx;">{{item.award_money}}元</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list:[]
			}
		},
		onLoad() {
			this.$api.getAwardRank().then(res=>{
				this.list = res.data
					
			})
		},
		methods:{
			back(){
				uni.navigateBack()
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/flow/flowDetail?id='+id
				})
			},
		}
	}
</script>

<style>
</style>