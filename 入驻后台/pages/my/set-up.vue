<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">设置</block>
		</bar-title>
		
		<!--设置列表-->
		<view style="padding: 20rpx 20rpx;">系统设置</view>
		<view class="cu-list menu margin-top">
			
			<view class="cu-item">
				<view class="content">店名</view>
				<view class="action">
					<input v-model="shop_name" type="text" placeholder="请输入店名(不填不保存)" />
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">地铺地址</view>
				<view class="action">
					<input v-model="shop_address" type="text" placeholder="请输入地铺地址(不填不保存)" />
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">身份证号</view>
				<view class="action">
					<input v-model="shop_id_card" type="text" placeholder="请输入身份证号(不填不保存)" />
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">真实姓名</view>
				<view class="action">
					<input v-model="shop_uname" type="text" placeholder="请输入真实姓名(不填不保存)" />
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">微信</view>
				<view class="action">
					<input v-model="shop_wechat" type="text" placeholder="请输入微信(不填不保存)" />
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">qq</view>
				<view class="action">
					<input v-model="shop_qq" type="text" placeholder="请输入qq(不填不保存)" />
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">密码</view>
				<view class="action">
					<input v-model="pwd" type="text" placeholder="请输入密码(不填不保存)" />
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="content">公告显示</view>
				<view class="action">
					<input v-model="gonggao"  placeholder="请输入公告(不填不保存)" />
				</view>
			</view>
		</view>
		
		<view style="padding: 20rpx 20rpx;">添加用户</view>
		
		
		<view class="cu-list menu margin-top">
			<view class="cu-item">
				<view class="content">账号</view>
				<view class="action">
					<input v-model="u_account" type="text" placeholder="请输入手机号(不填不保存)" />
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">昵称</view>
				<view class="action">
					<input v-model="u_name"  placeholder="请输入昵称(不填不保存)"/>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">密码</view>
				<view class="action">
					<input v-model="u_pwd"  placeholder="请输入密码(不填不保存)"/>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">上级用户</view>
				<view class="action">
					<input v-model="puser"  placeholder="请输入上级用户"/>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">是否是销售</view>
				<view>
					<checkbox-group class="block" @change="CheckboxChange">
					<checkbox class='round red sm zaiui-checked' :class="is_seller?'checked':''"
					 :checked="is_seller?true:false" :value="is_seller?'1':'0'"/>
					</checkbox-group>
				</view>
			</view>
			
		</view>
		
		
		<view style="padding: 20rpx 20rpx;">店铺头像</view>
		<view style="padding: 20rpx 0;">
			<view style="display: inline-block;padding: 10rpx 20rpx;"  v-for="(item,index) in imgArr" class="ddd">
			  <view style="position: relative;">
				  <image style="width: 150rpx;height: 150rpx;" :src="item"></image>
				  <view @click="deleteImg(index)"  style="position: absolute;right: 10rpx;top: 10rpx;z-index: 9999;background-color: black;color: white;padding: 5rpx 5rpx;" class="cuIcon-close" ></view>
			  </view>
			</view>
			<view v-if="imgArr.length<1" @click="choosePhoto()" style="background-color: #EEEEEE;display: flex;justify-content: center;align-items: center;width: 130rpx;height: 130rpx;font-size: 50rpx;padding: 0 20rpx;">
				+
			</view>
		</view>
	
		<view style="height: 200rpx;"></view>
		<!--按钮-->
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom" @click="savePwd()">
			<view class="flex padding-sm flex-direction">
				<button class="cu-btn bg-red">保存</button>
			</view>
		</view>
		
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
				skin: true,
				pwd:"",
				gonggao:"",
				u_account:"",
				u_name:"",
				u_pwd:"",
				imgArr:[],
				shop_name:"",
				shop_uname:"",
				shop_qq:"",
				shop_wechat:"",
				shop_id_card:"",
				shop_address:"",
				puser:"",
				is_seller:false
			}
		},
		onLoad() {
			var that = this
			this.$api.getShopInfo({}).then(res=>{
				that.shop_address = res.data.shop.shop_address
				that.shop_name = res.data.shop.shop_name
				that.shop_uname = res.data.shop.shop_uname
				that.shop_qq = res.data.shop.shop_qq
				that.shop_wechat = res.data.shop.shop_wechat
				that.shop_id_card = res.data.shop.shop_id_card
				that.shop_address = res.data.shop.shop_address
			})
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			CheckboxChange(){
				this.is_seller = !this.is_seller
			},
			deleteImg(index){
				this.imgArr.splice(index,1)
			},
			choosePhoto(id) {
				var that = this
				uni.chooseImage({
					count: 1, //最多可以选择的图片张数，默认9
					sourceType: ['album','camera'], //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
					sizeType: ['original'],//original 原图，compressed 压缩图，默认二者都有
					success(res) {
						if(res.tempFilePaths.length>0){
							for(let ii in res.tempFilePaths){
								that.imgArr.push(res.tempFilePaths[ii])
							}
						}
					
						
						//that.uploadPhoto(res.tempFilePaths,id);
					},
					fail() {
						console.log('失败', err);
					},
					complete() {
						console.log('结束');
					},
				})
			},
			savePwd(){
			
				
				var that = this
				let imgArrs = that.imgArr.map((value, index) => {
					return {
						name: 'files'+(index),
						uri : value,
					};
				});
				uni.uploadFile({
					url: config.config.baseUrl+"systemAdmin/savePwd", //开发者服务器 url
					header:{
						'token':uni.getStorageSync("token")
					},
					files: imgArrs, // 要上传文件资源的路径
				
					formData:{
						"password":that.pwd,
						"gonggao":that.gonggao,
						"u_pwd":that.u_pwd,
						"u_name":that.u_name,
						"u_account":that.u_account,
						"shop_name":that.shop_name,
						"shop_uname":that.shop_uname,
						"shop_qq":that.shop_qq,
						"shop_wechat":that.shop_wechat,
						"shop_address":that.shop_address,
						"shop_id_card":that.shop_id_card,
						"puser":that.puser,
						"is_seller":that.is_seller?1:0
						// HTTP 请求中其他额外的 form data （即接口需要的其它参数）
					},
					success(res) {
						var data =res.data
						var dd = JSON.parse(data)
						if(dd.code != 200){
							uni.showToast({
								title:dd.msg
							})
							return
						}
						uni.showToast({
							title:"操作成功",
							success() {
								uni.navigateBack()
							}
						})
					
					
					},
					fail(err) {
						uni.showToast({
						title:err.errMsg
						})
					},
					complete() {
						console.log('结束');
					},
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
