<template>
	<view class="minh100">
	<htmlLoading ref="htmlLoading" @Retry='onRetry' :bj_show="false">
		<view style="position: relative;z-index: 100;">
			<view class="bg_t"></view>
			<swiper class="card-swiper" :indicator-dots="false" :circular="false" :autoplay="false" interval="5000" duration="500"
			 @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="item.id" :class="cardCur==index?'cur':''">
					<view class="swiper-item">
						<image :src="getimg(item.background)" mode="aspectFill" v-if="item.type=='image'"></image>
						<!-- <video :src="getimg(item.url)" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
						 v-if="item.type=='video'"></video> -->
						<view v-if="cardCur==index" class="lv_tip">{{item.title}}</view>
						<view v-if="cardCur==index" class="lv_tip1">
							{{item.content}}
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view style="width: 100%;height: 10upx;background: #F1F1F1;"></view>
			<view class="dj_box">
				<image class="dj_box_tit" src="/static/images/dingjia.png" mode="aspectFit"></image>
				<view class="dj_list">
					<view class="dj_list_box">
						<view class="dj_li" @tap="openType_fuc(1)" :class="openType==1?'cur':''">
							<view class="dj_li_box">
								<image class="dj_li_box_img" src="/static/images/pay_img_07.jpg" mode="aspectFill"></image>
								<view class="dj_text">
									<text style="font-size: 24upx;color: #333;">￥</text>
									<text style="font-size: 68upx;color: #333;">99</text>
									<text style="font-size: 25upx;color: #D79562;">包年</text>
								</view>
							</view>
						</view>
						<view class="dj_li"  @tap="openType_fuc(2)" :class="openType==2?'cur':''">
							<view class="dj_li_box">
								<image class="dj_li_box_img" src="/static/images/pay_img_09.jpg" mode="aspectFill"></image>
								<view class="dj_text">
									<text style="font-size: 24upx;color: #333;">￥</text>
									<text style="font-size: 68upx;color: #333;">225</text>
									<text style="font-size: 25upx;color: #D79562;">终生</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 10upx;background: #F1F1F1;"></view>
			<view v-if="platform !='ios'" class="pay_tit">选择支付方式</view>
			<view v-if="platform !='ios'" class="buy_list">
				<view class="buy_li" @tap="pay_type=1">
					<image class="buy_li_img" :src="getimg('/static/images/zfbpay.png')" mode="aspectFit"></image>
					<view class="buy_name">支付宝</view>
					<view class="buy_btn" :class="pay_type==1?'cur':''"></view>
				</view>
				<view class="buy_li" @tap="pay_type=2">
					<image class="buy_li_img" :src="getimg('/static/images/wxpay.png')" mode="aspectFit"></image>
					<view class="buy_name">微信</view>
					<view class="buy_btn" :class="pay_type==2?'cur':''"></view>
				</view>
			</view>
			<view style="width: 100%;height: 10upx;background: #F1F1F1;"></view>
			<view class="pay_sm">
				<view class="buy_smtit">购买说明</view>
				团队可以选择订阅以利用新功能。团队负责人帐户是唯一需要升级的帐户。
				一般团队成员无需升级。他们可以继续免费使用该应用程序。
				创建团队并加入团队后，添加的功能将在其应用程序上可用。
			</view>
			<view style="width: 100%;height: 10upx;background: #F1F1F1;"></view>
			<view class="pay_xz_li" @tap="read_type=!read_type">
				<view class="pay_xz" :class="read_type?'cur':''">
					<text class="iconfont iconduigou"></text>
				</view>我已阅读<text @tap="jump" data-url="/pagesA/about/about?type=fwsm">《服务声明》</text>
			</view>
			<view class="set_btn"  @tap="pay">立即创建</view>
		</view>
		</htmlLoading>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
	var productId = 198802137211
	var productIds = ['198802137211']
	export default {
		data() {
			return {
				datas: '',
				htmlReset: -1,
				myvip: 0,
				cardCur: 0,
				openType:1,
				pay_type:1,
				read_type:false,
				
				
				iapChannel: null,
				loading: false,
				disabled: true,
				
				no_id:'', 
				
				zfxy:'',
				swiperList: [],

			}
		},
		computed: {
			...mapState(['platform','hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
			
		},
		onLoad(option) {
			that = this
			if(that.platform =='ios'){
				that.pay_type==3
			}else{
				that.pay_type==1
			}
			that.onRetry()
			// that.myvip=that.loginDatas.user_grade_id
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
			console.log(that.platform)
			var zfxy = uni.getStorageSync('zfxy')
			
			// if (option.token) {
			// 	that.token = option.token
			// 	that.account = option.account
			// 	that.password = option.password
			// }
			// #ifdef APP-PLUS
			plus.payment.getChannels((channels) => {
				console.log("获取到channel" + JSON.stringify(channels))
				for (var i in channels) {
					var channel = channels[i];
					if (channel.id === 'appleiap') {
						that.iapChannel = channel;
						that.requestOrder();
					}
				}
				if (!that.iapChannel) {
					that.errorMsg()
				}
			}, (error) => {
				that.errorMsg()
			});
			// #endif
			// that.getpay()
		},
		methods: {
			...mapMutations(['login', 'logindata', 'logout', 'setplatform']),
			openType_fuc(num){
				that.openType=num
			},
			onRetry(){
				var data = {
					token:that.$store.state.loginDatas.token
				}
				 			
				 //selectSaraylDetailByUserCard
				 var jkurl = '/minapp/team-privacy'
				
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
				 			
						that.swiperList=datas
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
			getpay() {
				var that = this
				var data = {
					keyword: 'vip,applePay'
				}
				
				//selectSaraylDetailByUserCard
				var jkurl = '/api/info/list'
				uni.showLoading({
					title: '正在获取数据'
				})
				service.get(jkurl, data,
					function(res) {
			
						if (res.data.code == 1) {
							var datas = res.data.data
							// console.log(typeof datas)
			
							if (typeof datas == 'string') {
								datas = JSON.parse(datas)
							}
							console.log(datas)
							that.datas = datas
			
			
						} else {
							if (res.data.msg) {
								uni.showToast({
									icon: 'none',
									title: res.data.msg
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: '操作失败'
								})
							}
						}
					},
					function(err) {
			
						if (err.data.msg) {
							uni.showToast({
								icon: 'none',
								title: err.data.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '操作失败'
							})
						}
					}
				)
			},
			
			pay() {
				var that = this
				if (that.btnkg == 1) {
					return
				} else {
					that.btnkg = 1
				}
				if(!that.read_type){
					uni.showToast({
						icon:'none',
						title:'请先阅读服务声明'
					})
					that.btnkg = 0
					return
				}
				// uni.navigateTo({
				// 	url:'/pagesA/team_user_add/team_user_add'
				// })
				// return
				/*if(that.pay_type==3){
				
					that.requestPayment_ios()
					return
				}*/
				if(that.platform =='ios'){
					// that.requestPayment_ios()
					// return
				}
				var data = {
					type: that.pay_type,
					duration:that.openType,
					// id: that.datas.vip[0].id,
					// token: that.$store.state.loginDatas.token
					token:that.$store.state.loginDatas.token,
				}
				console.log(data)
				//selectSaraylDetailByUserCard
				var jkurl = 'minapp/pay/member'
				uni.showLoading({
					title: '正在发起支付',
					mask: true
				})
			
				service.P_post(jkurl, data).then(res => {
					that.btnkg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
							
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						wx.showToast({
							title: '支付成功',
							icon: 'none',
							duration: 1000
						});
						// #ifdef MP-WEIXIN
						service.wxlogin()
						// #endif
						// #ifndef MP-WEIXIN
						service.login_tel()
						// #endif
						setTimeout(function() {
							that.btnkg = 0
							uni.navigateBack({
								delta:1
							})
						}, 1000)
						return
						if (that.pay_type == 3) {
							console.log(datas.no)
							that.no_id=datas.no
							that.requestPayment_ios()
						}
						// 支付宝
						if (that.pay_type == 2) {
							uni.requestPayment({
								provider: 'alipay',
								orderInfo: datas, //微信、支付宝订单数据
								success: function(res) {
									console.log('success:' + JSON.stringify(res));
									wx.showToast({
										title: '支付成功',
										icon: 'none',
										duration: 1000
									});
									setTimeout(function() {
										that.btnkg = 0
										// #ifdef MP-WEIXIN
										service.wxlogin()
										// #endif
										// #ifndef MP-WEIXIN
										service.login_tel()
										// #endif
									}, 1000)
								},
								fail: function(err) {
									that.btnkg = 0
									console.log('fail:' + JSON.stringify(err));
									uni.showModal({
										content: "支付失败",
										showCancel: false
									})
								}
							});
						}
						//微信
						if (that.pay_type == 1) {
							uni.requestPayment({
								provider: 'wxpay',
								orderInfo: datas, //微信、支付宝订单数据
								success: function(res) {
									console.log('success:' + JSON.stringify(res));
									wx.showToast({
										title: '支付成功',
										icon: 'none',
										duration: 1000
									});
									setTimeout(function() {
										that.btnkg = 0
										// #ifdef MP-WEIXIN
										service.wxlogin()
										// #endif
										// #ifndef MP-WEIXIN
										service.login_tel()
										// #endif
									}, 1000)
								},
								fail: function(err) {
									that.btnkg = 0
									console.log('fail:' + JSON.stringify(err));
									uni.showModal({
										content: "支付失败",
										showCancel: false
									})
								}
							});
						}
									
						
							
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
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '操作异常'
					})
				})
				
			},
			
			iap_fuc(paymsg) {
				var that = this
				const data = {
					receipt_data: paymsg,
					no: that.no_id
				}
				uni.showLoading({
					title: '正在进行校验'
				})
				var jkurl = '/api/order/checkApplePay'
				console.log('开始校验')
				service.post(jkurl, data,
					function(res) {
						uni.hideLoading()
						that.btnkg = 0
						if (res.data.code == 1) {
							wx.showToast({
								title: '支付成功',
								icon: 'none',
								duration: 1000
							});
							setTimeout(function() {
								that.btnkg = 0
								that.bindLogin()
							}, 1000)
						}
					},
					function(err) {
						uni.hideLoading()
						that.btnkg = 0
						if (err.data.msg) {
							uni.showToast({
								icon: 'none',
								title: err.data.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '操作失败'
							})
						}
					}
				)
			
			},
			requestOrder() {
				var that = this
				uni.showLoading({
					title: '检测支付环境...'
				})
				console.log('productId===>' + productId)
				console.log('productIds===>' + productIds)
				that.iapChannel.requestOrder(productIds, (orderList) => { //必须调用此方法才能进行 iap 支付
					this.disabled = false;
			
					console.log('requestOrder success666: ' + JSON.stringify(orderList));
					uni.hideLoading();
					// for (var index in orderList) {
					// 	var OrderItem = orderList[index];
					// 	console.log("Title:" + OrderItem.title + "Price:" + OrderItem.price + "Description:" + OrderItem.description +
					// 		"ProductID:" + OrderItem.productid);
					// }
				}, (e) => {
					console.log('requestOrder failed: ' + JSON.stringify(e));
					uni.showModal({
						content: JSON.stringify(e),
						showCancel: false
					})
					uni.hideLoading();
					this.errorMsg();
				});
			},
			requestPayment_ios() {
				var that = this
				// console.log('正在进行苹果支付')
				uni.showLoading({
					title: '正在进行支付,请勿进行其他操作'
				})
				// return
				// uni.showToast({
				// 	icon: 'none',
				// 	title: '正在发起支付'
				// });
				uni.requestPayment({
					provider: 'appleiap',
					orderInfo: {
						productid: productIds[0]
					},
					success: (e) => {
						uni.hideLoading()
						console.log(e)
						that.btnkg = 0
						console.log(JSON.stringify(e))
						console.log('苹果支付成功')
						that.iap_fuc(JSON.stringify(e))
						// uni.showModal({
						// 	content: "感谢您的赞助" + JSON.stringify(e),
						// 	showCancel: false
						// })
					},
					fail: (e) => {
						console.log(JSON.stringify(e))
						that.btnkg = 0
						uni.hideLoading()
						uni.showModal({
							icon: 'none',
							content: "支付失败,原因为: " + e.errMsg,
							showCancel: false
						})
					},
					complete: (e) => {
						console.log(e)
						console.log("payment结束")
						that.loading = false;
					}
				})
			
			},
			applePriceChange(e) {
				productId = e.detail.value;
			},
			errorMsg() {
				// uni.showModal({
				// 	content: "暂不支持苹果 iap 支付",
				// 	showCancel: false
				// })
				console.log('暂不支持苹果 iap 支付')
			},
			
			
			
			cardSwiper(e) {
				this.cardCur = e.detail.current
				console.log(e.detail.current)
			},
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
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
		padding-bottom: 50upx;
	}
	.bg_t {
		position: absolute;
		background: #3C77F1;
		width: 100%;
		height: 200upx;
		z-index: 1;
	}

	.card-swiper {
		position: relative;
		z-index: 10;
		height: 370upx !important;
	}

	.swiper-item {
		transition: all .2s;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		background: #fff;
	}

	.lv_tip {
		position: absolute;
		top: 90upx;
		left: 40upx;
		font-size: 38upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #AB6834;
	}

	.lv_tip1 {
		position: absolute;
		top: 160upx;
		left: 40upx;
		right: 50upx;
		font-size: 24upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #282828;
		height: 90upx;
		line-height: 30upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.dj_box {
		padding-bottom: 30upx;
	}

	.dj_box_tit {
		display: block;
		margin: 0 auto;
		width: 250upx;
		height: 100upx;
	}

	.dj_list {
		width: 100%;
		padding: 0 15upx;
	}

	.dj_list_box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.dj_li {
		width: 50%;
		height: 178upx;
		padding: 15upx;
	}
	.dj_li_box {
		width: 100%;
		height: 100%;
		position: relative;
		box-shadow: 0px 0px 6upx 0px rgba(0, 0, 0, 0.2);
		border-radius: 4upx;
		/* border: 2px solid rgba(0,0,0,0); */
	}

	.dj_li.cur .dj_li_box{
		
		border: 2px solid #EFB78B;
	}
	.dj_li_box_img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.dj_text {
		position: relative;
		z-index: 10;
		display: flex;
		align-items: baseline;
		top: 50%;
		transform: translateY(-50%);
		padding-left: 30upx;

	}

	.pay_tit {
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
	}
	.buy_list{
		width: 100%;
		padding: 0 30upx;
	}
	.buy_li{
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		font-size: 30upx;
		color: #333;
	}
	.pay_sm{
		width: 100%;
		padding: 20upx 30upx;
		font-size: 26upx;color: #666;
	}
	.buy_smtit{
		font-size: 30upx;
		color: #666;
		margin-bottom: 28upx;
	}
	.buy_li_img{
		width: 56upx;
		height: 56upx;
		margin-right: 34upx;
	}
	.buy_name{
		flex: 1;
	}
	.buy_btn{
		width: 32upx;
		height: 32upx;
		background: #FFFFFF;
		border: 1px solid #FFBC5C;
		border-radius: 50%;
		position: relative;
	}
	.buy_btn.cur::before{
		content: '';
		width: 22upx;
		height: 22upx;
		background: #FFBC5C;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.pay_xz_li{
		width: 100%;
		padding: 0 30upx;
		height: 150upx;
		display: flex;
		align-items: center;
	}
	.pay_xz{
		width: 32upx;
		height: 32upx;
		border: 1px solid #999999;
		border-radius: 4px;
		margin-right: 20upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.pay_xz text{
		color: #fff;
		font-size: 25upx;
	}
	.pay_xz.cur{
		border: 1px solid #007AFF;
	}
	.pay_xz.cur text{
		color: #007AFF;
	}
	.set_btn{
		font-size: 32upx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 89upx;
		background: #FFA95C;
		border-radius: 10upx;
		margin: 0 auto;
	}
</style>
