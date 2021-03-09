<template>
	<view class="minh100">
		<htmlLoading ref="htmlLoading" @Retry='onRetry' :bj_show="true">
			<view class="team_list">
				<view v-for="(item,index) in datas1" class="team_li">
					<image class="team_li_img" :src="getimg(item.apply_user_info.avatar)" mode="aspectFit"></image>
					<view class=" team_li_msg dis_flex_c flex_1">
						<view class="text-cut">{{item.apply_user_info.username}}</view>
						<view class="text-cut" style="font-size: 24upx;color: #999;">{{item.msg_content}}</view>
					</view>
					<view>
						<view class="join_btn join_btn1" @tap="join_fuc(item,2)">拒绝</view>
						<view class="join_btn" @tap="join_fuc(item,1)">同意</view>
					</view>
				</view>
				<view v-for="(item,index) in datas" class="team_li">
					<image class="team_li_img" :src="getimg('/static/images/xxtz_03.png')" mode="aspectFit"></image>
					<view class=" team_li_msg dis_flex_c flex_1">
						<view class="text-cut">消息通知</view>
						<view class="text-cut" style="font-size: 24upx;color: #999;">{{item.content}}</view>
					</view>
				</view>
			</view>
			
			<view v-if="datas1.length==0&&datas.length==0" class="zanwu">暂无数据</view>
			<view v-if="data_last" class="data_last">我可是有底线的哟~</view>
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
				id:'',
				htmlReset: -1,
				ss_key: '',
				
				datas1:[],
				datas:[],
				page: 1,
				size: 15,
				data_last:false,
				triggered: true, //设置当前下拉刷新状态
			}
		},
		onLoad() {
			that = this
			that.onRetry()
		},
		onShow() {
			that.htmlReset = 0
		},
		onPullDownRefresh() {
			
			that.onRetry()
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
				var jkurl = '/minapp/msg-notice'
				uni.showLoading({
					title: '正在获取数据'
				})
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
				
							that.datas1 = datas.list1
							that.datas = datas.list2
						} else {
							if (datas.list2.length == 0) {
								that.data_last = true
								return
							}
							that.data_last = false
							that.datas = that.datas.concat(datas.list2)
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
			
			join_fuc(item,num) {
				var text_s=''
				if(num==2){
					text_s='拒绝'
				}else{
					text_s='同意'
				}
				// uni.showToast({
				// 	icon: 'none',
				// 	title: text_s+'操作'
				// })
				var jkurl='/minapp/consent'
				var data={
					token:that.$store.state.loginDatas.token,
					id:item.id,
					state:num
				}
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				// uni.showLoading({
				// 	title: '正在发送邀请'
				// })
				
				service.P_post(jkurl, data).then(res => {
					that.btn_kg = 0
					// that.$refs.htmlLoading.htmlReset_fuc(0)
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
							
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						uni.showToast({
							icon:'none',
							title:'操作成功'
						})
						setTimeout(()=>{
							that.onRetry()
						},1000)	
							
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
					// that.$refs.htmlLoading.htmlReset_fuc(1)
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '操作异常'
					})
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
