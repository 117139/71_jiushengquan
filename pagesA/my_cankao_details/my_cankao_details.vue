<template>
	<view class="minh100 xmfwb_box">
		<htmlLoading ref="htmlLoading" @Retry='getdata' :bj_show="true">
			<view v-if="datas">
				<view class="xq_tit">{{datas.title}}</view>
				<image :src="getimg(datas.cover)" @tap="pveimg" :data-src="getimg(datas.cover)" mode="widthFix" style="width: 100%;"></image>
				<view class="xq_xq" v-html="datas.content"></view>
			</view>
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
				datas:{},
				data:{
					id:'',
					
					img:'/static/images/ck_img_03.png',
					title:'伤口护理该怎么护理，我来教你怎么做'
				}
					
			}
		},
		onLoad(option) {
			that=this
			that.id=option.id
			that.getdata()
		},
		methods: {
			
			getdata(){
				console.log('getdata1')
				 var data = {
					 consult_id:that.id
				 }
				 if(that.btn_kg==1){
				 	return
				 }
				 that.btn_kg=1
				 //selectSaraylDetailByUserCard
				 var jkurl = '/minapp/consult'
				
					console.log('getdata2')
				service.P_get(jkurl, data).then(res => {
					
						console.log('getdata3')
				 	that.btn_kg = 0
					that.$refs.htmlLoading.htmlReset_fuc(0)
				 	console.log(res)
				 	if (res.code == 1) {
				 		var datas = res.data
				 		// console.log(typeof datas)
				 			
				 		if (typeof datas == 'string') {
				 			datas = JSON.parse(datas)
				 		}
				 		that.datas = datas
						
				 		console.log(that.datas)
				 			
				 			
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
				console.log('getdata4')
				 	that.btn_kg = 0
					that.$refs.htmlLoading.htmlReset_fuc(1)
				 	console.log(e)
				 	uni.showToast({
				 		icon: 'none',
				 		title: '获取数据失败'
				 	})
				})
			},
			
			pveimg(e){
				service.pveimg(e)
			},
			getimg(img) {
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.minh100{
		width: 100%;
		padding: 20upx 30upx;
	}
	.xq_tit{
		font-size: 38upx;
		color: #444;
		line-height: 45upx;
		margin-bottom: 30upx;
		

		font-weight: bold;
	}
	.xq_xq{
		font-size: 30upx;
		color: #444;
		margin-top: 30upx;
		line-height: 45upx;
		padding-bottom: 100upx;
	}
</style>
