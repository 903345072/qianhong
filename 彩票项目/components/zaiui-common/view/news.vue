<template>
	<view class="zaiui-news-box" :class="show?'show':''">
		<!--标题栏-->
		<view style="position: fixed;z-index: 9999;left: 0;right: 0;top:0;background: red;height: 130rpx;display: flex;align-items: center;">
			
			<view  style="display: flex;align-items: center;justify-content: center;background-color: #b46a6b;width: 70%;margin-left: 15%;border-radius: 130rpx;">
				<view style="width: 50%;text-align: center;border-radius:100rpx;padding: 10rpx 0;" :style="curIndex==1?'background:white;color:red;':'background:#b46a6b;color:white'" @click="changeIndex(1)">足球</view>
				<view  @click="changeIndex(2)" style="width: 50%;text-align: center;border-radius:100rpx;padding: 10rpx 0" :style="curIndex==2?'background:white;color:red;':'background:#b46a6b;color:white'">篮球</view>
			</view>
			
		</view>
	
		<meTabs v-model="TabCur" :tabs="tabList" :fixed="true" :tab-width="130" style="margin-top: 130rpx;;"></meTabs>
	
	     <swiper :style="{height: height}"   :current="TabCur" @change="swiperChange" >
	     	<swiper-item v-for="(tab,i) in tabList" :key="i" style="margin-top: 180rpx;">
	     		<scroll-view scroll-y="true"  :style="{height: s_height}">
					<view style="min-height: 400rpx;">
						<view v-if="list.length==0">
							<view>暂无数据</view>
						</view>
						<view v-if="list.length>0" v-for="(item,index) in list" :key="index" >
							<view v-if="curIndex==1" @click="goDetail(item.link_id)" style="display: flex;flex-direction: column;justify-content: center;padding: 20rpx 20rpx;line-height: 50rpx;border-bottom: 20rpx solid #EEEEEE;">
								<view style="display: flex;align-items: center;">
									<view style="background-color: #EEEEEE;padding: 5rpx 8rpx;border-radius: 4rpx;">{{item.match_num}}{{item.l_name}}</view>
									<view style="margin: 0 15rpx;">
										<view :style="{'color':item.color}">{{item.en_status}} <text v-if="item.en_status=='进行中'" style="padding:0 8rpx;color: green;">{{item.minute}}分</text></view>
									</view>
									<view :style="{'color':item.color}">
										{{item.d_time}}
									</view>
								</view>
								<view style="display: flex;align-items: center;width: 100%;">
									<view style="display: flex;align-items: center;width: 33%;">
										<view style="margin-top: 10rpx;"><image style="width: 60rpx;height: 60rpx;" src="../../../static/images/avatar/home_1.png"></image></view>
										<view>{{item.h_name}}</view>
									</view>
									<view style="width: 60rpx;text-align: center;display: flex;justify-content: center;width: 33%;">
										<view style="font-size: 32rpx;" v-if="item.en_status=='未开赛'">VS</view>
										<view v-if="item.en_status=='进行中' || item.en_status=='完场'">
											<text :style="{'color':item.color,'font-size':'42rpx','font-weight':'bold'}">{{item.fs_h}}:{{item.fs_a}}</text>
										</view>
									</view>
									<view style="display: flex;align-items: center;width: 33%;text-align: center;justify-content: flex-end;">
										<view><image style="width: 60rpx;height: 60rpx;" src="../../../static/images/avatar/visiting_1.png"></image></view>
										<view>{{item.a_name}}</view>
									</view>
								</view>
								<view style="display: flex;justify-content: center;">
									
									<view v-if="item.en_status=='进行中' || item.en_status=='完场'">
										<text :style="{'color':item.color,'font-size':'32rpx'}">上半场{{item.hts_h}}:{{item.hts_a}}</text>
									</view>
								</view>
								<view style="display: flex;justify-content: space-between;align-items: center;">
									<view>
										<text>竞彩sp</text>
										<text>{{item.had_odds}}</text>
									</view>
									<view>
										<text>主({{item.p_goal}})</text>
										<text style="margin-left: 5rpx;">{{item.hhad_odds}}</text>
									</view>
								</view>
							</view>
							
							
							
							<view v-if="curIndex==2" @click="goDetail(item.link_id)" style="display: flex;flex-direction: column;justify-content: center;padding: 20rpx 20rpx;line-height: 50rpx;border-bottom: 20rpx solid #EEEEEE;">
								<view style="display: flex;align-items: center;">
									<view style="background-color: #EEEEEE;padding: 5rpx 8rpx;border-radius: 4rpx;">{{item.match_num}}{{item.l_name}}</view>
									<view style="margin: 0 15rpx;">
										<view :style="{'color':item.color}">{{item.en_status}} <text v-if="item.en_status=='进行中'" style="padding:0 8rpx;">{{item.minute}}</text></view>
									</view>
									<view :style="{'color':item.color}">
										{{item.d_time}}
									</view>
								</view>
								<view style="display: flex;align-items: center;width: 100%;">
									<view style="display: flex;align-items: center;width: 33%;">
										<view style="margin-top: 10rpx;"><image style="width: 60rpx;height: 60rpx;" src="../../../static/images/avatar/visiting_1.png"></image></view>
										<view>{{item.a_name}}</view>
									</view>
									<view style="width: 60rpx;text-align: center;display: flex;justify-content: center;width: 33%;">
										<view style="font-size: 32rpx;">VS</view>
										
									</view>
									<view style="display: flex;align-items: center;width: 33%;text-align: center;justify-content: flex-end;">
										<view><image style="width: 60rpx;height: 60rpx;" src="../../../static/images/avatar/home_1.png"></image></view>
										<view>{{item.h_name}}</view>
									</view>
								</view>
								<view style="display: flex;justify-content: center;">
									
									<view v-if="item.en_status=='进行中' || item.en_status=='完场'">
										<text :style="{'color':item.color,'font-size':'38rpx','font-weight':'bold'}">全场{{item.all_bf}}</text>
									</view>
								</view>
								<view style="display: flex;justify-content: space-between;align-items: center;">
									<view>
										<text>竞彩sp</text>
										<text>{{item.sf_odds}}</text>
									</view>
									<view>
										<text>主({{item.p_goal}})</text>
										<text style="margin-left: 5rpx;">{{item.rfsf_odds}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				
				
	     	</swiper-item>
	     </swiper>
		
		<!--占位底部距离-->
		<view style="height: 60rpx;" class="cu-tabbar-height"/>
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import meTabs from '@/components/mescroll/me-tabs/me-tabs'
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	
	import config from '@/api/interface.js'
	export default {
		name: 'news',
		components: { 
			barTitle,meTabs
		},
		data() {
			return {
				ddd :null,
				modalName: null, listTouchStart: 0, listTouchDirection: null,
				curIndex:1,
				TabCur:0,
				height: "400px",
				s_height:"400px",
				tabList: [
				{ name: '',type:"buy_lottery" }, 
				{ name: '',type:"recharge" },
				{ name: '',type:"system" },
				{ name: '',type:"win_prize" },
				{ name: '',type:"order_back_money" },
				{ name: '',type:"withdraw" },
				{ name: '',type:"withdraw" },
				{ name: '',type:"withdraw" },
				{ name: '',type:"withdraw" }
				],
				list:[]
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
	
		
		},
		onLoad() {
				
		},
		destroyed() {
			clearInterval(this.ddd);
					this.ddd= null;
		},
		mounted() {
		    this.height =uni.getSystemInfoSync().windowHeight + 'px'
			this.s_height = uni.getSystemInfoSync().windowHeight-100
			this.s_height = this.s_height+'px'
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
			this.getTabList()

			var that = this
			that.ddd =setInterval(function(){
				
				
				
				uni.request({
						url: config.config.url+"/api/user/getMatchList",				
						method: 'GET',
						data: {"date":that.tabList[that.TabCur]["name"],"type":that.curIndex},
						header:{
							'bear_token':uni.getStorageSync("bear_token")
							// HTTP 请求 Header, header 中不能设置 Referer
						},
						success: res => {
							that.list = res.data.data.data
											
				       },
						fail: () => {},
						complete: () => {}
				});
				
			},15000)		
			
			
				
		
			
		},
		methods: {
			getTabList(){
				this.$api.getTabList({'type':this.curIndex}).then(res=>{
					var d = res.data.arr
					this.tabList = []
					for(let item in d){
						this.tabList.push({"name":d[item]})
					}
					this.TabCur = res.data.index
					
					this.getList()
				})
			},
			goDetail(e){
				if(e){
					uni.navigateTo({
						url:"/pages/finace/matchdetail?id="+e+"&type="+this.curIndex+"&state=1"
					})
				}else{
					e  = '3'
					uni.navigateTo({
						url:"/pages/finace/matchdetail?id="+e+"&type="+this.curIndex+"&state=2"
					})
				}
			},
			getList(){
				this.list = []
				this.$api.getMatchList({"date":this.tabList[this.TabCur]["name"],"type":this.curIndex}).then(res=>{
					this.list = res.data.data
				})
			},
			
			swiperChange(e) {
				let { current } = e.target;
			    this.list = []
				this.TabCur = current;
						var that = this
				setTimeout(function(){
					that.getList()
				},450)		
			    },
			changeIndex(v){
			
				this.curIndex=v
				
				this.getTabList()
			},
			//页面被滚动
			setPageScroll(scrollTop) {
				//console.log(scrollTop);
			},
			//触底了
			setReachBottom() {
				console.log('触底了');
			},
			barTitleRightTap() {
				console.log('标题栏右边被点击');
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			//被点击
			tapNews(index) {
				console.log(index);
				if(index == 0) {
					uni.navigateTo({
						url: '/pages/news/notice',
					});
				} else if (index == 1) {
					uni.navigateTo({
						url: '/pages/news/chat',
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-news-box {
		width: 100%;
		display: none;
		.zaiui-follow-box {
			.action-text-cut {
				width: 70%;
			}
		}
		.zaiui-grid-menu {
			.cu-list.grid.no-border>.cu-item {
				.cu-avatar {
					margin: 0 auto;
				}
			}
		}
		.zaiui-news-list-box {
			padding: 0 9.09rpx;
			.cu-list.menu-avatar>.cu-item>.cu-avatar {
				width: 81.81rpx;
				height: 81.81rpx;
			}
			.cu-list.menu-avatar>.cu-item {
				height: 163.63rpx;
				align-items: inherit;
				.cu-avatar {
					margin-top: 25.45rpx;
					.cu-tag.badge {
					    width: 21.81rpx;
					    height: 21.81rpx;
					    top: 0;
					    right: 0;
					    border: 1.81rpx solid #fff;	
					}
				}
				.content {
				    left: 136.36rpx;
					margin-top: 18.18rpx;
				    width: calc(100% - 90.9rpx - 54.54rpx - 18.18rpx);
				    line-height: 1.7em;	
					.cu-tag {
						padding: 0 3.63rpx;
						text {
							position: relative;
							top: -2rpx;
						}
					}
				}
				&:after {
					width: 0;
					height: 0;
					border-bottom: 0;
				}
			}
			.cu-list.menu-avatar>.cu-item.goods {
				.content {
				    width: calc(100% - 309.09rpx);
				}
				.action {
					position: absolute;	
				    right: 23.63rpx;
					width: 127.27rpx;
					.cu-avatar {
						width: 127.27rpx;
						height: 127.27rpx;
						margin-top: 18.18rpx;
					}
				}
			}
		}
	}
	.zaiui-news-box.show {
		display: block;
	}
</style>