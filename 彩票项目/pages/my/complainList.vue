<template>
  <view class="">
	  <bar-title bgColor="bg-white" :isBack="true" >
	  	<block slot="content">反馈记录</block>
	 
	  </bar-title>
    <view class="feedback-item" v-for="(feedback, index) in feedbackList" :key="index" >
      <text class="feedback-title">{{ feedback.content }}</text>
      <text class="feedback-content">{{ feedback.reply_content?feedback.reply_content:'平台暂未回复' }}</text>
    </view>
  </view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
export default {
	name:"forget",
	components:{
		barTitle
	},
	onLoad() {
		this.$api.getComplainList().then(res=>{
			this.feedbackList = res.data
		})
	},
  data() {
    return {
      feedbackList: [ // 用户反馈列表
        {
          id: 1,
          title: '这是问题反馈的内容1这是问题反馈的内容1这是问题反馈的内容1这是问题反馈的内容1这是问题反馈的内容1这是问题反馈的内容1这是问题反馈的内容1这是问题反馈的内容1',
          content: '这是问题反馈的内容1这是问题反馈的内容1这是问题反馈的内容1这是问题反馈的内容1'
        },
        {
          id: 2,
          title: '问题反馈2',
          content: '这是问题反馈的内容2'
        },
        {
          id: 3,
          title: '问题反馈3',
          content: '这是问题反馈的内容3'
        }
      ]
    }
  },
  methods: {
    goToReplyPage(feedback) {
      // 跳转到用户反馈记录回复页面，并将反馈信息传递给下一个页面
      uni.navigateTo({
        url: '/pages/FeedbackReply?feedback=' + JSON.stringify(feedback)
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20rpx;
}

.feedback-item {
  padding: 20rpx;
  margin-bottom: 20rpx;
  background-color: #f5f5f5;
  border-radius: 5rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.feedback-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
  color: #333;
}

.feedback-content {
  font-size: 24rpx;
  color: #666;
}
</style>