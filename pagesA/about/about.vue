<template>
	<view class="minh100">
	
		<view v-if="datas" class="xieyi_main xmfwb_box" v-html="datas"></view>
		<!-- <view>{{datas}}</view> -->
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				title:'隐私协议',
				type:0,
				datas:'服务声明服务声明服务声明服务声明服务声明服务声明服务声明服务声明服务声明服务声明'
			}
		},
		onLoad(Option) {
			var that =this
			console.log(Option)
			
			
			if(Option.type=='fwsm'){
				that.type=Option.type
				that.title='服务声明'
				uni.setNavigationBarTitle({
					title:'服务声明'
				})
				// this.getdata('ysxy')
			}
			if(Option.type=='yszc'){
				that.type=Option.type
				that.title='隐私政策'
				uni.setNavigationBarTitle({
					title:'隐私政策'
				})
				this.getdata('ysxy')
			}
			if(Option.type=='about'){
				that.type=Option.type
				that.title='关于我们'
				uni.setNavigationBarTitle({
					title:'关于我们'
				})
				that.datas=that.about_content
				console.log(that.about_content)
			}
		
			// this.getdata()
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas','about_content']),
		},
		
		methods: {
			get_fwb(str){
				return service.get_fwb(str)
			},
			getdata(keyword){
				
				///api/info/list
				var that =this
				var data = {
					keyword:keyword
				}
				
				//selectSaraylDetailByUserCard
				var jkurl = '/getClause'
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
						
						that.datas = datas[0].content
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
						title: '获取数据失败，请检查您的网络连接'
					})
				})
			}
		}
	}
</script>

<style scoped>
	.minh100{
		/* #ifdef H5 */
		
		min-height: calc(100vh - 100upx);
		/* #endif */
	}
	.cu-custom{
		border-bottom: 1px solid #DBDBDB;
	}
	.content_wrap{
		width: 100%;
		min-height: 100%;
		background: #fff;
	}
	 .xieyi_main{
		 width: 100%;
		 padding: 30upx;
		 -webkit-box-sizing: border-box;
		 -moz-box-sizing: border-box;
		 box-sizing: border-box;
		 font-size: 28upx;
		 color: #333;
	 }
	 
</style>
