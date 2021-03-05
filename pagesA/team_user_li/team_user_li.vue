<template>
	<view class="minh100">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1" class="loading_def">
			<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<block v-if="htmlReset==0">
			<view class="team_tit">创建人</view>
			<view class="team_list" style="padding-bottom: 0;">
				<view class="team_li">
					<image class="team_li_img" :src="getimg('/static/images/team_icon.png')" mode="aspectFit"></image>
					<view class="team_li_msg">
						<view class="text-cut">{{'野外求生专家'}}</view>
					</view>
					<view class="join_btn1">我</view>
				</view>
			</view>
			<view class="team_tit">组织团队成员</view>
			<view class="team_list">

				<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
				<view v-if="htmlReset==-1" class="loading_def">
					<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
				</view>
				<block v-if="htmlReset==0">
					<view v-for="(item,index) in datas" class="team_li">
						<image class="team_li_img" :src="getimg('/static/images/tx_m2.jpg')" mode="aspectFit"></image>
						<view class=" team_li_msg">
							<view class="text-cut">{{item.name}}{{ss_key}}</view>
						</view>
						<view class="join_btn" @tap="join_fuc(item)">踢除</view>
					</view>
				</block>
				
				<view v-if="datas.length==0" class="zanwu">暂无数据</view>
				<view v-if="data_last" class="data_last">我可是有底线的哟~</view>
			</view>
		</block>
		<view class="add_user">
			<view class="add_user_btn" @tap="jump" :data-url="'/pagesA/team_user_add/team_user_add?id='+id">邀请新成员</view>
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
				that.datas=[]
				that.data_last=false
				that.page=1
				
				that.getdata()
			},
			getdata() {
				
				///api/info/list
				// var that = this
				var data = {
					page:that.page,
					size:that.size
				}
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/minapp/team'
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
			
			join_fuc(item) {
				uni.showToast({
					icon: 'none',
					title: '踢除操作'
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

	.join_btn1 {
		width: 143upx;
		color: #999;
		font-size: 24upx;
		text-align: right;
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
