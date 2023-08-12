<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">彩种管理</block>
		</bar-title>
		
		<!--设置列表-->
		<view class="margin-top-lg checked-view">
			<view>
			
				<view style="display: inline-block;">
					<view v-for="(item,index) in games"  style="margin-left: 20rpx;padding: 20rpx 20rpx;" @click="pullset(item)">
					    <view style="display: flex;align-items: center;border-bottom: 1px solid #eee;">
							<view>
								<image style="width: 120rpx;height: 120rpx;" :src="getsrc(item.id)"></image>
							</view>
							<view style="display: flex;flex-direction: column;justify-content: center;margin-left: 10rpx;">
								<text style="font-weight: bold;">{{item.name}}</text>
								<text style="padding-top: 15rpx;color: grey;white-space: nowrap">最小投注金额{{item.start_money}}元,停售前5分钟截止投注</text>
							</view>
							<view style="margin-left: 20rpx;">
								<view class="cuIcon-right" style="color: grey;"></view>
							</view>
						</view>
					</view>
				</view>
				
			
			</view>
		</view>
		
	
		<uni-popup ref="popup" :mask-click="true" type="bottom"  style="z-index: 999;"  background-color="#fff">
			<view @click="closepop()" class="cuIcon-roundclose" style="position: absolute;top: 35rpx; right: 35rpx;font-size: 40rpx;color: grey;"></view>
			<view style="min-height: 300rpx;padding: 40rpx 0;">
				<view style="display: flex;justify-content: center;color: grey;padding-bottom: 20rpx;border-bottom: 1px solid #EEEEEE;">
					<view style="color: #000000;">{{this.name}}</view>
					
				</view>
				<view style="padding: 20rpx 20rpx;">
					<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
						<view>开启投注</view>
						<view>
							<checkbox-group class="block" @change="CheckboxChange">
							<checkbox class='round red sm zaiui-checked' :class="state?'checked':''"
							 :checked="state?true:false" :value="state?'1':'0'"/>
							</checkbox-group>
						</view>
					</view>
					<view style="display: flex;justify-content: space-between;">
						<view>起投金额</view>
						<view style="display: flex;align-items: center;">
						
							<view @click="subBei()" style="background-color: #EEEEEE;height: 50rpx;text-align: center;width: 50rpx;margin-left: 20rpx;">一</view>
							<input @blur="starBlur_(bei)" v-model="start_money" @input="starBlur($event,3)" type="number" style="background: #EEEEEE;width: 150rpx;margin: 0 5rpx;height: 50rpx;text-align: center;" />
							<view @click="addBei()" class="cuIcon-add" style="color: #000000;background-color: #EEEEEE;height: 50rpx;text-align: center;width: 50rpx;line-height: 50rpx;margin-right: 20rpx;"></view>
							<text style="margin-right: 20rpx;">元</text>
						</view>
					</view>
					<view @click="setGame"  style="background-color: red;color: white;padding: 15rpx 200rpx;text-align: center;border-radius: 40rpx;margin-top: 20rpx;">设置完成</view>
					
				</view>
			</view>
			
		</uni-popup>
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	import config from "@/api/interface.js"
	export default {
		components: {
			barTitle
		},
		data() {
			return {
				games:[],
		
				check:[],
				state:1,
				id:0,
				name:"",
				start_money:10
			}
		},
		onLoad() {
			this.getData()
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			setGame(){
				var data = {}
				data["id"] = this.id
				data["state"] = this.state?1:0
				data["start_money"] = this.start_money
				var that = this
				this.$api.changeGame(data).then(res=>{
					uni.showToast({
						title:'操作成功',
						success() {
							that.closepop()
							that.getData()
						}
					})
				})
			},
			subBei(){
				if(this.start_money>2){
					this.start_money = parseInt(this.start_money) - 2
				}
			},
			addBei(){
				
					this.start_money = parseInt(this.start_money) + 2
				
			},
			starBlur(e,index){
				if(e.detail.value < 2){
				
					this.start_money = 2
					
				}
				if(e.detail.value == ""){
				
					this.start_money = 2
					
				}
				
			},
			starBlur_(e){
				if(e < 2){
				
					this.start_money = 2
					
				}
				if(e.detail.value == ""){
				
					this.start_money = 2
					
				}
			},
			CheckboxChange(){
				this.state = !this.state
			},
			closepop(){
				this.$refs.popup.close("bottom")
			},
			pullset(item){
				this.id = item.id
				this.state = item.state
				this.name = item.name
				this.start_money = item.start_money
				this.$refs.popup.open("bottom")
			},
			getsrc(id){
				if(id == 1){
					return '../../static/images/index/jczq.png'
				}
				if(id == 2){
					return '../../static/images/index/jclq.png'
				}
				if(id == 3){
					return '../../static/images/index/bjdc.png'
				}
				if(id == 4){
					return '../../static/images/index/pl3.png'
				}
				if(id == 5){
					return '../../static/images/index/renjiu.png'
				}
			},
			CheckboxChange_(id){
				if(!this.shop_games.includes(id)){
					this.shop_games.push(id)
				}else{
				
					var index = this.shop_games.indexOf(id)
					this.shop_games.splice(index,1)
				}
			},
			
		
			getData(){
				this.$api.getShopGame().then(res=>{
					this.games = res.data.games
				
				})
			},
			
			deleteImg(index){
				this.imgArr.splice(index,1)
			},
			
		
			
			savePwd(){
				var data = {
					"games":this.shop_games,
					
				}
				this.$api.changeGame(data).then(res=>{
					uni.showToast({
						title:'操作成功'
					})
				})
			
			},
			SwitchSex(e) {
				this.skin = e.detail.value
			},
			realNameTap() {
				uni.navigateTo({
					url: "/pages/real_name/index"
				});
			},
			personalTap() {
				uni.navigateTo({
					url: "/pages/my/personal-data"
				});
			}
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
</style>
