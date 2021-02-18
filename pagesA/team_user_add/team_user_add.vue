<template>
	<view class="minh100">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">邀请新成员</block>
			<block slot="right">
				<!-- <view class="top_r">
					<text class="tip_box">1</text>
					<text class="iconfont icontongzhi"></text>
				</view> -->
			</block>
		</cu-custom>
		<view class="ss_box" :style="style">
			<view class="sr_k">
				<text class="iconfont iconsousuo sr_icon"></text>
				<input type="text" placeholder="请输入搜索内容" class="flex_1 sr_int" v-model="ss_key" @input="sousuo_ing" confirm-type='搜索'
				 @confirm="onRetry" />
			</view>
			<view class="sr_btn" @tap="onRetry">搜索</view>
		</view>
		<view class="ss_box" style="position: relative;opacity: 0;z-index: 1;"></view>
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1" class="loading_def">
			<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view class="team_tit">成员</view>
		<view v-if="htmlReset==0" class="team_list">
			<!-- <block v-if="ss_key"> -->
			<block>
				<view v-for="(item,index) in datas" class="team_li" @tap="set_user(item,$event)">
					<view v-if="xuan_type(item)" class="user_btn cur"></view>
					<view v-else class="user_btn"></view>
					<image class="team_li_img" :src="getimg('/static/images/tx_m2.jpg')" mode="aspectFit"></image>
					<view class=" team_li_msg">
						<view class="text-cut">{{item.name}}{{ss_key}}</view>
					</view>
				</view>
			</block>
			<!-- <view v-else class="zanwu">暂无数据</view> -->
		</view>

		<view class="add_user">
			<view class="add_user_btn" @tap="user_add" :data-url="'/pagesA/team_user_add/team_user_add?id='+id">邀请新成员</view>
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
				id: '',
				ids: [],
				htmlReset: -1,
				ss_key: '',
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				datas: [{
						id: 1,
						name: '救生圈组织团队1'
					},
					{
						id: 2,
						name: '救生圈组织团队2'
					},
					{
						id: 3,
						name: '救生圈组织团队3'
					},
					{
						id: 4,
						name: '救生圈组织团队4'
					},
					{
						id: 5,
						name: '救生圈组织团队5'
					},
					{
						id: 6,
						name: '救生圈组织团队6'
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
			set_user(item, index) {
				for (var i = 0; i < this.ids.length; i++) {
					if (item.id == this.ids[i]) {
						this.ids.splice(i, 1)
						return
					}
				}
				this.ids.push(item.id)
				// console.log(item)
				// if(!item.active){
				// 	Vue.set(item,'active',true)
				// }else{
				// 	Vue.set(item,'active',false)
				// }
			},
			xuan_type(item) {
				for (var i = 0; i < this.ids.length; i++) {
					if (item.id == this.ids[i]) {
						return true
					}
				}
				return false
			},
			sousuo_ing() {
				clearInterval(inputt)
				inputt = setTimeout(function() {
					var kw = that.ss_key
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
			user_add() {
				var arr=this.ids
				if(arr.length==0){
					uni.showToast({
						icon:'none',
						title:'请选择用户'
					})
					return
				}
				arr=arr.join(',')
				uni.showToast({
					icon: 'none',
					title: '邀请已发送'
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
		width: 500upx;
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
		position: fixed;
		top: 0;
		z-index: 800;
		background: #Fff;
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

	.user_btn {
		width: 41upx;
		height: 41upx;
		border: 1px solid #3C77F1;
		border-radius: 50%;
	}

	.user_btn.cur {
		border: 12upx solid #3C77F1;
	}
</style>
