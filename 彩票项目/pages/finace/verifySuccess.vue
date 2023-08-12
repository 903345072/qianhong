<template>
	<view style="text-align: center;margin-top: 100rpx;">
		<text style="font-size: 40rpx;">授权成功</text>
	</view>
</template>

<script>
	import config from '@/api/interface.js'
	export default {
		data() {
			return {
				"auth_code":"",
				"state":"",
				"app_id":""
			}
		},
		async onLoad(option) {
			this.auth_code = option.auth_code
			this.state = option.state
			this.app_id = option.app_id
			var data = {"auth_code":this.auth_code,"app_id":this.app_id,"state":this.state}
			await this.doAuth(data)
			
		},
		methods:{
			async doAuth(data){
				await this.goBack(data) 
			},
			 goBack(datas){
				return new Promise((resolve,reject)=>{
					uni.request({
							url: config.config.url+"/common/index/setUserId",				
							method: 'POST',
							data: datas,
							success: res => {	
								resolve("success")
							},
							fail: (err) => {
								reject("error")
							},
							complete: () => {}
					});
				})
			}
		}
	}
</script>

<style>
</style>