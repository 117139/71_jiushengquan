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
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1"  class="loading_def">
				<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view v-if="htmlReset==0" class="team_list">
			<view v-for="(item,index) in datas" class="team_li" @tap="jump" :data-url="'/pagesA/team_user_li/team_user_li?id='+item.id">
				<image class="team_li_img" :src="getimg('/static/images/team_icon.png')" mode="aspectFit"></image>
				<view class="flex_1 team_li_msg">
					<view class="text-cut">{{item.name}}</view>
				</view>
				<text class="team_li_next iconfont iconnext-m"></text>
			</view>
		</view>
		<view class="team_cz">
			<!-- team_created -->
			<view @tap="jump" data-url="/pagesA/team_created/team_created">创建团队</view>
			<!-- <view @tap="jump" data-url="/pagesA/team_user_add/team_user_add">创建团队</view> -->
			<view @tap="jump" data-url="/pagesA/team_join/team_join">加入团队</view>
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
	export default {
		data() {
			return {
				htmlReset:-1,
				datas:[
					{
						name:'救生圈组织团队1'
					},
					{
						name:'救生圈组织团队1'
					},
					{
						name:'救生圈组织团队1'
					},
					{
						name:'救生圈组织团队1'
					},
					
				]
			}
		},
		onLoad() {
			that=this
		},
		onShow() {
			that.htmlReset=0
		},
		methods: {
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
