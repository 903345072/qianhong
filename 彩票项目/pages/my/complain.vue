<template>
	<view>
		<bar-title bgColor="bg-white" :isBack="true" >
			<block slot="content">店铺投诉</block>
			<block  slot="right">
				<text @click="goList" style="color: red;">反馈记录</text>
			</block>
		</bar-title>
		<view style="margin: 30rpx 30rpx;">
			<view style="font-weight: bold;font-size: 35rpx;margin: 20rpx 0;">提交您的问题</view>
			<view style="background-color: white;padding: 15rpx 10rpx;">
				<view style="display: flex;align-items: center;border-bottom: 1px solid #EEEEEE;padding-bottom: 10rpx;">
					<view>
						<text style="color: red;">*</text>
						<text>联系方式</text>
					</view>
					<view style="margin-left: 40rpx;">
						<input v-model="account" />
					</view>
				</view>
				
				<view style="display: flex;align-items: flex-start;padding: 20rpx 0;">
					<view style="display: flex;align-items: center;">
						<text style="color: red;">*</text>
						<text style="white-space: nowrap;">问题描述</text>
					</view>
					<view style="margin-left: 40rpx;">
						<textarea placeholder-style="color:#eee" placeholder="问题内容最少5个字" maxlength="200" v-model="desc"></textarea>
					</view>
				</view>
			</view>
			
			<view style="background-color: white;padding: 15rpx 10rpx;margin-top: 15rpx;">
				<view style="display: flex;align-items: center;border-bottom: 1px solid #EEEEEE;padding-bottom: 10rpx;">
					<view>
				
						<text>相关图片({{imgArr.length}}/6)</text>
					</view>
				
				</view>
				
				<view style="padding: 20rpx 0;">
					<view style="display: inline-block;padding: 10rpx 20rpx;"  v-for="(item,index) in imgArr" class="ddd">
					  <view style="position: relative;">
						  <image style="width: 150rpx;height: 150rpx;" :src="item"></image>
						  <view @click="deleteImg(index)" style="position: absolute;right: 10rpx;top: 10rpx;z-index: 9999;background-color: black;color: white;padding: 5rpx 5rpx;" class="cuIcon-close" ></view>
					  </view>
					</view>
					<view v-if="imgArr.length<6" @click="choosePhoto()" style="background-color: #EEEEEE;display: flex;justify-content: center;align-items: center;width: 130rpx;height: 130rpx;font-size: 50rpx;padding: 0 20rpx;">
						+
					</view>
				</view>
			</view>
			
			<view @click="uploadPhoto()" style="background-color: blue;color: white;width: 90%;display: flex;justify-content: center;align-items: center;border-radius: 20rpx;margin-left: 5%;margin-top: 20rpx;padding: 24rpx 0;">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import config from '@/api/interface.js'
	export default{
		name:"forget",
		components:{
			barTitle
		},
		data(){
			return {
		
				account:"",
				password:"",
				code:"",
				action:false,
				count_down: 60,
				account:'',
				desc:"",
				imgArr:[]
			
			}
		},
		methods:{
			goList(){
		
				uni.navigateTo({
					url:'/pages/my/complainList'
				})
			},
			deleteImg(index){
				this.imgArr.splice(index,1)
			},
			choosePhoto(id) {
				var that = this
				uni.chooseImage({
					count: 6, //最多可以选择的图片张数，默认9
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
			
			uploadPhoto() { 
				if(!this.desc || !this.account){
					uni.showToast({
						title:'请输入完整信息'
					})
					return
				}
				var that = this
				let imgArrs = that.imgArr.map((value, index) => {
					return {
						name: 'files'+(index),
						uri : value,
					};
				});
			
				uni.uploadFile({
					url: config.config.url+"/api/user/complain", //开发者服务器 url
					header:{
						'bear_token':uni.getStorageSync("bear_token"),
						
						// HTTP 请求 Header, header 中不能设置 Referer
					},
					files: imgArrs, // 要上传文件资源的路径
				
					formData:{
						"desc":that.desc,
						"account":that.account
						// HTTP 请求中其他额外的 form data （即接口需要的其它参数）
					},
					success(res) {
						uni.showToast({
							title:"操作成功",
							
						})
				      setTimeout(()=>{
						  uni.navigateBack()
					  },300)
					
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
			getpwd(){
				uni.request({
						url: config.config.url+"/common/index/getPwd",				
						method: 'POST',
						data: {"phone":this.account,'password':this.password,'code':this.code},
						success: res => {
								if(res.data.code != 200){
										uni.showToast({
												title:res.data.msg,
												icon:"error"
											})
											return
								}else{
									uni.showToast({
											title:'设置成功',
											
										
										})
										setTimeout(()=>{
											uni.navigateBack()
										},1000)
										
										
								}
																	
						},
						fail: () => {},
						complete: () => {}
				});
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
						url: config.config.url+"/common/index/sendCode",				
						method: 'GET',
						data: {"phone":this.account,'type':'forget'},
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
		}
	}
</script>

<style>
</style>
