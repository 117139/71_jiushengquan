<template>
	<view class="minh100">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1" class="loading_def">
			<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<block v-if="htmlReset==0">
			<view class="js_box">
				<view class="num_li">
					<view class="num_li_name">轻伤</view>
					<view class="num_tep">
						<text class="iconfont iconminus-square-fill" @tap="js_fuc(1,1)"></text>
						<view class="num_num">{{num_1}}</view>
						<text class="iconfont iconjiahao" @tap="js_fuc(1,2)"></text>
					</view>
					<view class="num_btn" @tap="num_1=0">重置</view>
				</view>
				<view class="num_li">
					<view class="num_li_name">中度伤</view>
					<view class="num_tep">
						<text class="iconfont iconminus-square-fill" style="color: #E5BD2A;" @tap="js_fuc(2,1)"></text>
						<view class="num_num">{{num_2}}</view>
						<text class="iconfont iconjiahao" style="color: #E5BD2A;"  @tap="js_fuc(2,2)"></text>
					</view>
					<view class="num_btn" @tap="num_2=0">重置</view>
				</view>
				<view class="num_li">
					<view class="num_li_name">重伤</view>
					<view class="num_tep">
						<text class="iconfont iconminus-square-fill" style="color: #E31300;" @tap="js_fuc(3,1)"></text>
						<view class="num_num">{{num_3}}</view>
						<text class="iconfont iconjiahao" style="color: #E31300;" @tap="js_fuc(3,2)"></text>
					</view>
					<view class="num_btn" @tap="num_3=0">重置</view>
				</view>
				<view class="num_li">
					<view class="num_li_name">死亡</view>
					<view class="num_tep">
						<text class="iconfont iconminus-square-fill" style="color: #010101;" @tap="js_fuc(4,1)"></text>
						<view class="num_num">{{num_4}}</view>
						<text class="iconfont iconjiahao" style="color: #010101;" @tap="js_fuc(4,2)"></text>
					</view>
					<view class="num_btn" @tap="num_4=0">重置</view>
				</view>
				<view class="sub_li">
					<view class="sub_name">分享</view>
					<image class="share_btn" @tap="getShare" :src="getimg('/static/images/tk_share_icon1.png')" mode="aspectFit"></image>
					<!-- <image class="share_btn" @tap="duanxin" :src="getimg('/static/images/tk_share_icon2.png')" mode="aspectFit"></image> -->
					<view class="flex_1"></view>
					
					<view class="num_btn" @tap="reset_all">重置所有</view>
				</view>
			</view>
			
			<view class="add_user">
				<view class="add_user_btn" @tap="save_fuc">提交</view>
			</view>

			<bao-jing></bao-jing>
			<!-- /*<view v-if="tk_show" class="tk_popop"  @touchmove.stop.prevent='test'>
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
			</view>*/ -->
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
				num_1:0,
				num_2:0,
				num_3:0,
				num_4:0,
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
			save_fuc(){
				uni.showToast({
					icon:'none',
					title:'提交成功'
				})
			},
			reset_all(){
				that.num_1=0
				that.num_2=0
				that.num_3=0
				that.num_4=0
			},
			js_fuc(num,type){
				var s_num=0
				if(num==1){
					s_num=that.num_1
				}
				if(num==2){
					s_num=that.num_2
				}
				if(num==3){
					s_num=that.num_3
				}
				if(num==4){
					s_num=that.num_4
				}
				if(type==1){
					if(s_num==0){
						return
					}
					s_num--
					
				}else{
					s_num++
				}
				if(num==1){
					that.num_1=s_num
				}
				if(num==2){
					that.num_2=s_num
				}
				if(num==3){
					that.num_3=s_num
				}
				if(num==4){
					that.num_4=s_num
				}
			},
			getShare(){
				var strr='轻伤:'+that.num_1+'中度伤:'+that.num_2+'重伤:'+that.num_3+'死亡:'+that.num_4
				uni.shareWithSystem({
					type:'text',
				  href: 'https://uniapp.dcloud.io',
					summary:strr,
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
				var strr='轻伤:'+that.num_1+'中度伤:'+that.num_2+'重伤:'+that.num_3+'死亡:'+that.num_4
				var msg = plus.messaging.createMessage(plus.messaging.TYPE_SMS);
					msg.to = ['18310029587'];
					msg.body =strr;
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
		background: #FAFAFA;
		/* #ifdef H5 */
		
		min-height: calc(100vh - 100upx);
		/* #endif */
	}
	.add_user {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		/* background: rgba(255, 255, 255, .8); */
		background: #FAFAFA;
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
	.js_box{
		width: 100%;
		
		min-height: 616upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 4upx;
	}
	.num_li{
		width: 100%;
		height: 125upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30upx;
	}
	.num_li_name{
		width: 150upx;
		font-size: 34upx;
		color: #333;
	}
	.num_btn{
		min-width: 112upx;
		height: 57upx;
		background: #E8E8E8;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		color: #666;
		padding: 0 10upx;
	}
	.num_tep{
		display: flex;
		align-items: center;
	}
	.num_tep text{
		color: #02A44F;
			font-size: 57upx;
	}
	.num_num{
		font-size: 34upx;
		color: #333;
		width: 80upx;
		text-align: center;
	}
	.sub_li{
		width: 100%;
		border-top: 1px solid #F1F1F1;
		height: 115upx;
		display: flex;
		align-items: center;
		padding: 0 30upx;
	}
	.sub_name{
		font-size: 34upx;
		color: #333;
	}
	.share_btn{
		width: 50upx;
		height: 50upx;
		margin-left: 50upx;
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
