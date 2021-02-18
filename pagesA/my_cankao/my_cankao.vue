<template>
	<view class="minh100">
		
		<scroll-view  scroll-x="true" class="scroll_x list_tit">
			<view class="list_tit_li" :class="fw_cur==index?' cur':''" @tap="fwcur_fuc(index)" v-for="(item,index) in tabs">{{item.name}}</view>
		</scroll-view>
		<view class="ck_list">
			<view class="ck_li_box" v-for="(item,index) in datas">
				<view class="ck_li" @tap="jump" :data-url="'/pagesA/my_cankao_details/my_cankao_details?id='+item.id">
					<image :src="getimg(item.img)" mode="aspectFill"></image>
					<view class="ck_tit">
						<!-- <text>{{item.title}}-{{tabs[fw_cur].name}}</text> -->
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
			
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
				fw_cur:'',
				tabs:[
					{
						name:'设备列表'
					},
					{
						name:'一般参考'
					},
					{
						name:'伤减分类'
					},
					{
						name:'设备列表'
					},
					{
						name:'设备列表'
					},
					{
						name:'设备列表'
					},
				],
				datas:[
					{
						img:'/static/images/ck_img_03.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_03.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_05.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_03.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_03.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_05.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_03.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_03.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_05.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
					{
						img:'/static/images/ck_img_05.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					},
				]
			}
		},
		onLoad() {
			that=this
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		},
		methods: {
			fwcur_fuc(num){
				that.fw_cur=num
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
		z-index: 9999;
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
