<template>
	<view class="minh100">
		<htmlLoading ref="htmlLoading" @Retry='getdata' :bj_show="true">
			<scroll-view  scroll-x="true" class="scroll_x list_tit">
				<view class="list_tit_li" :class="fw_cur==item.id?' cur':''" @tap="fwcur_fuc(item.id)" v-for="(item,index) in tabs">{{item.title}}</view>
			</scroll-view>
			<view class="ck_list">
				<view class="ck_li_box" v-for="(item,index) in datas">
					<view class="ck_li" @tap="jump" :data-url="'/pagesA/my_cankao_details/my_cankao_details?id='+item.id">
						<image :src="getimg(item.cover)" mode="aspectFill"></image>
						<view class="ck_tit">
							<!-- <text>{{item.title}}-{{tabs[fw_cur].name}}</text> -->
							<text>{{item.title}}</text>
						</view>
					</view>
				</view>
				<view v-if="datas.length==0" class="zanwu">暂无数据</view>
				<view v-if="data_last" class="data_last">我可是有底线的哟~</view>
			</view>
		</htmlLoading>
		
		<!-- <bao-jing></bao-jing> -->
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
				fw_cur:'',
				tabs:[],
				datas:[],
				page: 1,
				size: 15,
				data_last:false,
				triggered: true, //设置当前下拉刷新状态
			}
		},
		onLoad() {
			that=this
			that.getcate()
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		},
		methods: {
			fwcur_fuc(num){
				that.fw_cur=num
				that.onRetry()
			},
			onRetry(){
				
				that.datas=[]
				that.data_last=false
				that.page=1
				
				that.getdata()
			},
			getcate(){
				 var data = {}
				 			
				 //selectSaraylDetailByUserCard
				 var jkurl = '/minapp/consult'
				
				service.P_get(jkurl, data).then(res => {
				 	that.btn_kg = 0
				 	console.log(res)
				 	if (res.code == 1) {
				 		var datas = res.data
				 		console.log(typeof datas)
				 			
				 		if (typeof datas == 'string') {
				 			datas = JSON.parse(datas)
				 		}
				 			
				 		that.tabs = datas.type
						that.fw_cur=datas.type[0].id
						that.onRetry()
						// if(datas.length>0){
						// 	var cate_list=JSON.stringify(datas)
						// 	uni.setStorageSync('cate_list',cate_list)
						// }
						
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
				 				title: '获取失败'
				 			})
				 		}
				 	}
				}).catch(e => {
				 	that.btn_kg = 0
				 	console.log(e)
				 	uni.showToast({
				 		icon: 'none',
				 		title: '获取数据失败'
				 	})
				})
			},
			
			getdata() {
				
				///api/info/list
				// var that = this
				var data = {
					page:that.page,
					size:that.size,
					consult_type_id:that.fw_cur
				}
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/minapp/consult'
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
				
							that.datas = datas.list
						} else {
							if (datas.list.length == 0) {
								that.data_last = true
								return
							}
							that.data_last = false
							that.datas = that.datas.concat(datas.list)
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
	.minh100{
		padding-top: 100upx;
	}
	.list_tit{
		width: 100%;
		height: 100upx;
		white-space:nowrap;
		position: fixed;
		top: 0;
		/* #ifdef H5 */
			top: calc(44px + env(safe-area-inset-top));
		/* #endif */
		left: 0;
		z-index: 800;
		background:#fff;
		border-top: 1px solid #E7E7E7;
		border-bottom: 1px solid #E7E7E7;
	}
	.list_tit_li{
		display: inline-flex;
		font-size: 28upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #A9A9A9;
		height: 100upx;
		align-items: center;
		justify-content: center;
		margin:0 15upx;
		min-width: 150upx;
	}
	.list_tit_li.cur{
		color: #3C77F1;
		position: relative;
	}
	.list_tit_li.cur::before{
		width: 55upx;
		height: 4upx;
		background: #3C77F1;
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		margin-left: -23upx;
		margin-top: 28upx;
	}
	.ck_list{
		width: 100%;
		padding: 20upx;
		display: flex;
		flex-wrap: wrap;
	}
	.ck_li_box{
		width: 50%;
		max-width: 400upx;
		padding: 10upx;
	}
	.ck_li{
		width: 100%;
		/* margin-right: 18upx; */
		background: #FFFFFF;
		border: 1px solid #D6D6D6;
		border-radius: 4upx;
		/* margin-bottom: 25upx; */
	}
	/* .ck_li:nth-child(2n){
		margin-right: 0;
	} */
	.ck_li image{
		width: 100%;
		height: 228upx;
	}
	.ck_tit{
		width: 100%;
		padding: 20upx;
		font-size: 26upx;
		color: #333;
	}
</style>
