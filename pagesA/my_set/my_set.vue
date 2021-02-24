<template>
	<view class="minh100">
		<image class="my_bg" :src="getimg('/static/images/mybg_01.png')" mode=""></image>
		<view class="my_box ">
			<!-- <view class="head_box1" :style="style"></view>
			<view class="head_box" :class="{'cur_H':PageScroll>10}" :style="style">
				<image class="head_box_img" :src="getimg('/static/images/mybg_01.png')" mode="aspectFill"></image>
				<text @tap="back"  class="iconfont iconprev header_r"></text>
				<view class="my_tit_box" :style="style1">
					编辑资料
				</view>
			</view> -->
			<!-- <cu-custom bgColor="bg-white" :isBack="true"> -->
			
			<cu-custom :bgImage="getimg('/static/images/mybg_01.png')" :isBack="true">
			    <block slot="backText"></block>
					
			    <block slot="content"><text style="color: #333;">编辑资料</text></block>
					<block slot="right"></block>
			</cu-custom>
			<view class="user_tx">
				<avatar stretch="short" inner="true" selWidth="400upx" selHeight="400upx" @upload="myUpload" :avatarSrc="getimg(loginDatas_data.avatarurl)"
				 avatarStyle="width: 165upx; height: 165upx; border-radius: 100%;">
				</avatar>
				<image class="user_tx_icon" :src="getimg('/static/images/tx_icon.png')" mode="aspectFit"></image>
			</view>
			<view class="msg_list">
				<view class="msg_li">
					<view class="msg_tit">姓名</view>
					<input class="msg_int" type="text" placeholder="请输入您的姓名" v-model="loginDatas_data.nickname">
				</view>
				<view class="msg_li">
					<view class="msg_tit">手机号码</view>
					<input class="msg_int" type="number" placeholder="请输入您的手机号码" v-model="loginDatas_data.tel">
				</view>
				<view class="msg_li">
					<view class="msg_tit">电子邮件</view>
					<input class="msg_int" type="text" placeholder="请输入您的电子邮件" v-model="loginDatas_data.email">
				</view>
				<view class="msg_li" @tap="tk_show=true">
					<view class="msg_tit dis_flex aic ju_b" style="padding-bottom: 35upx;border-bottom: 1px solid #eee;">
						<text>标记点颜色</text>
						<view class="flex_1"></view>
						<view class="zuobiao_icon_c" style="overflow: hidden;margin-right: 10upx;">
							<image v-if="loginDatas_data.zuobiao" class="" :src="getimg(loginDatas_data.zuobiao)" mode="widthFix"></image>
							<image v-else class="" :src="getimg('/static/images/zuobiao.png')" mode="widthFix"></image>
						</view>
						
						<image v-if="loginDatas_data.zuobiao" class="zuobiao_icon" :src="getimg(loginDatas_data.zuobiao)" mode="aspectFit"></image>
						<image v-else class="zuobiao_icon" :src="getimg('/static/images/zuobiao.png')" mode="aspectFit"></image>
					</view>
					
				</view>
				<view class="msg_li">
					<view class="msg_tit">组织名称</view>
					<input class="msg_int" type="text" placeholder="请输入您的组织名称" v-model="loginDatas_data.zz_name">
				</view>
				<view class="msg_li">
					<view class="msg_tit">医疗过敏</view>
					<input class="msg_int" type="text" placeholder="请输入您的医疗过敏" v-model="loginDatas_data.ylgm">
				</view>
				<view class="msg_li">
					<view class="msg_tit">紧急联系人1</view>
					<input class="msg_int" type="text" placeholder="请输入联系人姓名" v-model="loginDatas_data.lxr1_name">
					<input class="msg_int" type="number" placeholder="请输入联系人电话" v-model="loginDatas_data.lxr1_phone">
				</view>
				<view class="msg_li">
					<view class="msg_tit">紧急联系人2</view>
					<input class="msg_int" type="text" placeholder="请输入联系人姓名" v-model="loginDatas_data.lxr2_name">
					<input class="msg_int" type="number" placeholder="请输入联系人电话" v-model="loginDatas_data.lxr2_phone">
				</view>
				<view style="padding-bottom: 200upx;"></view>
			</view>
		</view>
		<view class="add_user">
			<view class="add_user_btn" @tap="save_fuc">保存</view>
		</view>
		<!-- 警报组件 -->
		<bao-jing></bao-jing>
		
		<view v-if="tk_show" class="tk_popop"  @touchmove.stop.prevent='test'>
			<view class="tk_main">
				<image @tap="set_zb('/static/images/zuobiao.png')" :src="getimg('/static/images/zuobiao.png')" mode="aspectFit"></image>
				<image @tap="set_zb('/static/images/zuobiao1.png')" :src="getimg('/static/images/zuobiao1.png')" mode="aspectFit"></image>
				<image @tap="set_zb('/static/images/zuobiao2.png')" :src="getimg('/static/images/zuobiao2.png')" mode="aspectFit"></image>
				<image @tap="set_zb('/static/images/zuobiao3.png')" :src="getimg('/static/images/zuobiao3.png')" mode="aspectFit"></image>
				<image @tap="set_zb('/static/images/zuobiao4.png')" :src="getimg('/static/images/zuobiao4.png')" mode="aspectFit"></image>
				<image @tap="set_zb('/static/images/zuobiao5.png')" :src="getimg('/static/images/zuobiao5.png')" mode="aspectFit"></image>
				<image @tap="set_zb('/static/images/zuobiao6.png')" :src="getimg('/static/images/zuobiao6.png')" mode="aspectFit"></image>
				<image @tap="set_zb('/static/images/zuobiao7.png')" :src="getimg('/static/images/zuobiao7.png')" mode="aspectFit"></image>
				<image @tap="set_zb('/static/images/zuobiao8.png')" :src="getimg('/static/images/zuobiao8.png')" mode="aspectFit"></image>
				
			</view>
			<text @tap="tk_show=false" class="iconfont iconguanbi" style="font-size: 50upx;color: #fff;"></text>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	import service from '../../service.js';
	import avatar from "../../components/yq-avatar/yq-avatar.vue";
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
				loginDatas_data:'',
				tk_show:false
			}
		},
		
		components: {
			avatar
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
		
		onLoad() {
			that =this
			that.loginDatas_data=JSON.parse(JSON.stringify(that.loginDatas))
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
			test(){},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			myUpload(rsp) {
				var that = this
				var tximg = rsp.path; //更新头像方式一
				// Vue.set(that.loginDatas_data,'avatarurl',tximg)
				// return
				Vue.set(that.loginDatas_data,'avatarurl',tximg)
				return
				uni.uploadFile({
					url: service.IPurl + '/upload/streamImg', //仅为示例，非真实的接口地址
					filePath: tximg,
					name: 'file',
					formData: {
						token: that.loginDatas.userToken
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
						var ndata = JSON.parse(uploadFileRes.data)
						if (ndata.code == 1) {
							Vue.set(that.loginDatas_data,'avatarurl',ndata.msg)
			
						}
					}
				});
				//rsp.avatar.imgSrc = rsp.path; //更新头像方式二
			},
			set_zb(img){
				Vue.set(that.loginDatas_data,'zuobiao',img)
				that.tk_show=false
			},
			save_fuc(){
				console.log(that.loginDatas_data)
				uni.showToast({
					icon:'none',
					title:'保存成功'
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

		/* min-height: calc(100vh - 100upx); */
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
		color: #333;
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
		left: 10upx;
		z-index: 9999;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.user_tx{
		width: 165upx;
		height: 165upx;
		border-radius: 50%;
		position: relative;
		margin: 50upx auto 10upx;
	}
	.user_tx_icon{
		width: 51upx;
		height: 51upx;
		border-radius: 50%;
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.msg_list{
		width: 100%;
		padding: 0 50upx;
	}
	
	.add_user {
		/* position: fixed;
		bottom: 0;
		left: 0;
		right: 0; */
		background: rgba(255, 255, 255, .8);
		/* background: #FAFAFA; */
		height: 200upx;
		display: flex;
		align-items: center;
		justify-content: center;
		/* z-index: 100; */
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
	.msg_li{
		width: 100%;
		
	}
	.msg_tit{
		width: 100%;
		font-size: 30upx;
		color: #222;
		padding-top: 35upx;
	}
	.msg_int{
		width: 100%;
		height: 80upx;
		font-size: 30upx;
		border-bottom: 1px solid #EEEEEE;
	}
	.zuobiao_icon{
		width: 50upx;
		height: 48upx;
	}
	.zuobiao_icon_c{
		width: 50upx;
		height: 50upx;
	}
	
	
	
	.tk_popop{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999999999;
		background: rgba(0,0,0,.5);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.tk_main{
		margin-bottom: 30upx;
		width: 505upx;
		min-height: 494upx;
		max-height: 700upx;
		overflow-y: scroll;
		background: #FFFFFF;
		border-radius: 10upx;
		padding:30upx 40upx;
		display: flex;
		flex-wrap: wrap;
		
	}
	.tk_main image{
		width: 25%;
		height: 100upx;
	}
</style>
