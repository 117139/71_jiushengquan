<template>
	<view class="minh100 xmfwb_box">
		<view class="xq_tit">{{data.title}}</view>
		<image :src="getimg(data.img)" @tap="pveimg" :data-src="getimg(data.img)" mode="widthFix" style="width: 100%;"></image>
		<view class="xq_xq">
			野外生存技巧
			<br>野外生存技巧之找水、收集水
			<br>生命离不开水，没bai有食物正常人可以活三周，但没有水，三天都活不了，所以水要优先考虑，几点小提示，希望帮助你在野外迅速找到或收集到水。
			<br>1. 找水源首选之地是山谷底部地区，高山地区寻水，应沿着岩石裂缝去找，干涸河
			<br>床沙石地带往往会挖到泉眼。
			<br>2. 在海岸边，应在最高水线以上挖坑，很可能有一层厚约5厘米的沉滤水浮在密度较大的海水层上。
			<br>3. 饮用凹地积水处的水时，必须做到先消毒、沉淀后煮沸饮用。
			<br>4. 收集雨水：在地上挖个洞，铺上一层塑料，四周用粘土围住，可以有效地收集雨水。
			<br>5. 凝结水：在一段树叶浓密的嫩枝上套一只塑料袋，叶面蒸腾作用会产生凝结水。
			<br>6. 跟踪动物、鸟类、昆虫、或人类踪迹可以找到水源。
			<br>7. 植物中取水：竹类等中空植物的节间常存有水，藤本植物往往有可饮用的汁液，棕榈类、仙人掌类植物的果实和茎干都含有丰富的水分。
			<br>8. 日光蒸馏器：在干旱沙漠地区利用下述方法能较好地收集到水：在相对潮湿的地面挖一大约宽90厘米、深45厘米的坑，坑底部中央放一集水器，坑面悬一条拉成弧形的塑料膜。光能升高坑内潮湿土壤和空气的温度，蒸发产生水汽，水汽与塑料膜接触遇冷凝结成水珠，下滑至器皿中。
			野外生存技巧之野外生火
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
				data:{
						img:'/static/images/ck_img_03.png',
						title:'伤口护理该怎么护理，我来教你怎么做'
					}
					
			}
		},
		onLoad() {
			that=this
		},
		methods: {
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
