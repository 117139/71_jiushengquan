<template>
	<view class="minh100">
		<view  class="camera_box"  @tap="upimg">
			<image  v-if="camera_img" :src="getimg(camera_img)" mode="aspectFill"></image>
			<image v-else :src="getimg('/static/images/img_mr.png')" mode="aspectFit"></image>
		</view>
		<view class="b_btns">
			<image  @tap="upimg" :src="getimg('/static/images/camera.png')" mode="aspectFit"></image>
			<image v-if="camera_img" @tap="getShare" :src="getimg('/static/images/share.png')" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	import service from '../../service.js';
	import _app from '@/util/QS-SharePoster/app.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
	export default {
		data() {
			return {
				camera_img:'',
			}
		},
		onLoad() {
			that=this
			that.upimg()
		},
		methods: {
			
			upimg(e) {
				var that = this
				if(e){
					console.log(e.currentTarget.dataset.type)
				}
				// 从相册选择1张图-答案
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['camera'],
					success: function(res) {
						console.log(res)
						const tempFilePaths = res.tempFilePaths
						console.log(e)
						console.log(res.tempFilePaths)
						// var idx=e.currentTarget.dataset.type
						// that.$set(that.answer[idx],'img',res.tempFilePaths)
						that.camera_img=res.tempFilePaths[0]
						that.upimg1(tempFilePaths,0, 0)
						// #ifdef MP-WEIXIN
						// that.upimg1(tempFilePaths,idx, 0)
						// #endif
						// // #ifndef MP-WEIXIN
						// that.upimg1_h5(tempFilePaths,idx, 0)
						// // #endif
							
						
								
					}
				});
			},
			upimg1(imgs,type, i) {
				var that = this
				service.wx_upload(imgs[i]).then(res => {
							
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(datas)
						var newdata
						that.camera_img=datas
							
						// console.log(newdata < 1)
						// console.log(i < imgs.length - 1)
						// console.log(newdata < 1 && i < imgs.length - 1)
						// if (newdata < 1 && i < imgs.length - 1) {
						// 	i++
						// 	that.upimg1(imgs, type, i)
						// }
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
				return
				uni.uploadFile({
					url: service.IPurl+'/minapp/upload-img', //仅为示例，非真实的接口地址
					filePath: imgs[i],
					name: 'file',
					formData: {
						type:1,
						// token: that.loginDatas.userToken
					},
					success(res) {
						// console.log(res.data)
						var ndata = JSON.parse(res.data)
						if (ndata.code == 1) {
							console.log(imgs[i], i, ndata.data)
							that.camera_img=ndata.data
							
							
							
						} else {
							uni.showToast({
								icon: "none",
								title: "上传失败"
							})
						}
					}
				})
			},
			upimg1_h5(imgs,type, i) {
				var that = this
				 // var base64 = that.urlTobase64(imgs[i]);
				
				uni.request({
						url: imgs[i],
						method: 'GET',
						responseType: 'arraybuffer',
						success: (res) => {
								let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
								console.log('base64')
								// console.log(base64)
								base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
								// return base64
								var datas={
									file:base64,
									type:1,
								}
								var jkurl='/upload/base64Img'
								console.log('h5 upload')
								// 单个请求
								service.P_post(jkurl, datas).then(res => {
									that.btn_kg=0
									console.log(res)
									// var ndata = JSON.parse(res.data)
									if (res.code == 1) {
										console.log(imgs[i], i, res.msg)
										if(type==-1){
											
												var newimgs=that.problem.img.concat( res.msg)
												that.$set(that.problem,'img',newimgs)
												// var news1 =newimgs.length
												// if (news1 < 9 && i < imgs.length - 1) {
													i++
													if(i<imgs.length){
														that.upimg1_h5(imgs,type, i)
													}
													
												// }
											
										}else{
											var idx_img=[res.msg]
											that.$set(that.answer[type],'img',idx_img)
											
										}
										
										
										
									} else {
										uni.showToast({
											icon: "none",
											title: "上传失败"
										})
									}
								}).catch(e => {
									that.btn_kg=0
									console.log(e)
									uni.showToast({
										icon: 'none',
										title: '获取数据失败'
									})
								})
						},
						fail: (err) => {
							console.log(err)
						}
				});
				
				
			},
			getShare(){
				uni.shareWithSystem({
					type:'image',
				  // href: 'https://uniapp.dcloud.io',
				  href: '',
					imageUrl:that.camera_img,
				  success(){
				    // 分享完成，请注意此时不一定是成功分享
				  },
				  fail(){
				    // 分享失败
				  }
				})
				// _app.getShare(false, false, 2, '', '', '', that.camera_img, false, false);
			},
			pveimg(e){
				service.pveimg(e)
			},
			getimg(img){
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.minh100{
		padding: 30upx;
		background: #FAFAFA;
		/* #ifdef H5 */
		
		min-height: calc(100vh - 100upx);
		/* #endif */
	}
	.camera_box{
		width: 100%;
		height: 1057upx;
		border-radius: 4px;
		background: #fff;
	}
	.camera_box image{
		width: 100%;
		height: 100%;
	}
	.b_btns{
		width: 100%;
		height: 200upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.b_btns image{
		width: 89upx;
		height: 89upx;
		margin: 0 60upx;
	}
</style>
