<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" :isBack=false  @rightTap="rightTap">
			<block slot="content">成为店主1</block>
		</bar-title>
		
		<!--登录图标-->
		<!-- <view class="zaiui-user-login-avatar-view">
			<image :src="src" class="cu-avatar round lg"></image>
		</view> -->
		
		<view style="margin: 30rpx 0;">
			<input focus="true" placeholder="输入店铺名称" v-model="shop_name" style="background: #EEEEEE;padding: 20rpx 10rpx;height: 90rpx;margin: 20rpx 50rpx;" />
			<input  placeholder="输入手机号" v-model="account" style="background: #EEEEEE;padding: 20rpx 10rpx;height: 90rpx;margin: 0 50rpx;" />
			<input placeholder="输入密码" v-model="password" type="password" style="background: #EEEEEE;padding: 20rpx 10rpx;height: 90rpx;margin: 0 50rpx;margin-top: 20rpx;" />
			<input placeholder="再次输入密码" v-model="repassword" type="password" style="background: #EEEEEE;padding: 20rpx 10rpx;height: 90rpx;margin: 0 50rpx;margin-top: 20rpx;" />
			<input placeholder="输入邀请码" v-model="invite_code" disabled="true"  style="background: #EEEEEE;padding: 20rpx 10rpx;height: 90rpx;margin: 0 50rpx;margin-top: 20rpx;" />
			<view style="position: relative;">
				<input placeholder="输入短信验证码" v-model="code"  style="background: #EEEEEE;padding: 20rpx 10rpx;height: 90rpx;margin: 0 50rpx;margin-top: 20rpx;position: relative;" />
				<button @click="sendCode()"  :disabled="action" style="position: absolute;right: 50rpx;bottom: 5rpx;background-color: #007AFF;color: white;">
					{{getText()}}
				</button>
			</view>
			
			
		</view>
		
		<view style="margin-left: 50rpx;margin-bottom: 20rpx;">
			<view>彩种选择</view>
			<view class="margin-top-lg checked-view">
				<view>
					<checkbox-group class="block" >
					<view style="display: inline-block;">
						<view v-for="(item,index) in games"  style="">
							<checkbox @click="CheckboxChange_(item.id)" class='round red sm zaiui-checked' :class="getChecked(item.id,shop_games)?'checked':''"
							  :value="item.id.toString()"/>
							 <text>{{item.name}}</text>
						</view>
					</view>
					
					</checkbox-group>
				</view>
			</view>
		</view>
		
		<view style="margin-left: 50rpx;line-height: 140rpx;">
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 0 25rpx;">
				<text>店铺门头照片</text>
				<view  v-if="shop_pic1" style="position: relative;">
								  <image style="width: 150rpx;height: 150rpx;" :src="shop_pic1">
									  
									  
								  </image>
								  <text @click="deleteImg(1)" style="position: absolute;right: 20rpx;top: -40rpx;color: #000000;font-weight: bold;" >X</text>
				</view>
				
				<view v-if="!shop_pic1"  @click="choosePhoto(1)" style="background-color: #EEEEEE;display: flex;justify-content: center;align-items: center;width: 130rpx;height: 130rpx;font-size: 50rpx;padding: 0 20rpx;">
					+
				</view>
			</view>
			
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 0 25rpx;">
				<text  >店内照片</text>
				<view  v-if="shop_pic2" style="position: relative;">
								  <image style="width: 150rpx;height: 150rpx;" :src="shop_pic2">
									  
									  
								  </image>
								  <text @click="deleteImg(2)" style="position: absolute;right: 20rpx;top: -40rpx;color: #000000;font-weight: bold;" >X</text>
				</view>
				<view v-if="!shop_pic2"  @click="choosePhoto(2)" style="background-color: #EEEEEE;display: flex;justify-content: center;align-items: center;width: 130rpx;height: 130rpx;font-size: 50rpx;padding: 0 20rpx;">
					+
				</view>
			</view>
			
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 0 25rpx;">
				<text >代销证</text>
				<view  v-if="shop_seller_pic" style="position: relative;">
								  <image style="width: 150rpx;height: 150rpx;" :src="shop_seller_pic">
									  
									  
								  </image>
								  <text @click="deleteImg(3)" style="position: absolute;right: 20rpx;top: -40rpx;color: #000000;font-weight: bold;" >X</text>
				</view>
				<view v-if="!shop_seller_pic"  @click="choosePhoto(3)" style="background-color: #EEEEEE;display: flex;justify-content: center;align-items: center;width: 130rpx;height: 130rpx;font-size: 50rpx;padding: 0 20rpx;">
					+
				</view>
			</view>
			
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 0 25rpx;">
				<text >身份证正面</text>
				<view  v-if="card_pic_front" style="position: relative;">
								  <image style="width: 150rpx;height: 150rpx;" :src="card_pic_front">
									  
									  
								  </image>
								  <text @click="deleteImg(4)" style="position: absolute;right: 20rpx;top: -40rpx;color: #000000;font-weight: bold;" >X</text>
				</view>
				<view v-if="!card_pic_front"  @click="choosePhoto(4)" style="background-color: #EEEEEE;display: flex;justify-content: center;align-items: center;width: 130rpx;height: 130rpx;font-size: 50rpx;padding: 0 20rpx;">
					+
				</view>
			</view>
			
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 0 25rpx;">
				<text >店铺logo</text>
				<view  v-if="logo" style="position: relative;">
								  <image style="width: 150rpx;height: 150rpx;" :src="logo">
									  
									  
								  </image>
								  <text @click="deleteImg(5)" style="position: absolute;right: 20rpx;top: -40rpx;color: #000000;font-weight: bold;" >X</text>
				</view>
				<view v-if="!logo"  @click="choosePhoto(5)" style="background-color: #EEEEEE;display: flex;justify-content: center;align-items: center;width: 130rpx;height: 130rpx;font-size: 50rpx;padding: 0 20rpx;">
					+
				</view>
			</view>
		</view>
		<!--按钮-->
		<view class="flex flex-direction zaiui-btn-view" @click="register()" style="margin-bottom: 80rpx;">
			<button class="cu-btn bg-red" :disabled="dis">
				<text>注册</text>
			</button>
		</view>
		<view style="height: 100rpx;"></view>
	
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	import config from '@/api/interface.js'
	import * as comp from '@/static/comp.js'
	export default {
		components: {
			barTitle
		},
		data() {
			return {
				dis:false,
				src:"",
				account:"",
				password:"",
				repassword:"",
				invite_code:"",
				shop_uname:"",
				shop_name:"",
				shop_id_card:"",
				code:"",
				action:false,
				count_down: 60,
				downUrl:"",
				shop_pic1:"",
				shop_pic2:"",
				card_pic_front:"",
				shop_seller_pic:"",
				shop_qq:"",
				shop_address:"",
				shop_wechat:"",
				logo:"",
				games:[],
				shop_games:[]
			
			}
		},
		onLoad(option) {
			this.invite_code = option.code
			
			var that = this
			uni.request({				
					url: config.config.url+"common/index/shopInfo",				
					method: 'GET',
					data: {},
					success: res => {
						that.src = res.data.data.logo
						that.downUrl = res.data.data.downUrl,
						that.games = res.data.data.games
			       },
					fail: () => {},
					complete: () => {}
			});
			
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			CheckboxChange_(id){
				if(!this.shop_games.includes(id)){
					this.shop_games.push(id)
				}else{
				
					var index = this.shop_games.indexOf(id)
					this.shop_games.splice(index,1)
				}
			},
			getChecked(id,shop_rules){
				if(shop_rules.includes(id)){
					return true
				}
				return false
			},
			

			
			register() {
			
				uni.showLoading({
					title:'上传中'
				})
				var that = this
				that.dis = true
				
				let imgArrs = []
				
				imgArrs.push({"name":"shop_pic1","uri":that.shop_pic1})
			    imgArrs.push({"name":"shop_pic2","uri":that.shop_pic2})
			    imgArrs.push({"name":"card_pic_front","uri":that.card_pic_front})
			    imgArrs.push({"name":"shop_seller_pic","uri":that.shop_seller_pic})
				imgArrs.push({"name":"logo","uri":that.logo})
			    
				uni.uploadFile({
					url: config.config.url+"common/index/shopRegister", //开发者服务器 url
					header:{
						'token':uni.getStorageSync("token")
						
						// HTTP 请求 Header, header 中不能设置 Referer
					},
					files: imgArrs, // 要上传文件资源的路径
				
					formData:{
						"shop_name":that.shop_name,
						"shop_uname":that.shop_uname,
						"shop_id_card":that.shop_id_card,
						"account":that.account,
						"password":that.password,
						"invite_code":that.invite_code,
						"code":that.code,
						"shop_games":that.shop_games,
						"shop_address":that.shop_address,
						"shop_qq":that.shop_qq,
						"shop_wechat":that.shop_wechat
						// HTTP 请求中其他额外的 form data （即接口需要的其它参数）
					},
					success(res) {
						var data =JSON.parse(res.data)
						if(data.code == 501){
							uni.showToast({
								title:data.msg
							})
							that.dis = false
							uni.hideLoading()
							return
						}
						uni.showToast({
							title:"操作成功"
						})
						
						uni.hideLoading()
						
					window.location.href = data.data
					
					},
					fail(err) {
						uni.showToast({
						title:err.errMsg
						})
							that.dis = false
						uni.hideLoading()
					},
					complete() {
						that.dis = false
						uni.hideLoading()
					},
				})
			
			},
			deleteImg(id){
				if(id == 1){
					this.shop_pic1 = ""
				}
				if(id == 2){
					this.shop_pic2 = ""
				}
				if(id == 3){
					this.shop_seller_pic = ""
				}
				if(id == 4){
					this.card_pic_front = ""
				}
				if(id == 5){
					this.logo = ""
				}
			},
			choosePhoto(id) {
				var that = this
				uni.chooseImage({
					count: 1, //最多可以选择的图片张数，默认9
					sourceType: ['album','camera'], //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
					sizeType: ['compressed'],//original 原图，compressed 压缩图，默认二者都有
					success(res) {
						if(res.tempFilePaths.length>0){
							for(let ii in res.tempFilePaths){
								if(id == 1){
								
								comp.translate(res.tempFilePaths[ii],(url)=>{
									that.shop_pic1 = url
								})
								}
								if(id == 2){
								
									comp.translate(res.tempFilePaths[ii],(url)=>{
										that.shop_pic2 = res.tempFilePaths[ii]
									})
								}
								if(id == 3){
									comp.translate(res.tempFilePaths[ii],(url)=>{
										that.shop_seller_pic = url
									})
								}
								if(id == 4){
									comp.translate(res.tempFilePaths[ii],(url)=>{
										that.card_pic_front = url
									})
								}
								if(id == 5){
									comp.translate(res.tempFilePaths[ii],(url)=>{
										that.logo = url
									})
								
								}
								
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
			getText(){
				if(this.action == false){
					return '发送'
				}else{
					return "重新获取"+this.count_down
				}
			},
			sendCode(){
				if(!this.account){
					uni.showToast({
						title:"请填写手机",
						icon:"error"
					})
					return false
				}
			
				var that = this
				uni.request({				
						url: config.config.url+"common/index/sendCode",				
						method: 'GET',
						data: {"phone":this.account,"type":"shopRegister"},
						success: res => {
							that.action = true
							that.countDown()
											
				       },
						fail: () => {},
						complete: () => {}
				});
				
			
			},
			    // 倒计时
			countDown () {
			      var that = this
			      this.timer = setInterval(() => {
			        that.count_down = that.count_down - 1
					
			        if (that.count_down < 10) that.count_down = '0' + that.count_down
			        if (that.count_down <= 0) {
			          clearInterval(that.timer)
			          that.count_down = 60
					  that.action = false
			        }
			      },1000)
			},
			login(){
				var that = this
				uni.request({
						url: config.config.url+"/common/index/register",				
						method: 'POST',
						data: {
							"account":that.account,
							"password":that.password,
							"invite_code":that.invite_code,
							"repassword":that.repassword,
							"code":that.code,
							"real_name":that.real_name,
							"shop_qq":that.shop_qq,
							"shop_address":that.shop_address,
							"shop_wechat":that.shop_wechat
							
						},
						success: res => {
							if(res.data.code != 200){
								uni.showToast({
									title:res.data.msg,
									icon:"error"
								})
								return
							}else{
								
								window.location.href = res.data.data
							}
											
				       },
						fail: () => {},
						complete: () => {}
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
	
	.zaiui-user-login-avatar-view {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 128.18rpx;
		.cu-avatar {
		    width: 181.81rpx;
		    height: 181.81rpx;	
		}
	}
	.zaiui-btn-view {
		position: relative;
		margin-top: 72.72rpx;
		padding: 0 45.45rpx;
		.cu-btn .icon {
			position: relative;
			font-size: 47.27rpx;
			right: 9.09rpx;
			top: -3.63rpx;	
		}
	}
	.zaiui-agreement-checked-view {
		position: relative;
		padding: 27.27rpx 45.45rpx;
		.zaiui-checked {
			position: absolute;
			transform: scale(0.7);
		}
		.text-black-view {
			padding-left: 54.54rpx;
			line-height: 47.27rpx;
		}
	}
	.zaiui-foot-ad-view {
		position: fixed;
		text-align: center;
	    bottom: 72.72rpx;
	    width: 100%;	
	}
</style>
