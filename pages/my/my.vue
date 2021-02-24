<template>
	<view class="minh100">
		<image class="my_bg" :src="getimg('/static/images/mybg_01.png')" mode=""></image>
		<view class="my_box ">
			<view class="head_box1" :style="style"></view>
			<view class="head_box" :class="{'cur_H':PageScroll>10}" :style="style">
				<image class="head_box_img" :src="getimg('/static/images/mybg_01.png')" mode="aspectFill"></image>
				<view class="my_tit_box" :style="style1">
					个人中心
					<!-- 万屋智能 -->
				</view>
				<text @tap="jump" data-url="/pagesA/my_set/my_set" class="iconfont iconshezhi_huaban header_r"></text>
			</view>
			<view class="my_top">
				
				<view v-if="hasLogin" class="my_msg dis_flex ">
					<image class="my_tx" :src="getimg('/static/images/tx_m2.jpg')" mode="aspectFill"></image>
					<view class="flex_1 dis_flex_c ju_b" style="height: 110upx;">
						<view class="my_name">救生圈员工</view>
						<view class="my_yx">2560015822@qq.com</view>
					</view>
					
				</view>
				<view v-else class="my_msg dis_flex aic ju_c" @tap="jump" data-url="/pages/login/login">
					登录/注册
				</view>
			</view>
			<view class="my_main">
				<view class="my_yw_tit">我的业务</view>
				<view class="my_yw_list">
					<view class="my_yw_li"  @tap="jump" data-url="/pagesA/my_cankao/my_cankao">
						<image class="my_yw_img" :src="getimg('/static/images/mybtn1.png')" mode="aspectFill"></image>
						<text class="my_yw_text">参考</text>
					</view>
					<view class="my_yw_li" @tap="jump" data-url="/pagesA/my_camera/my_camera">
						<image class="my_yw_img" :src="getimg('/static/images/mybtn2.png')" mode="aspectFill"></image>
						<text class="my_yw_text">照相机</text>
					</view>
					<view class="my_yw_li" @tap="jump" data-url="/pagesA/my_jianshang/my_jianshang">
						<image class="my_yw_img" :src="getimg('/static/images/mybtn3.png')" mode="aspectFill"></image>
						<text class="my_yw_text">检伤分类</text>
					</view>
					<view class="my_yw_li"  @tap="jump" data-url="/pagesA/my_notepad/my_notepad">
						<image class="my_yw_img" :src="getimg('/static/images/mybtn4.png')" mode="aspectFill"></image>
						<text class="my_yw_text">记事本</text>
					</view>
					<view class="my_yw_li" @tap="jump" data-url="/pagesA/my_set/my_set">
						<image class="my_yw_img" :src="getimg('/static/images/mybtn5.png')" mode="aspectFill"></image>
						<text class="my_yw_text">编辑资料</text>
					</view>
					<view class="my_yw_li" @tap="jump" data-url="/pagesA/team_list/team_list">
						<image class="my_yw_img" :src="getimg('/static/images/mybtn6.png')" mode="aspectFill"></image>
						<text class="my_yw_text">团队</text>
					</view>
					<view class="my_yw_li"  @tap="jump" data-url="/pagesA/my_zn/my_zn">
						<image class="my_yw_img" :src="getimg('/static/images/mybtn7.png')" mode="aspectFill"></image>
						<text class="my_yw_text">用户指南</text>
					</view>
					<view class="my_yw_li" @tap="jump" data-url="/pagesA/lxwm/lxwm">
						<image class="my_yw_img" :src="getimg('/static/images/mybtn8.png')" mode="aspectFill"></image>
						<text class="my_yw_text">联系我们</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 警报组件 -->
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
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				PageScroll: 0,
				bj_time:10,
				baojing:false
			}
		},

		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;

				return style
			},

			style1() {
				var StatusBar = this.StatusBar;
				var style = `top:${StatusBar}px;`;

				return style
			},
		},
		onPageScroll(e) {
			console.log(e)
			this.PageScroll = e.scrollTop
			// if(e.scrollTop>10){
			// 	uni.showToast({
			// 		title:e.scrollTop
			// 	})
			// }
		},
		methods: {
			getbanner() {

				///api/info/list
				var that = this
				var data = {}

				//selectSaraylDetailByUserCard
				var jkurl = '/entrance'
				uni.showLoading({
					title: '正在获取数据'
				})
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)

						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}

						that.banner = datas
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
	.minh100 {
		/* #ifdef H5 */

		min-height: calc(100vh - 100upx);
		/* #endif */
	}

	.my_bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 418upx;
		z-index: 0;
	}

	.my_box {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		/* #ifdef H5 */
		min-height: calc(100vh - 100upx);
		/* #endif */
	}
	.head_box1{
		position: relative;
	}
	.head_box {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		/* text-align: center; */
		font-size: 32upx;
		font-family: PingFang SC;
		font-weight: 500;

		color: rgba(0, 0, 0, 0);
		z-index: 99999;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		transition: all .5s;


		padding-right: 220rpx;
		-webkit-box-shadow: 0rpx 0rpx 0rpx;
		box-shadow: 0rpx 0rpx 0rpx;
		z-index: 9999;
		overflow: hidden;
		background: #fff;
	}

	.head_box_img {
		position: absolute;
		top: 0;
		width: 100%;
		height: 418upx;
		left: 0;
		right: 0;
	}

	.my_tit_box {
		width: calc(100% - 440rpx);
		position: absolute;
		text-align: center;
		/* width: calc(100% - 340rpx); */
		left: 0;

		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		height: 60rpx;
		font-size: 32rpx;
		line-height: 60rpx;
		cursor: none;
		pointer-events: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.header_r {
		font-size: 40upx;
		color: #000;
		position: absolute;
		right: 10upx;
		z-index: 9999;
		top: 50%;
		transform: translateY(-50%);
	}
	
	
	/* my_top */
	.my_top{
		width: 100%;
		padding: 0 30upx;
	}
	.my_msg{
		width: 100%;
		padding-top: 50upx;
		padding-bottom: 50upx;
	}
	.my_tx{
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		margin-right: 28upx;
		flex: none;
	}
	.my_name{
		font-size: 36upx;
		color: #333;
	}
	.my_yx{
		font-size: 26upx;
		color: #333;
	}
	.my_main{
		width: 100%;
		padding: 0 30upx;
	}
	.my_yw_tit{
		width: 100%;
		height: 150upx;
		display: flex;
		align-items: center;
		font-size: 34upx;
		color: #333;
	}
	.my_yw_list{
		width: 100%;
		background: #FFFFFF;
		box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		display: flex;
		flex-wrap: wrap;
	}
	.my_yw_li{
		width: 33.333%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 210upx;
	}
	.my_yw_img{
		width: 84upx;
		height: 84upx;
		border-radius: 50%;
		margin-bottom: 20upx;
	}
	.my_yw_text{
		font-size: 28upx;
		color: #333;
	}
	
	
	.bj_box{
		position: fixed;
		bottom: 100upx;
		right: 30upx;
		z-index:999999;
		width: 113upx;
		height: 114upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 21upx 0px rgba(0, 0, 0, 0.16);
		border-radius: 50%;
	}
	
</style>
