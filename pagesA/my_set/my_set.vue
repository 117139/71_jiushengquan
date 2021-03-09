<template>
	<view class="minh100">
		<image class="my_bg" src="/static/images/mybg_01.png" mode=""></image>
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
			
			<cu-custom bgImage="/static/images/mybg_01.png" :isBack="true">
			    <block slot="backText"></block>
					
			    <block slot="content"><text style="color: #333;">编辑资料</text></block>
					<block slot="right"></block>
			</cu-custom>
			<view class="user_tx">
				<avatar stretch="short" inner="true" selWidth="400upx" selHeight="400upx" @upload="myUpload" :avatarSrc="getimg(loginDatas_data.avatar)"
				 avatarStyle="width: 165upx; height: 165upx; border-radius: 100%;">
				</avatar>
				<image class="user_tx_icon" :src="getimg('/static/images/tx_icon.png')" mode="aspectFit"></image>
			</view>
			<view class="msg_list">
				<view class="msg_li">
					<view class="msg_tit">姓名</view>
					<input class="msg_int" type="text" placeholder="请输入您的姓名" v-model="loginDatas_data.name">
				</view>
				<view class="msg_li">
					<view class="msg_tit">手机号码</view>
					<input class="msg_int" type="number" placeholder="请输入您的手机号码" v-model="loginDatas_data.phone">
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
							<image v-if="loginDatas_data.tab_color" class="" :src="getimg(loginDatas_data.tab_color)" mode="widthFix"></image>
							<image v-else class="" :src="getimg('/static/images/zuobiao.png')" mode="widthFix"></image>
						</view>
						
						<image v-if="loginDatas_data.tab_color" class="zuobiao_icon" :src="getimg(loginDatas_data.tab_color)" mode="aspectFit"></image>
						<image v-else class="zuobiao_icon" :src="getimg('/static/images/zuobiao.png')" mode="aspectFit"></image>
					</view>
					
				</view>
				<view class="msg_li">
					<view class="msg_tit">组织名称</view>
					<input class="msg_int" type="text" placeholder="请输入您的组织名称" v-model="loginDatas_data.team">
				</view>
				<view class="msg_li">
					<view class="msg_tit">医疗过敏</view>
					<input class="msg_int" type="text" placeholder="请输入您的医疗过敏" v-model="loginDatas_data.medical_allergy">
				</view>
				<view class="msg_li">
					<view class="msg_tit">紧急联系人1</view>
					<input class="msg_int" type="text" placeholder="请输入联系人姓名" v-model="loginDatas_data.linkman_one_name">
					<input class="msg_int" type="number" placeholder="请输入联系人电话" v-model="loginDatas_data.linkman_one_phone">
				</view>
				<view class="msg_li">
					<view class="msg_tit">紧急联系人2</view>
					<input class="msg_int" type="text" placeholder="请输入联系人姓名" v-model="loginDatas_data.linkman_two_name">
					<input class="msg_int" type="number" placeholder="请输入联系人电话" v-model="loginDatas_data.linkman_two_phone">
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
				<image v-for="(item,index) in zb_list" @tap="set_zb(item.img_url)" :src="getimg(item.img_url)" mode="aspectFit"></image>
				
				
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
				tk_show:false,
				zb_list:[]
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
			that.getdata()
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
			getdata() {
			
				///api/info/list
				var that = this
				var data = {}
			
				//selectSaraylDetailByUserCard
				var jkurl = '/minapp/tab-color'
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
			
						that.zb_list = datas
			
			
					} else {
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '获取数据失败'
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
			myUpload(rsp) {
				var that = this
				var tximg = rsp.path; //更新头像方式一
				// Vue.set(that.loginDatas_data,'avatarurl',tximg)
				// return
				// Vue.set(that.loginDatas_data,'avatarurl',tximg)
				service.wx_upload(tximg).then(res => {
							
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						Vue.set(that.loginDatas_data,'avatar',datas)
					} else {
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: "none",
								title: "上传失败"
							})
						}
					}
				}).catch(e => {
					that.btn_kg = 0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '操作失败'
					})
				})
				
			},
			set_zb(img){
				Vue.set(that.loginDatas_data,'tab_color',img)
				that.tk_show=false
			},
			save_fuc(){
				var datas=that.loginDatas_data
				var jkurl="/minapp/edit/user"
				// uni.showToast({
				// 	icon:'none',
				// 	title:'提交成功'
				// })
				// return
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				uni.showLoading({
					mask:true,
					title:'正在提交'
				})
				service.P_post(jkurl, datas).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
				
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						service.login_tel()
						uni.showToast({
							icon:'none',
							title:'提交成功'
						})
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
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
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '操作失败'
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
