<template>
	<view class="minh100">
		 <htmlLoading ref="htmlLoading" @Retry='onRetry' :bj_show="true">
			<view class="note_li" v-for="(item,index) in datas" @tap="note_add(item)">
				<view class="note_li_l">
					<view class="text-cut note_name">{{item.content}}</view>
					<view class="text-cut note_time">{{item.updated_at}}</view>
				</view>
				<text class="iconfont iconnext-m"></text>
			</view>
			<view v-if="datas.length==0" class="zanwu">暂无数据</view>
			<view v-if="data_last" class="data_last">我可是有底线的哟~</view>
			
			<view class="add_user">
				<view class="add_user_btn" @tap="note_add">添加笔记</view>
			</view>

			<bao-jing></bao-jing>
			<view v-if="tk_show" class="tk_popop"  @touchmove.stop.prevent='test'>
				<view class="tk_main">
					<view class="notetk_tit">添加笔记保存在记事本</view>
					<view class="notetk_time">{{note_time_t}}</view>
					<textarea class="note_text" v-model="note_text" placeholder="添加笔记" maxlength="500"/>
					<view class="note_addbtn" @tap="sub_btn">保存</view>
					<view class="tkshare_text">通过分享</view>
					<view class="tkshare_btns">
						<image @tap="getShare" :src="getimg('/static/images/tk_share_icon1.png')" mode="aspectFit"></image>
						<!-- <image @tap="duanxin" :src="getimg('/static/images/tk_share_icon2.png')" mode="aspectFit"></image> -->
					</view>
				</view>
				<text @tap="tk_show=false" class="iconfont iconguanbi" style="font-size: 50upx;color: #fff;"></text>
			</view>
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
				id:'',
				datas:[],
				page: 1,
				size: 15,
				data_last:false,
				triggered: true, //设置当前下拉刷新状态
				note_time_t:'',
				tk_show:false,
				note_text:''
			}
		},
		onLoad() {
			that = this
			that.onRetry()
		},
		onShow() {
			that.htmlReset = 0
			
		},
		onPullDownRefresh() {
			that.onRetry()
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas']),
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				CustomBar = CustomBar + StatusBar
				var style = `top:${CustomBar}px;`;

				return style
			}
		},
		methods: {
			test(){},
			sub_btn(){
				if(!that.note_text){
					uni.showToast({
						icon: 'none',
						title: '请填写内容'
					})
					return
				}
				var data = {
					token:that.$store.state.loginDatas.token,
					id:that.id,
					content:that.note_text
				}
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/minapp/store-notepad'
				uni.showLoading({
					title: '正在提交'
				})
				service.P_post(jkurl, data).then(res => {
					that.btn_kg = 0
					that.htmlReset=0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
							
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						that.tk_show=false
						that.note_text=''
						that.id=''
						uni.showToast({
							icon: 'none',
							title: '提交成功'
						})
						setTimeout(()=>{
							that.onRetry()
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
						icon: '操作失败'
					})
				})
			},
			onRetry(){
				
				that.datas=[]
				that.data_last=false
				that.page=1
				
				that.getdata()
			},
			getdata() {
				
				///api/info/list
				// var that = this
				var data = {
					token:that.$store.state.loginDatas.token,
					page:that.page,
					size:that.size
				}
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/minapp/notepad-list'
				uni.showLoading({
					title: '正在获取数据'
				})
				// setTimeout(()=>{
				// 	uni.hideLoading()
				// },1000)
				// return
				var page_now=that.page
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
					that.htmlReset=0
					that.$refs.htmlLoading.htmlReset_fuc(0)
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
			
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						if(page_now==1){
				
							that.datas = datas
						} else {
							if (datas.length == 0) {
								that.data_last = true
								return
							}
							that.data_last = false
							that.datas = that.datas.concat(datas)
						}
						that.page++
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
					that.$refs.htmlLoading.htmlReset_fuc(1)
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
			},
			
			note_add(item){
				if(!item.id){
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
				}else{
					console.log('item-------------------->')
					console.log(item)
					that.note_text=item.content
					that.note_time_t=item.updated_at
					that.id=item.id
					
				}
				that.tk_show=true
				
			},
			getShare(){
				that.tk_show=false
				// #ifdef APP-PLUS
				uni.shareWithSystem({
					type:'text',
				  // href: 'https://uniapp.dcloud.io',
					href:'',
					summary:that.note_text,
				  success(){
				    // 分享完成，请注意此时不一定是成功分享
				  },
				  fail(){
				    // 分享失败
				  }
				})
				// #endif
				// #ifdef H5
				uni.showModal({
					title:that.note_text
				})
				// #endif
				// _app.getShare(false, false, 2, '', '', '', that.camera_img, false, false);
			},
			duanxin(){
				var msg = plus.messaging.createMessage(plus.messaging.TYPE_SMS);
					msg.to = ['18310029587'];
					msg.body = that.note_text;
					plus.messaging.sendMessage( msg );
			},
			getimg(img) {
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.minh100{
		padding: 30upx;
		/* #ifdef H5 */
		
		min-height: calc(100vh - 100upx);
		/* #endif */
	}
	.add_user {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, .8);
		height: 200upx;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 800;
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
	.note_li{
		width: 100%;
		min-height: 129upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		margin-bottom: 20upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10upx 30upx;
	}
	.note_li_l{
		width: 560upx;
	}
	.note_name{
		font-size: 34upx;
		color: #333;
		margin-bottom: 10upx;
		font-weight: bold;
	}
	.note_time{
		font-size: 28upx;
		color: #999;
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
		background: #FFFFFF;
		border-radius: 10upx;
		padding:30upx 40upx;
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
		margin-bottom: 50upx;
		text-align: center;
	}
	.note_text{
		width: 100%;
		min-height: 100upx;
		padding: 10upx 20upx;
		border-bottom: 1px solid #DDDDDD;
		font-size: 26upx;
		color: #999;
		margin-bottom: 30upx;
	}
	.note_addbtn{
		width: 409upx;
		height: 72upx;
		background: #3C77F1;
		box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 36upx;
		margin: 0 auto 20upx;
		font-size: 28upx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tkshare_text{
		font-size: 20upx;
		color: #666;
		text-align: center;
	}
	.tkshare_btns{
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 80upx;
		
	}
	.tkshare_btns image{
		width: 50upx;
		height: 50upx;
	}
</style>
