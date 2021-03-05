<template>
	<view class="minh100">
		<map class="index_map" name="map" :show-compass="false" :style="{height: mapHeight+'px'}" :enable-rotate="false"
		 :latitude="latitude" :longitude="longitude" :markers="markersArr" @markertap="markertap" :controls="mapControls"
		 @regionchange='mapChange'></map>
		<view class="bj_box">
			<image @tap="baojing_fuc" class="bj_box_img" src="../../static/images/baojing1.png" mode="aspectFit"></image>
			<view v-if="baojing" @tap="baojing_del" class="bj_main">

				<view class="bj_cnum">
					<view class="bj_cnum_1">
						<view class="bj_cnum_num">{{bj_time}}</view>
					</view>
				</view>
				<view class="bj_tip">10秒钟内触摸屏幕取消</view>
			</view>
		</view>
		<view class="map_btn_list">
			<view class="map_btn_li" @tap="shuaxin">
				<image class="map_btn_li_image" :src="getimg('/static/images/index_btn1.png')" mode="aspectFit"></image>
				<text>刷新</text>
			</view>
			<view class="map_btn_li" @tap="tk_show=true">
				<image class="map_btn_li_image" :src="getimg('/static/images/index_btn2.png')" mode="aspectFit"></image>
				<text>标记</text>
			</view>
			<view class="map_btn_li">
				<image class="map_btn_li_image" :src="getimg('/static/images/index_btn3.png')" mode="aspectFit"></image>
				<text>天气1s</text>
			</view>
			<view class="map_btn_li">
				<image class="map_btn_li_image" :src="getimg('/static/images/index_btn4.png')" mode="aspectFit"></image>
				<text>筛选</text>
			</view>
		</view>
		<!-- 标记 -->
		<view></view>
		<!-- 标记弹框 -->
		<view v-if="tk_show" class="tk_popop" @touchmove.stop.prevent='test'>
			<view class="tk_main">
				<view class="add_bj">
					<text></text>
					<view style="font-weight: bold;">添加标记</view>
					<text></text>
				</view>
				<view class="bj_type">
					<view @tap="open_tk(1)">危害</view>
					<view @tap="open_tk(2)">命令</view>
					<view @tap="open_tk(3)">受困者</view>
					<view @tap="open_tk(4)">建筑破坏</view>
					<view @tap="open_tk(5)">搜索</view>
				</view>
			</view>
			<text @tap="tk_show=false" class="iconfont iconguanbi" style="font-size: 50upx;color: #fff;"></text>
		</view>
		<!-- 危险弹框 -->
		<view v-if="tk_show1" class="tk_popop" @touchmove.stop.prevent='test'>
			<view class="tk_main">
				<image class="add_bj_icon" :src="getimg('/static/images/add_bj_icon.png')" mode="aspectFit"></image>
				<view class="notetk_tit">选择危险类型</view>
				<view class="notetk_time">{{note_time_t}}</view>
				<input class="bz_int_tk" type="text" value="" placeholder="备注" />
				<view class="bj_list_box">
					<view class="bj_list_box_li" :class="tk_show1_cur==0?'cur':''" @tap="tk_show1_cur=0">
						<image class="xz_ok" src="../../static/images/xz_ok.png" mode=""></image>
						<image class="bj_icon " src="../../static/images/huozai.png" mode="aspectFit"></image>
						<text class="bj_icon_text">火灾</text>
					</view>
					<view class="bj_list_box_li" :class="tk_show1_cur==1?'cur':''" @tap="tk_show1_cur=1">
						<image class="xz_ok" src="../../static/images/xz_ok.png" mode=""></image>
						<image class="bj_icon" src="../../static/images/dianli.png" mode="aspectFit"></image>
						<text class="bj_icon_text">电力</text>
					</view>
					<view class="bj_list_box_li" :class="tk_show1_cur==2?'cur':''" @tap="tk_show1_cur=2">
						<image class="xz_ok" src="../../static/images/xz_ok.png" mode=""></image>
						<image class="bj_icon" src="../../static/images/luzhang.png" mode="aspectFit"></image>
						<text class="bj_icon_text">路障</text>
					</view>
					<view class="bj_list_box_li" :class="tk_show1_cur==3?'cur':''" @tap="tk_show1_cur=3">
						<image class="xz_ok" src="../../static/images/xz_ok.png" mode=""></image>
						<image class="bj_icon" src="../../static/images/chehuo.png" mode="aspectFit"></image>
						<text class="bj_icon_text">车祸</text>
					</view>
					<view class="bj_list_box_li" :class="tk_show1_cur==4?'cur':''" @tap="tk_show1_cur=4">
						<image class="xz_ok" src="../../static/images/xz_ok.png" mode=""></image>
						<image class="bj_icon" src="../../static/images/weixianwu.png" mode="aspectFit"></image>
						<text class="bj_icon_text">危化品</text>
					</view>
					<view class="bj_list_box_li" :class="tk_show1_cur==5?'cur':''" @tap="tk_show1_cur=5">
						<image class="xz_ok" src="../../static/images/xz_ok.png" mode=""></image>
						<image class="bj_icon" src="../../static/images/shuizai.png" mode="aspectFit"></image>
						<text class="bj_icon_text">水灾</text>
					</view>
				</view>
				<view class="tkset_btn" @tap="jump_fuc" data-url="/pages/map_dw/map_dw?type=fwsm">设置位置</view>
			</view>
			<text @tap="tk_show1=false" class="iconfont iconguanbi" style="font-size: 50upx;color: #fff;"></text>
		</view>
		
		
		<!-- 标记详情 -->
		<view v-if="tk_show_bjxq" class="tk_popop" @touchmove.stop.prevent='test'>
			<view class="tk_main">
				<view class="bj_user_msg">
					<image class="bj_user_tx" src="../../static/images/tx_m2.jpg" mode="aspectFill"></image>
					<view class="flex_1">
						<view class="bj_user_name">张若昀</view>
						<view class="bj_user_tel">17869523520</view>
					</view>
				</view>
			</view>
			<!-- <text @click="tk_show=false" class="iconfont iconguanbi" style="font-size: 50upx;color: #fff;"></text> -->
			<text @click="tk_show_bjxq=false" class="iconfont " style="font-size: 50px;color: #fff;">&#xe621;</text>
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
	var that, mapContext, mapEndloading;
	var djs_fuc
	var that
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				mapWidth: 0, //地图区域宽度
				mapHeight: 0, //地图区域高度
				centerTop: 0, //中心图片坐标
				centerLeft: 0, //中心图片坐标
				translateY: 165,
				markersArr: [{
					id:1,
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '/static/images/huozai.png'
				}, {
					id:12,
					latitude: 39.919,
					longitude: 116.39742,
					iconPath: '/static/images/chehuo.png'
				}], //覆盖物
				mapControls: [],
				mapControls1: [{
					id: "1",
					position: {
						left: uni.getSystemInfoSync().windowWidth / 2 - 15,
						top: (uni.getSystemInfoSync().windowHeight - 45 - uni.getSystemInfoSync().statusBarHeight) / 2 - 49,
						width: 30,
						height: 49
					},
					iconPath: "/static/images/zuobiao.png",
					clickable: false
				}], //地图中的控件
				bj_time: 10,
				baojing: false,




				tk_show: false,
				tk_show1:false,
				tk_show1_num:0,
				note_time_t:'',
				tk_show1_cur:-1,
				
				
				tk_show_bjxq:false, //标记详情
				bj_id:-1,    //标记id
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
		},
		onLoad() {
			// return
			that = this
			// #ifdef APP-PLUS
			this.getLocation();
			// #endif
			/*const innerAudioContext = uni.createInnerAudioContext();
			innerAudioContext.autoplay = true;
			innerAudioContext.src = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
			innerAudioContext.onPlay(() => {
			  console.log('开始播放');
			});
			innerAudioContext.onError((res) => {
			  console.log(res.errMsg);
			  console.log(res.errCode);
			});*/
		},
		mounted() {
			that.mapWidth = 750
			that.sHeight = uni.getSystemInfoSync().statusBarHeight;
			that.mapHeight = (uni.getSystemInfoSync().windowHeight * 2 - uni.getSystemInfoSync().statusBarHeight);
			console.log(that.mapHeight)
			console.log(uni.getSystemInfoSync().screenHeight)
		},
		methods: {
			...mapMutations(['setAddress']),
			test() {},
			open_tk(num){
				that.tk_show=false
				that.tk_show1=true
				that.tk_show1_num=num
				
				var now_time = new Date();
				var now_year = now_time.getFullYear();
				var now_month = now_time.getMonth() + 1;
				var now_date = now_time.getDate();
				var hour = now_time.getHours();
				var minute = now_time.getMinutes();
				if(now_month<10){
					now_month='0'+now_month*1
				}
				if(now_date<10){
					now_date='0'+now_date*1
				}
				if(hour<10){
					hour='0'+hour*1
				}
				if(minute<10){
					minute='0'+minute*1
				}
				that.note_time_t=now_year+'-'+now_month+'-'+now_date+' '+hour+':'+minute
			},
			baojing_fuc() {
				var that = this
				this.baojing = true
				that.bj_time = 10
				djs_fuc = setInterval(function() {
					if (that.bj_time == 0) {
						// uni.showToast({
						// 	icon:'none',
						// 	title:'警报操作'
						// })
						console.log(0)
						clearInterval(djs_fuc)
						that.bj_time = '!'
					} else {
						that.bj_time--
					}
					// console.log(that.djs())
				}, 1000);
			},
			baojing_del() {
				var that = this
				clearInterval(djs_fuc)
				this.bj_time = 10
				this.baojing = false
			},
			shuaxin() {
				uni.showToast({
					icon: 'none',
					title: '正在刷新'
				})
			},
			//地图点击事件
			markertap(e) {
				var _id = e.detail.markerId,
					_index;
					that.tk_show_bjxq=true
					that.bj_id=_id
					return
				var _list = that.markersArr;
				for (var i = 0; i < _list.length; i++) {
					if (_list[i].id == _id) {
						_index = i;
						that.current = i;
						that.openAnimation();
						break;
					}
				};
			},
			//移动地图结束
			mapChange(e) {
				console.log(e)
				if (e) {
					return
				}

				if (mapEndloading) {
					return;
				}
				mapEndloading = true;
				setTimeout(() => { //防抖
					mapEndloading = false;
				}, 500);
				if (e.detail.type == 'end' || e.type == 'end') {
					//中心区域左边
					mapContext.getCenterLocation({
						success(res) {
							that.mapEnd(res);
						},
						fail(err) {
							console.log(err)
						}
					});
				}
				return;
				if (uni.getSystemInfoSync().platform == 'ios') {
					if (e.detail.type == 'end') {
						//中心区域左边
						mapContext.getCenterLocation({
							success(res) {
								that.mapEnd(res);
							},
							fail(err) {
								console.log(err)
							}
						});
					}
				} else {
					//地图移动结束
					console.log(e)
					if (e.type == 'end') {
						//中心区域左边
						mapContext.getCenterLocation({
							success(res) {

								that.mapEnd(res);
							},
							fail(err) {
								console.log(err)
							}
						});
						//缩放视野展示所有经纬度
						// mapContext.getCenterLocation({
						// 	success(res) {
						// 		console.log(res);
						// 	},
						// 	fail(err) {
						// 		console.log(err)
						// 	}
						// })
						//获取当前地图的视野范围
						mapContext.getRegion({
							success(res) {
								// console.log(res);
							},
							fail(err) {
								console.log(err)
							}
						})
						//获取当前地图的缩放级别
						mapContext.getScale({
							success(res) {
								// console.log(res);
							},
							fail(err) {
								console.log(err)
							}
						})
					}
				}


			},
			getList() {},
			//地图移动
			mapEnd(res) {
				console.log('加载数据')
				if (res) {
					that.longitude = res.longitude;
					that.latitude = res.latitude;
				}

				//原数据
				that.list = [];
				that.pageIndex = 1;
				that.chaceList = [];
				// 覆盖物数据
				that.markersArr = [];
				that.originalList = [];
				that.getList();

			},
			getLocation(type) {
				uni.getLocation({
					// type: 'wgs84',
					type: 'gcj02',
					success: function(res) {
						that.longitude = res.longitude;
						that.latitude = res.latitude;
						that.pageIndex = 1;
						// if (type != 'back') {

						that.setAddress(res);
						setTimeout(() => {
							that.getList();
						}, 1000)
						// }

					},
					fail(err) {
						if (uni.getSystemInfoSync().platform == 'ios') {
							if (!permision.judgeIosPermission('location')) {
								uni.showModal({
									title: '提示',
									content: '需要打开定位权限',
									success: function(res) {
										if (res.confirm) {
											that.isToSetting = true;
											permision.gotoAppPermissionSetting();
										}
									}
								});
							}
						} else {
							that.requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION');
						}

					}
				});
			},
			async requestAndroidPermission(permisionID) {
				var result = await permision.requestAndroidPermission(permisionID)
				var strStatus
				if (result == 1) {
					strStatus = "已获得授权"
				} else if (result == 0) {
					strStatus = "未获得授权"
				} else {
					strStatus = "被永久拒绝权限"
				}
				uni.showModal({
					title: '提示',
					content: '需要打开定位权限',
					success: function(res) {
						if (res.confirm) {
							that.isToSetting = true;
							permision.gotoAppPermissionSetting();
						}
					}
				});
			},
			getimg(img) {
				return service.getimg(img)
			},
			jump_fuc(e){
				if(that.tk_show1_cur==-1){
					uni.showToast({
						icon:'none',
						title:'请选择类型'
					})
					return
				}
				uni.navigateTo({
					url:'/pages/map_dw/map_dw?tk_show1_cur='+that.tk_show1_cur+'&tk_show1_num='+that.tk_show1_num
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
		}
	}
</script>

<style scoped>
	.minh100 {
		width: 750px;
		/* #ifdef H5 */
		min-height: calc(100vh - 100upx);
		/* #endif */
	}

	.index_map {
		/* position: fixed; */

		width: 750px;
		/*  #ifndef APP-PLUS-NVUE  */
		height: calc(100vh - 246upx);
		/*  #endif  */

		/* #ifdef H5 */
		max-width: 100vw;
		max-height: 100vh;
		height: calc(100vh - 246upx - 100upx);
		/* #endif */
	}

	.map_btn_list {
		position: fixed;
		bottom: 0;
		width: 750px;
		/* #ifdef H5 */

		max-width: 100vw;
		bottom: 100upx;
		/* #endif */
		height: 246upx;
		background: #FFFFFF;
		box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.06);
		border-radius: 15upx 15upx 0 0;
		/*  #ifndef APP-PLUS-NVUE  */
		display: flex;
		/*  #endif  */
		align-items: center;
		justify-content: space-around;
		flex-direction: row;
	}

	.map_btn_li {
		/*  #ifndef APP-PLUS-NVUE  */
		display: flex;
		/*  #endif  */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		color: #555;
	}

	.map_btn_li_image {
		width: 95upx;
		height: 95upx;
		border-radius: 50%;
		margin-bottom: 20upx;
	}

	.bj_box {
		position: fixed;
		top: 130upx;
		right: 30upx;
		z-index: 999998;
		width: 114upx;
		height: 114upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 21upx 0px rgba(0, 0, 0, 0.16);
		border-radius: 50%;
	}

	.bj_box_img {
		width: 114upx;
		height: 114upx;
	}

	.bj_main {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, .8);
		z-index: 999999;
		/*  #ifndef APP-PLUS-NVUE  */
		display: flex;
		/*  #endif  */
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.bj_cnum {
		width: 508upx;
		height: 508upx;
		background: #FF0000;
		border-radius: 50%;
		padding: 36upx;
		margin-bottom: 50upx;
	}

	.bj_cnum_1 {
		width: 100%;
		height: 100%;
		background: #FF0000;
		border: 4upx solid #FFFFFF;
		border-radius: 50%;
		/*  #ifndef APP-PLUS-NVUE  */
		display: flex;
		/*  #endif  */
		align-items: center;
		justify-content: center;
	}

	.bj_cnum_num {
		font-size: 300upx;
		font-family: DIN;
		font-weight: 500;
		color: #FFFFFF;
	}

	.bj_tip {
		font-size: 30upx;
		color: #fff;
	}


	.tk_popop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999999999;
		background: rgba(0, 0, 0, .5);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tk_main {
		margin-bottom: 30upx;
		width: 505upx;
		min-height: 494upx;
		max-height: 80%;
		overflow-y: scroll;
		background: #FFFFFF;
		border-radius: 10upx;
		padding: 30upx 40upx;
		/* display: flex;
		flex-wrap: wrap; */

	}

	.add_bj {
		width: 100%;
		font-size: 34upx;
		color: #333;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 50upx;
	}

	.add_bj text {
		width: 60upx;
		height: 1px;
		background: #D8D8D8;
		margin: 0 10upx;
	}
	.bj_type{
		width: 100%;
		padding: 0 10upx;
	}
	.bj_type view{
		width: 100%;
		height: 72upx;
		background: #3C77F1;
		box-shadow: 1px 3px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 36upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		color: #fff;
		margin-bottom: 33upx;
	}
	
	.notetk_tit{
		font-size: 34upx;
		color: #333;
		text-align: center;
		font-weight: bold;
	}
	.notetk_time{
		font-size: 26upx;
		color: #333;
		margin-bottom: 30upx;
		text-align: center;
	}
	.add_bj_icon{
		display: block;
		margin: 0 auto 10upx;
		width: 289upx;
		height: 218upx;
	}
	.bz_int_tk{
		font-size: 26upx;
		width: 100%;
		height: 60upx;
		border-bottom: 1px solid #DDDDDD;
	}
	.bj_list_box{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-top: 30upx;
		padding-bottom: 20upx;
	}
	.bj_list_box_li{
		width: 134upx;
		height: 134upx;
		
		border-radius: 4upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-bottom: 30upx;
		padding: 10upx;
	}
	.bj_list_box_li.cur{
		background: #EFF4FF;
		border: 1px solid #3C77F1;
		position: relative;
	}
	.xz_ok{
		width: 0;
		height: 0;
	}
	.bj_list_box_li.cur .xz_ok{
		position: absolute;
		top: -15upx;
		right: -15upx;
		width: 31upx;
		height: 31upx;
	}
	.bj_icon{
		width: 55upx;
		height: 68upx;
		margin-bottom: 20upx;
	}
	.bj_icon_icon{
		font-size: 26upx;
		color: #333;
	}
	.tkset_btn{
		font-size: 28upx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 409upx;
		height: 72upx;
		background: #3C77F1;
		box-shadow: 1px 3px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 36upx;
	}
	.bj_user_msg{
		display: flex;
		flex-direction: row;
		width: 425px;
	}
	.bj_user_tx{
		width: 84upx;
		height: 84upx;
		border-radius: 50%;
		margin-right: 23upx;
	}
	.bj_user_name{
		font-size: 36upx;
		color: #333;
		font-weight: bold;
	}
	.bj_user_tel{
		font-size: 26upx;
		color: #333;
	}
</style>
