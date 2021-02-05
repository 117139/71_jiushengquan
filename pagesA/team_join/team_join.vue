<template>
	<view class="minh100">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">加入团队</block>
			<block slot="right">
				<view class="top_r">
					<text class="tip_box">1</text>
					<text class="iconfont icontongzhi"></text>
				</view>
			</block>
		</cu-custom>
		<view class="ss_box">
			<view class="sr_k">
				<text class="iconfont iconsousuo sr_icon"></text>
				<input type="text" placeholder="请输入搜索内容" class="flex_1 sr_int" v-model="ss_key" @input="sousuo_ing" confirm-type='搜索'
				 @confirm="onRetry" />
			</view>
			<view class="sr_btn" @tap="onRetry">搜索</view>
		</view>
		<view class="team_list">
			<view class="list_tit">搜索结果</view>
			<block v-if="ss_key">
				<view v-for="(item,index) in datas" class="team_li">
					<image class="team_li_img" :src="getimg('/static/images/team_icon.png')" mode="aspectFit"></image>
					<view class=" team_li_msg">
						<view class="text-cut">{{item.name}}{{ss_key}}</view>
					</view>
					<view class="join_btn" @tap="join_fuc(item)">申请加入</view>
				</view>
			</block>
			<view v-else class="zanwu">暂无数据</view>
		</view>
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
	var inputt
	export default {
		data() {
			return {
				ss_key: '',
				datas: [{
						name: '救生圈组织团队1'
					},
					{
						name: '救生圈组织团队1'
					},
					{
						name: '救生圈组织团队1'
					},
					{
						name: '救生圈组织团队1'
					},

				]
			}
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
			join_fuc(item) {
				uni.showToast({
					icon: 'none',
					title: '申请已提交'
				})
			},
			getimg(img) {
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.top_r {
		font-size: 40upx;
		color: #333;
		position: relative;
	}

	.tip_box {
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

	.team_list {
		width: 100%;
		padding: 0 30upx 200upx;

	}

	.team_li {
		width: 100%;
		height: 130upx;
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
		width: 143upx;
		height: 57upx;
		background: #3775F6;
		border-radius: 4upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #fff;
		flex: none;
	}

	.team_li_msg {
		display: flex;
		align-items: center;
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
</style>
