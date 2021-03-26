<template>
	<view class="minh100">
		<image class="my_bg" :src="getimg('/static/images/mybg_01.png')" mode=""></image>
		<view class="my_box ">
			<view class="head_box1" :style="style"></view>
			<view class="head_box" :class="{'cur_H':PageScroll>10}" :style="style">
				<image class="head_box_img" :src="getimg('/static/images/mybg_01.png')" mode="aspectFill"></image>
				<text @tap="back" class="iconfont iconprev header_l"></text>
				<view class="my_tit_box" :style="style1">
					个人中心
					<!-- 万屋智能 -->
				</view>

				<text v-if="login_type==0" @tap="login_type=1" class=" header_r">去登录</text>
			</view>
			<view class="login_top">
				欢迎您使用救生圈
			</view>
			<view class="login_box">
				<view class="login_li">
					<view class="login_icon">
						<text class="iconfont iconshouji"></text>
					</view>
					<input class="login_input" type="number" placeholder="请输入手机号" v-model="tel">
				</view>
				<view v-if="login_type!=1" class="login_li">
					<view class="login_icon">
						<text class="iconfont iconmima"></text>
					</view>
					<input class="login_input" type="text" placeholder="请输入验证号" v-model="code">
					<view v-if="yzm_type==0" class="getyzm" @tap="getCode">获取验证码</view>
					<view v-if="yzm_type==1" class="getyzm">{{yztime}}s</view>
				</view>
				<view class="login_li">
					<view class="login_icon">
						<text class="iconfont iconmima"></text>
					</view>
					<input class="login_input" type="password" placeholder="请输入密码" v-model="pwd">
				</view>
				<view v-if="login_type!=1" class="login_li">
					<view class="login_icon">
						<text class="iconfont iconmima"></text>
					</view>
					<input class="login_input" type="password" placeholder="请再次输入密码" v-model="pwd1">
				</view>
				<view v-if="login_type==1" class="login_btn" @tap="login_fuc">登录</view>
				<view v-if="login_type==0" class="login_btn" @tap="reg_fuc">注册</view>
				<view v-if="login_type==-1" class="login_btn" @tap="reg_fuc">确定</view>
				<view v-if="login_type!=0" class="login_cz dis_flex aic ju_b">
					<view @tap="login_type=0" style="color: #3C77F1;">立即注册</view>
					<view v-if="login_type==1" @tap="login_type=-1">忘记密码？</view>
					<view v-if="login_type==-1" @tap="login_type=1">去登录</view>
				</view>
				<view class="login_yx" @tap="jump" data-url="/pagesA/about/about?type=fwsm">登录即代表您同意《救生圈服务声明》</view>
				<view v-if="yhxy" class="yhxy_box">
					<view class="dyxy_box">
						<view class="dyxy_tit">救生圈服务声明</view>
						<scroll-view class="dyxy_inr" v-html="datas">
							<!-- {{datas.body}} -->
							<!-- <view v-if="datas" class="xieyi_main" v-html="datas.body"></view> -->
						</scroll-view>
						<!-- <view class="dis_flex ydxy_btn" :class="xdxy_type==1?'cur':''" @tap="xdxy_type_fuc"><view class="d1 dis_flex"><image  v-if="xdxy_type==1" src="../../static/images/duigou.png"></image></view>我已阅读并同意该协议</view> -->
						<view class="dis_flex">
							<view class="next_btn next_btn_cal dis_flex" @tap="xy_off">拒绝</view>
							<view class="next_btn dis_flex" @tap="xy_on">同意</view>
						</view>
					</view>
				</view>
			</view>
		</view>
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
				tel: '',
				code: '',
				yzm_type: 0,
				yztime: 60,
				pwd: '',
				pwd1: '',
				yhxy: true,
				datas: '救生圈服务声明救生圈服务声明救生圈服务声明救生圈服务声明救生圈服务声明救生圈服务声明救生圈服务声明救生圈服务声明',
				login_type: 1
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
		onLoad() {
			that = this
			var yhxy = uni.getStorageSync('yhxy')
			this.getdata()
			if (yhxy) {
				this.yhxy = false
			}
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
			...mapMutations(['login', 'logindata']),
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			xy_on() {
				this.yhxy = false
				uni.setStorageSync('yhxy', 'true')
			},
			xy_off() {
				if (plus.os.name.toLowerCase() === 'android') {
					plus.runtime.quit() // Android
				} else {
					plus.ios.import("UIApplication").sharedApplication().performSelector("exit"); // IOS
				}
			},
			getCode() {
				let that = this

				if (that.tel == '' || !(/^1\d{10}$/.test(that.tel))) {
					wx.showToast({
						icon: 'none',
						title: '手机号有误'
					})
					return
				}
				if (that.btnkg == 1) {
					return
				} else {
					that.btnkg = 1
				}
				uni.showToast({
					icon: 'none',
					title: '发送成功'
				})
				that.codetime()
				that.btnkg = 0
				return
				var jkurl = '/api/login/register'
				var data = {
					phone: that.account
				}
				service.post(jkurl, data,
					function(res) {
						that.btnkg = 0
						if (res.data.code == 1) {

							uni.showToast({
								icon: 'none',
								title: '发送成功'
							})
							console.log(res) 
							that.codetime()

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
			codetime() {
				let that = this
				let time = 60
				let st = setInterval(function() {
					if (time == 0) {
						that.yzm_type = 0
						clearInterval(st);
					} else {
						let news = time--;
						// console.log(news)
						that.yzm_type = 1
						that.yztime = news

					}
				}, 1000);
			},

			reg_fuc() {
				if (that.tel == '' || !(/^1\d{10}$/.test(that.tel))) {
					wx.showToast({
						icon: 'none',
						title: '手机号有误'
					})
					return
				}

				if (!that.code) {
					uni.showToast({
						icon: 'none',
						title: '请输入验证号'
					});
					return;
				}
				if (!that.pwd) {
					uni.showToast({
						icon: 'none',
						title: '请输入密码'
					});
					return;
				}
				if (!that.pwd1) {
					uni.showToast({
						icon: 'none',
						title: '请再次输入密码'
					});
					return;
				}
				if (that.pwd != that.pwd1) {
					uni.showToast({
						icon: 'none',
						title: '两次密码不一致'
					});
					return;
				}

				var data = {}
				var jkurl=""
				
				//忘记密码
				if(that.login_type==-1){
					data = {
						username: that.tel,
						pcode: that.code,
						password: that.pwd,
						rpassword: that.pwd1
					}
					jkurl="/minapp/register"
				}
				//注册
				if(that.login_type==0){
					data = {
						username: that.tel,
						pcode: that.code,
						password: that.pwd,
						rpassword: that.pwd1
					}
					jkurl="/minapp/register"
				}
				console.log(data)
				service.P_post(jkurl, data).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
				
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
				
						if (that.login_type == 0) {
							uni.showToast({
								icon: 'none',
								title: '注册成功'
							});
						}
						if (that.login_type == -1) {
							uni.showToast({
								icon: 'none',
								title: '修改成功'
							});
						}
						setTimeout(()=>{
							that.login_type=1
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
						title: '获取数据失败'
					})
				})
				
			},
			login_fuc() {
				if (that.tel == '' || !(/^1\d{10}$/.test(that.tel))) {
					wx.showToast({
						icon: 'none',
						title: '手机号有误'
					})
					return
				}

				if (!that.pwd) {
					uni.showToast({
						icon: 'none',
						title: '请输入密码'
					});
					return;
				}

				const data = {
					username: that.tel,
					password: that.pwd
				}
				console.log(data)
				var jkurl='/minapp/login'
				uni.showLoading({
					mask:true,
					title:'正在登录'
				})
				service.P_post(jkurl, data).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
				
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						uni.showToast({
							icon: 'none',
							title: '登录成功'
						});
						uni.setStorageSync('tel', that.tel)
						uni.setStorageSync('password', that.pwd)
						uni.setStorageSync('token', datas.token)
						uni.setStorageSync('loginmsg', datas)
						that.logindata(datas)
						that.login(datas.name)
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
							// uni.reLaunch({
							// 	url:'/pages/map/map'
							// })
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
						title: '获取数据失败'
					})
				})
				
			},
			getdata() {

				///api/info/list
				var that = this
				var data = {
					type:'state'
				}

				//selectSaraylDetailByUserCard
				var jkurl = '/minapp/agreement'
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

						that.datas = datas.content
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

	.head_box1 {
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
		font-size: 30upx;
		color: #3C77F1;
		position: absolute;
		right: 30upx;
		z-index: 9999;
		top: 50%;
		transform: translateY(-50%);
	}

	.header_l {
		font-size: 40upx;
		color: #000;
		position: absolute;
		left: 10upx;
		z-index: 9999;
		top: 50%;
		transform: translateY(-50%);
	}

	.login_top {
		font-size: 50upx;
		color: #333;
		width: 100%;
		padding: 180upx 30upx 100upx;
		font-weight: bold;
		margin-bottom: 150upx;
	}

	.login_box {
		width: 100%;
		padding: 0 40upx 40upx;
	}

	.login_li {
		width: 100%;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
		height: 90upx;
		margin-top: 10upx;
	}

	.login_icon {
		width: 50upx;
		margin-right: 30upx;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login_input {
		flex: 1;
		font-size: 30upx;
	}

	.login_btn {
		width: 100%;
		height: 88upx;
		background: #3C77F1;
		border-radius: 44upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #fff;
		margin-top: 60upx;
		margin-bottom: 40upx;
	}

	.login_cz {
		width: 100%;
		font-size: 26upx;
		color: #777A89;
		margin-bottom: 200upx;
	}

	.login_yx {

		font-size: 26upx;
		color: #777A89;
		padding-bottom: 20upx;
		text-align: center;
		width: 100%;
	}












	.yhxy_box {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .5);
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.yhxy_box_xy {
		color: #007aff;
	}

	.dyxy_box {
		width: 80%;
		/* min-height: 80%; */
		background-color: #fff;
		border-radius: 18upx;
		padding: 30upx 44upx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.dyxy_tit {
		text-align: center;
		font-size: 36upx;
		color: #000;
		padding-bottom: 20upx;
		border-bottom: 1px solid #ddd;
		margin-bottom: 26upx;
	}

	.dyxy_inr {
		font-size: 28upx;
		color: #666;
		min-height: 400upx;
		max-height: 800upx;
		overflow: scroll;
	}

	.next_btn {
		margin: 20px 10px 5px;
		font-size: 28upx;
		color: #fff;
		flex: 1;
		height: 80upx;
		background: #3C77F1;
		border-radius: 18upx;
		align-items: center;
		justify-content: center;
	}

	.next_btn_cal {
		background: #ddd;
	}

	.getyzm {
		width: 164upx;
		height: 47upx;
		background: #3C77F1;
		border-radius: 24upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 26upx;
	}
</style>
