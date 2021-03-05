<template>
	<view class="minh100">
		<htmlLoading ref="htmlLoading" @Retry='onRetry' :bj_show="true">
		<view class="xmfwb_box">
			您可以下载一个PDF的用户手册的部署专业或查看下面。 
			<br>
			<view style="color: #2591FF;margin: 10px 0;" @tap="down_fuc('')">用户手册</view>
			<view v-html="datas.content">
				<view class="pz_name">配置文件</view>
				<view class="">
					对于所有用户，我们只需要您的姓名、手机号码和电子邮件地址。在badge ID部分，输入您所在组织的任何badge #。
					我们还允许您输入其他用户在紧急情况下能够查看的一些其他个人信息(尽管不是必需的)，如医疗过敏和紧急联系信息。用户pin的颜色可以用来指定特定的队伍(搜索)
				</view>
				<view class="pz_name">地图</view>
				<view class="">
					地图每5分钟更新一次你的位置，所以你的当前位置和你在地图上的pin位置之间可能有延迟。如果你想尽快更新你的位置，关闭并重新打开应用程序一两次将会立即移动你的用户pin到你的位置
				</view>
				<image class="mapimg" :src="getimg('/static/images/yhzn_03.png')" mode="widthFix"></image>
			</view>
		</view>
		<!-- 警报组件 -->
		<!-- <bao-jing></bao-jing> -->
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
				datas:''
			}
		},
		onLoad(option) {
			that = this
			that.onRetry()
		},
		methods: {
			onRetry(){
				var data = {
					// token:that.$store.state.loginDatas.token
				}
				 			
				 //selectSaraylDetailByUserCard
				 var jkurl = '/minapp/user-guide'
				
				service.P_get(jkurl, data).then(res => {
				 	that.btn_kg = 0
					that.$refs.htmlLoading.htmlReset_fuc(0)
				 	console.log(res)
				 	if (res.code == 1) {
				 		var datas = res.data
				 		console.log(typeof datas)
				 			
				 		if (typeof datas == 'string') {
				 			datas = JSON.parse(datas)
				 		}
				 			
						that.datas=datas
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
					that.$refs.htmlLoading.htmlReset_fuc(1)
				 	console.log(e)
				 	uni.showToast({
				 		icon: 'none',
				 		title: '获取数据失败'
				 	})
				})
			},
			down_fuc(url) {
				// return
				var that = this
				uni.showLoading({
					title: '正在拉取数据'
				})
				
				console.log(url)
				var now = Date.parse(new Date())
				uni.downloadFile({
					url: service.imgurl+url,
					// filePath: wx.env.USER_DATA_PATH + '/' + now + '.xlsx',
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载成功');
							console.log(res);
							uni.hideLoading()
							// uni.showToast({
							// 	icon: 'none',
							// 	title: '保存成功'
							// })
							var filePath = res.tempFilePath;
							wx.openDocument({
								filePath: filePath,
								showMenu: true,
								success: function(res) {
									console.log('打开文档成功')
								},
								fail: function(res) {
									console.log(res);
								},
								complete: function(res) {
									console.log(res);
								}
							})
						}
					}
				});
			},
			getimg(img){
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.minh100{
		background:#FAFAFA;
		padding: 30upx;
	}
	.xmfwb_box{
		font-size: 30upx;
		color: #333;
		line-height: 40upx;
	}
	.pz_name{
		font-size: 36upx;
		color: #333;
		margin-top: 50upx;
		margin-bottom: 30upx;
	}
	.mapimg{
		width: 496upx;
		margin-top: 30upx;
	}
</style>
