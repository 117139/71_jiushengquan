<template>
	<view class="minh100">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1" class="loading_def">
			<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<block v-if="htmlReset==0">
			<view class="team_list">

				<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
				<view v-if="htmlReset==-1" class="loading_def">
					<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
				</view>
				<block v-if="htmlReset==0">
					<view v-for="(item,index) in datas" class="team_li">
						<image class="team_li_img" :src="getimg('/static/images/tx_m2.jpg')" mode="aspectFit"></image>
						<view class=" team_li_msg dis_flex_c flex_1">
							<view class="text-cut">{{item.name}}{{ss_key}}</view>
							<view class="text-cut" style="font-size: 24upx;color: #999;">申请加入救生圈团队1</view>
						</view>
						<view>
							<view class="join_btn join_btn1" @tap="join_fuc(item,1)">拒绝</view>
							<view class="join_btn" @tap="join_fuc(item,2)">同意</view>
						</view>
					</view>
					<view class="team_li">
						<image class="team_li_img" :src="getimg('/static/images/tx_m2.jpg')" mode="aspectFit"></image>
						<view class=" team_li_msg dis_flex_c flex_1">
							<view class="text-cut">野外求生专家</view>
							<view class="text-cut" style="font-size: 24upx;color: #999;">野外求生专家成功加入团队野外求生专家成功加入团队野外求生专家成功加入团队野外求生专家成功加入团队</view>
						</view>
					</view>
					<view class="team_li">
						<image class="team_li_img" :src="getimg('/static/images/tx_m2.jpg')" mode="aspectFit"></image>
						<view class=" team_li_msg dis_flex_c flex_1">
							<view class="text-cut">野外求生专家</view>
							<view class="text-cut" style="font-size: 24upx;color: #999;">野外求生专家成功加入团队野外求生专家成功加入团队野外求生专家成功加入团队野外求生专家成功加入团队</view>
						</view>
					</view>
					<view class="team_li">
						<image class="team_li_img" :src="getimg('/static/images/tx_m2.jpg')" mode="aspectFit"></image>
						<view class=" team_li_msg dis_flex_c flex_1">
							<view class="text-cut">野外求生专家</view>
							<view class="text-cut" style="font-size: 24upx;color: #999;">野外求生专家成功加入团队野外求生专家成功加入团队野外求生专家成功加入团队野外求生专家成功加入团队</view>
						</view>
					</view>
				</block>
				<view v-else class="zanwu">暂无数据</view>
			</view>
		</block>
		<!-- <view class="add_user">
			<view class="add_user_btn" @tap="jump" :data-url="'/pagesA/team_user_add/team_user_add?id='+id">邀请新成员</view>
		</view> -->

		<bao-jing></bao-jing>
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
				id:'',
				htmlReset: -1,
				ss_key: '',
				datas: [{
						name: '野外求生专家1'
					},
					{
						name: '野外求生专家1'
					},
					{
						name: '野外求生专家1'
					},
					{
						name: '野外求生专家1'
					},
					{
						name: '野外求生专家1'
					},
					{
						name: '野外求生专家1'
					},

				]
			}
		},
		onLoad() {
			that = this
		},
		onShow() {
			that.htmlReset = 0
		},
		methods: {
			sousuo_ing() {
				clearInterval(inputt)
				inputt = setTimeout(function() {
					var kw = that.daiyan_ss
					console.log(kw.length)
					if (kw.length > 0) {

						that.onRetry()

					} else {
						that.onRetry()
						// that.qy_show = that.qy_arr3
					}
				}, 1000)
			},
			onRetry() {

			},
			join_fuc(item,num) {
				var text_s=''
				if(num==1){
					text_s='拒绝'
				}else{
					text_s='同意'
				}
				uni.showToast({
					icon: 'none',
					title: text_s+'操作'
				})
			},
			getimg(img) {
				return service.getimg(img)
			},
			jump(e) {

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
		}
	}
</script>

<style scoped>
	.minh100{
		background: #F1F1F1;
	}
	.team_list {
		width: 100%;
		padding: 0 30upx 0;
		background: #fff;

	}

	.team_li {
		width: 100%;
		height: 150upx;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.team_li_img {
		width: 88upx;
		height: 88upx;
		background: #3C77F1;
		border-radius: 50%;
		flex: none;
		margin-right: 18upx;
	}

	.join_btn {
		margin-left: 15upx;
		width: 93upx;
		height: 42upx;
		background: #3775F6;
		border-radius: 4upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24upx;
		color: #fff;
		flex: none;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	.join_btn1 {
		background: #CBCBCB;
		color: #242424;
	}

	.team_li_msg {
		/* display: flex;
		align-items: center; */
		font-size: 32upx;
		color: #000;
		font-weight: bold;
		width: 440upx;
	}

	.list_tit {
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		font-size: 30upx;
		color: #333;
	}

	.ss_box {
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		padding: 0 30upx;
	}

	.sr_k {
		width: 543upx;
		height: 64upx;
		background: #E9ECF2;
		border-radius: 4upx;
		padding: 0 20upx;
		font-size: 30upx;
		display: flex;
		align-items: center;
	}

	.sr_icon {
		font-size: 32upx;
		color: #999;
		margin-right: 20upx;
	}

	.sr_int {
		min-width: 0;
		font-size: 30upx;
	}

	.sr_btn {
		width: 129upx;
		height: 64upx;
		background: #3775F6;
		border-radius: 4upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #fff;
	}

	.team_tit {
		font-size: 24upx;
		color: #999;
		height: 45upx;
		width: 100%;
		padding-left: 40upx;
		background: rgba(231, 231, 231, .83);
		display: flex;
		align-items: center;
	}

	.add_user {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, .8);
		height: 200upx;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 800;
	}

	.add_user_btn {
		width: 624upx;
		height: 86upx;
		background: #609AEC;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #fff;
	}
</style>
