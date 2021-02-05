<template>
	<view class="minh100">
		<image class="lxwm_bg" :src="getimg('/static/images/lxwm_02.png')" mode=""></image>
		<view class="lxwm_box">
			
			<view class="lxwm_form">
				<view class="f_tit">姓名</view>
				<input class="f_int" type="text" v-model="name" placeholder="请输入您的姓名">
				<view class="f_tit">手机号码</view>
				<input class="f_int" type="text" v-model="tel" placeholder="请输入手机号码">
				<view class="f_tit">电子邮件</view>
				<input class="f_int" type="text" v-model="email" placeholder="请输入电子邮件">
				<view class="f_tit">团队</view>
				<input class="f_int" type="text" v-model="team" placeholder="请输入团队">
				<view class="f_tit">输入您的消息</view>
				<textarea class="f_cont" placeholder="请输入您的消息" v-model="content" maxlength="-1"/>
				<view class="f_btn" @tap="sub">提交</view>
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
				name:'',
				tel:'',
				email:'',
				team:'',
				content:''
				
			}
		},
		onLoad() {
			that=this
		},
		methods: {
			
			sub(){
				if(!that.name){
					uni.showToast({
						icon:'none',
						title:'请输入您的姓名'
					})
					return
				}
				if(!that.tel){
					uni.showToast({
						icon:'none',
						title:'请输入您的手机号'
					})
					return
				}
				if (that.tel == '' || !(/^1\d{10}$/.test(that.tel))) {
					wx.showToast({
						icon: 'none',
						title: '手机号有误'
					})
					return
				}
				if(!that.email){
					uni.showToast({
						icon:'none',
						title:'请输入您的电子邮箱'
					})
					return
				}
				if(!that.team){
					uni.showToast({
						icon:'none',
						title:'请输入您的团队'
					})
					return
				}
				if(!that.content){
					uni.showToast({
						icon:'none',
						title:'请输入您的消息'
					})
					return
				}
				var datas={
					name:that.name,
					tel:that.tel,
					email:that.email,
					team:that.team,
					content:that.content
				}
				var jkurl=""
				uni.showToast({
					icon:'none',
					title:'提交成功'
				})
				return
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
						title: '操作失败'
					})
				})
			},
			getimg(img) {
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.minh100{
		background: #FAFAFA;
	}
	.lxwm_bg{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		width: 100%;
		height: 285upx;
	}
	.lxwm_box{
		width: 100%;
		padding: 154upx 30upx 0;
		position: relative;
		z-index: 1;
	}
	.lxwm_form{
		width: 100%;
		padding: 0 30upx 20upx;
		min-height: calc(100vh - 154upx);
		background: #FFFFFF;
		box-shadow: 0px 2px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 10upx 10upx 0 0;
	}
	.f_tit{
		font-size: 30upx;
		color: #222;
		padding-top: 35upx;
	}
	.f_int{
		width: 100%;
		height: 88upx;
		font-size: 30upx;
		border-bottom: 1px solid #eee;
	}
	.f_cont{
		width: 100%;
		height: 283upx;
		background: #EFEFEF;
		border-radius: 4px;
		padding: 15upx;
		font-size: 30upx;
		margin-top: 22upx;
		margin-bottom: 95upx;
	}
	.f_btn{
		width: 624upx;
		height: 86upx;
		background: #609AEC;
		border-radius: 4upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #fff;
	}
</style>
