<template>
	<view class="minh100">
		<cu-custom bgColor="bg-white" :isBack="true">
		    <block slot="backText">
					
				</block>
		    <block slot="content">团队</block>
				<block slot="right">
					<view class="top_r" @tap="jump" data-url="/pagesA/team_msgs/team_msgs">
						<text class="tip_box">1</text>
						<text class="iconfont icontongzhi"></text>
					</view>
				</block>
		</cu-custom>
		<htmlLoading ref="htmlLoading" @Retry='onRetry' :bj_show="true">
			<view class="team_list">
				<view v-for="(item,index) in datas" class="team_li" @tap="jump" :data-url="'/pagesA/team_user_li/team_user_li?id='+item.initiator_id">
					<image class="team_li_img" :src="getimg(item.cover)" mode="aspectFit"></image>
					<view class="flex_1 team_li_msg">
						<view class="text-cut">{{item.title}}</view>
					</view>
					<text class="team_li_next iconfont iconnext-m"></text>
				</view>
				<view v-if="datas.length==0" class="zanwu">暂无数据</view>
				<view v-if="data_last" class="data_last">我可是有底线的哟~</view>
			</view>
			<view class="team_cz">
				<!-- team_created -->
				<view @tap="jump" data-url="/pagesA/team_created/team_created">创建团队</view>
				<!-- <view @tap="jump" data-url="/pagesA/team_user_add/team_user_add">创建团队</view> -->
				<view @tap="jump" data-url="/pagesA/team_join/team_join">加入团队</view>
			</view>
			<!-- <bao-jing></bao-jing> -->
		</htmlLoading>
	</view>
</template>

<script>
	import Vue from 'vue'
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
	export default {
		data() {
			return {
				htmlReset:-1,
				datas:[],
				page: 1,
				size: 15,
				data_last:false,
				triggered: true, //设置当前下拉刷新状态
			}
		},
		onLoad() {
			that=this
			that.onRetry()
		},
		onShow() {
			that.htmlReset=0
		},
		onPullDownRefresh() {
			that.onRetry()
		},
		methods: {
			onRetry(){
				
				that.datas=[]
				that.data_last=false
				that.page=1
				
				that.getdata()
			},
			getdata() {
				
				///api/info/list
				// var that = this
				var data = {
					token:that.$store.state.loginDatas.token,
					page:that.page,
					size:that.size
				}
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/minapp/my-team'
				uni.showLoading({
					title: '正在获取数据'
				})
				// setTimeout(()=>{
				// 	uni.hideLoading()
				// },1000)
				// return
				var page_now=that.page
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
					that.htmlReset=0
					that.$refs.htmlLoading.htmlReset_fuc(0)
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
			
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						if(page_now==1){
				
							that.datas = datas
						} else {
							if (datas.length == 0) {
								that.data_last = true
								return
							}
							that.data_last = false
							that.datas = that.datas.concat(datas)
						}
						that.page++
						console.log(datas)
			
			
					} else {
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '操作失败'
							})
						}
					}
				}).catch(e => {
					that.btn_kg = 0
					that.$refs.htmlLoading.htmlReset_fuc(1)
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
			},
			
			jump(e) {
				var that = this
			
				if (that.btn_kg == 1) {
					return
				} else {
					that.btn_kg = 1
					setTimeout(function() {
						that.btn_kg = 0
					}, 1000)
				}
			
				service.jump(e)
			},
			getimg(img) {
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.top_r{
		font-size: 40upx;
		color: #333;
		position: relative;
	}
	.tip_box{
		position: absolute;
		top: -5upx;
		right: -5upx;
		width: 23upx;
		height: 23upx;
		background: #FF4F11;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14upx;
		color: #fff;
	}
	.team_list{
		width: 100%;
		padding: 0 30upx 200upx;
		
	}
	.team_li{
		width: 100%;
		height: 130upx;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.team_li_img{
		width: 88upx;
		height: 88upx;
		background: #3C77F1;
		border-radius: 50%;
		flex: none;
		margin-right: 18upx;
	}
	.team_li_next{
		margin-left: 15upx;
		font-size: 20upx;
		flex: none;
	}
	.team_li_msg{
		display: flex;
		align-items: center;
		font-size: 32upx;
		color: #000;
		font-weight: bold;
		width: 440upx;
	}
	.team_cz{
		width: 100%;
		height: 200upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		background: rgba(255,255,255,.8);
	}
	.team_cz view{
		width: 300upx;
		height: 72upx;
		background: #3C77F1;
		box-shadow: 1px 3px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 36upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		color: #fff;
	}
</style>
