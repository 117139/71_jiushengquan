<template>
	<view class="minh100">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1" class="loading_def">
			<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<block v-if="htmlReset==0">
			<view class="note_li">
				<view class="flex_1">
					<view class="text-cut note_name">笔记1</view>
					<view class="text-cut note_time">2020-09-01 06:04</view>
				</view>
				<text class="iconfont iconnext-m"></text>
			</view>
			
			<view class="add_user">
				<view class="add_user_btn" @tap="note_add">添加笔记</view>
			</view>

			<bao-jing></bao-jing>
			<view v-if="tk_show" class="tk_popop"  @touchmove.stop.prevent='test'>
				<view class="tk_main">
					<view class="notetk_tit">添加笔记保存在记事本</view>
					<view class="notetk_time">{{note_time_t}}</view>
					<textarea class="note_text" v-model="note_text" placeholder="添加笔记" maxlength="500"/>
					<view class="note_addbtn">保存</view>
					<view class="tkshare_text">通过分享</view>
					<view class="tkshare_btns">
						<image @tap="getShare" :src="getimg('/static/images/tk_share_icon1.png')" mode="aspectFit"></image>
						<image @tap="duanxin" :src="getimg('/static/images/tk_share_icon2.png')" mode="aspectFit"></image>
					</view>
				</view>
				<text @tap="tk_show=false" class="iconfont iconguanbi" style="font-size: 50upx;color: #fff;"></text>
			</view>
		</block>
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
				htmlReset: -1,
				note_time_t:'',
				tk_show:false,
				note_text:''
			}
		},
		onLoad() {
			that = this
		},
		onShow() {
			that.htmlReset = 0
			
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
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
			onRetry(){
				
			},
			note_add(){
				that.tk_show=true
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
			getShare(){
				uni.shareWithSystem({
					type:'text',
				  href: 'https://uniapp.dcloud.io',
					summary:that.note_text,
				  success(){
				    // 分享完成，请注意此时不一定是成功分享
				  },
				  fail(){
				    // 分享失败
				  }
				})
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
		height: 100upx;
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
