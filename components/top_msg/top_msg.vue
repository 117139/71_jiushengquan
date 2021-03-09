<template>
	<view>
		<view class="top_r" @tap="jump" data-url="/pagesA/team_msgs/team_msgs">
			<text v-if="NCount>0" class="tip_box">{{NCount}}</text>
			<text class="iconfont icontongzhi"></text>
		</view>
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
		name:"top_msg",
		data() {
			return {
				
			};
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin','loginDatas', 'NCount']),
			
		},
		onLoad() {
			that=this
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
</style>
