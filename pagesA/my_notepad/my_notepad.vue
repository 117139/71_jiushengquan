<template>
	<view class="minh100">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1" class="loading_def">
			<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<block v-if="htmlReset==0">
			<view class="note_li">
				<view class="flex_1">
					<view class="text-cut note_name">笔记1</view>
					<view class="text-cut note_time">2020-09-01 06:04</view>
				</view>
				<text class="iconfont iconnext-m"></text>
			</view>
			
			<view class="add_user">
				<view class="add_user_btn" @tap="user_add" :data-url="'/pagesA/team_user_add/team_user_add?id='+id">添加笔记</view>
			</view>

			<bao-jing></bao-jing>
			<view class="tk_popop">
				
			</view>
		</block>
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

			}
		},
		onLoad() {
			that = this
		},
		onShow() {
			that.htmlReset = 0
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				CustomBar = CustomBar + StatusBar
				var style = `top:${CustomBar}px;`;

				return style
			}
		},
		methods: {
			onRetry(){
				
			}
		}
	}
</script>

<style scoped>
	.minh100{
		padding: 30upx;
		/* #ifdef H5 */
		
		min-height: calc(100vh - 100upx);
		/* #endif */
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
	.note_li{
		width: 100%;
		min-height: 129upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		margin-bottom: 20upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10upx 30upx;
	}
	.note_name{
		font-size: 34upx;
		color: #333;
		margin-bottom: 10upx;
		font-weight: bold;
	}
	.note_time{
		font-size: 28upx;
		color: #999;
	}
	.tk_popop{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999999999;
		background: rgba(0,0,0,.8);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
