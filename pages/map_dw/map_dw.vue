<template>
	<view class="minh100">
		<map class="index_map" name="map1" ref="map1" :show-compass="false" :style="{height: mapHeight+'px'}" :enable-rotate="false"
		 :latitude="latitude" :longitude="longitude" :markers="markersArr" @markertap="markertap" :controls="mapControls"
		 @regionchange='mapChange'>
		 <view class="map_search_box"></view>
		 <view class="map_search_btn">保存标记</view>
		</map>
			
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
	var that, mapContext, mapEndloading;
	var djs_fuc
	var that
	var dw_time
	export default {
		data() {
			return {
				latitude: 41.638883,
				longitude: 123.499625,
				mapWidth: 0, //地图区域宽度
				mapHeight: 0, //地图区域高度
				centerTop: 0, //中心图片坐标
				centerLeft: 0, //中心图片坐标
				translateY: 165,
				markersArr: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '/static/images/huozai.png'
				}, {
					latitude: 139.90,
					longitude: 116.39,
					iconPath: '/static/images/chehuo.png'
				}], //覆盖物
				mapControls1: [],
				mapControls: [{
					id: "1",
					position: {
						left: uni.getSystemInfoSync().windowWidth / 2 - 14,
						top: (uni.getSystemInfoSync().windowHeight - 32 - uni.getSystemInfoSync().statusBarHeight) / 2 - 35,
						width: 28,
						height: 35
					},
					iconPath: "/static/images/huozai.png",
					clickable: false
				}], //地图中的控件
				bj_time: 10,
				baojing: false,




				tk_show: false,
				tk_show1:false,
				tk_show1_num:0,
				note_time_t:'',
				tk_show1_cur:-1,
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
		},
		onLoad() {
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
			
			mapContext = uni.createMapContext('map1', this);
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
				// console.log(mapEndloading)
				// if (e) {
				// 	return
				// }

				// if (mapEndloading) {
				// 	return;
				// }
				clearTimeout(dw_time)
				clearTimeout('重新计算')
				dw_time = setTimeout(function() {
					if (e.detail.type == 'end' || e.type == 'end') {
						console.log('中心区')
						console.log(mapContext)
						//中心区域左边
						mapContext.getCenterLocation({
							success(res) {
								console.log('success')
								that.mapEnd(res);
							},
							fail(err) {
								console.log('fail')
								console.log(err)
							}
						});
					}
				}, 1000)
				return
				mapEndloading = true;
				setTimeout(() => { //防抖
					mapEndloading = false;
				}, 500);
				if (e.detail.type == 'end' || e.type == 'end') {
					console.log('中心区')
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
		max-height:  calc(100vh - 100upx);
		height: calc(100vh - 246upx - 100upx);
		/* #endif */
	}

	.map_search_box{
		width: 690upx;
		height: 107upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		position: relative;
		top: 30upx;
		left: 30upx;
	}
	
	.map_search_btn{
		width: 624upx;
		height: 86upx;
		background: #609AEC;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 50upx;
		left: 60upx;
		display: flex;
		font-size: 30upx;
		color: #fff;
	}

</style>
