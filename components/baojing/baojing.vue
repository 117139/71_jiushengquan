<template>
	<view>
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
	</view>
</template>

<script>
	import Vue from 'vue'
	import service from '../../service.js';
	import torch from "@/common/dc-torch/torch.js"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
	var djs_fuc
	var djs_fuc1
	export default {
		data() {
			return {
				bj_time:10,
				baojing:false,
				
				
				//播放语音相关参数
				AUDIO: uni.createInnerAudioContext(),
				playMsgid:'',
				torch_type:false
			};
		},
		onLoad() {
			that=this
			this.AUDIO.src = '/static/music/jingbao_kong.mp3';
			this.AUDIO.loop=true
			//音频进入可以播放状态，但不保证后面可以流畅播放
			this.AUDIO.onCanplay((res) => {
				console.log('音频进入可以播放状态，但不保证后面可以流畅播放')
				
			});
			//音频播放
			this.AUDIO.onPlay((res) => {
				console.log('音频播放')
				uni.vibrateLong({
				    success: function () {
				        console.log('success');
				    }
				});
				torch.on();
				that.torch_type=true
				djs_fuc=setInterval(function () {
					
				  if(that.torch_type==true){
						torch.off();
						that.torch_type=false
					}else{
						torch.on();
						that.torch_type=true
					}
					
				  // console.log(that.djs())
				}, 100);
				djs_fuc1=setInterval(function () {
					uni.vibrateLong({
					    success: function () {
					        console.log('success');
					    }
					});
				}, 1000);
			});
			//音频停止
			this.AUDIO.onStop((res) => {
				console.log('音频停止')
				clearInterval(djs_fuc)
				clearInterval(djs_fuc1)
				torch.off();
				that.torch_type=true
			});
			//语音自然播放结束
			this.AUDIO.onEnded((res) => {
				console.log('语音自然播放结束')
				this.playMsgid = null;
			});
		},
		methods: {
			// 播放语音
			playVoice(msg) {
					this.AUDIO.play();
			},
			baojing_fuc(){
				var that=this
				this.baojing=true
				that.bj_time=3
				djs_fuc=setInterval(function () {
				  if(that.bj_time==0){
						// uni.showToast({
						// 	icon:'none',
						// 	title:'警报操作'
						// })
						console.log(0)
						
						clearInterval(djs_fuc)
						that.bj_time='!'
						that.playVoice()
					}else{
						that.bj_time--
					}
				  // console.log(that.djs())
				}, 1000);
			},
			baojing_del(){
				var that=this
				clearInterval(djs_fuc)
				this.bj_time=10
				this.baojing=false
				this.AUDIO.stop();
			},
			getimg(img) {
				return service.getimg(img)
			},
		}
	}
</script>

<style>

</style>
