import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		platform:'',
		userName: "游客",
		loginDatas:{
				avatarurl:'http://51daiyan.test.upcdn.net/resource/api/img/20200716/3eb26483a34058663c1adf01cf90901d.png',
				nickname:'刘明',
				tel:'1786352362',
				gs:'智慧家物联网科技有限公司'
			
		},
		company:'',
		uid:'',
		phone:'',
		token:'',
		laheiArr:[],
		uuid:'',
		
		
		
		new_xz:[],    //批量操作
		new_problem:'' ,//新问题
		ls_prodata:'',
		ls_pro_yh:'',
		fj_data:'',
		bj_prodata:'',
		
		zn:"" ,//新手指南
		address:{},//当前坐标
		
		
		wheight:''
		
	},
	mutations: {
		setAddress(state, provider) { //当前坐标
			state.address = provider;
		},
		setHeight(state, height) { //视窗高度
			state.wheight = height||750;
		},
		set_xcx(state, xcx_status){
			var tip_text='正在切换至'
			if(xcx_status==0){
				if(state.loginDatas.is_seller!=1){
					uni.showToast({
						icon:'none',
						title: '暂无权限'
					});
					return
				}
				tip_text+='商家端'
			}
			if(xcx_status==1){
				if(state.loginDatas.is_owner!=1){
					uni.showToast({
						icon:'none',
						title: '暂无权限'
					});
					return
				}
				tip_text+='用户端'
			}
			if(xcx_status==2){
				if(state.loginDatas.is_engineer!=1){
					uni.showToast({
						icon:'none',
						title: '暂无权限'
					});
					return
				}
				tip_text+='智能安装端'
			}
			uni.showToast({
				icon:'none',
				title:tip_text
			})
			state.xcx_status = xcx_status || 0;
			uni.switchTab({
				url:'/pages/index/index'
			})
		},
		login(state, userName) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
			console.log(userName)
			console.log(state.userName)
		},
		lahei(state, id) {
			// state.userName = userName || '新用户';
			// state.hasLogin = true;
			state.laheiArr.push(id)
			console.log(state.laheiArr)
		},
		logindata(state, logindata) {
			state.loginDatas = logindata || '';
			Vue.set(state,'loginDatas',logindata)
			// state.company=logindata.company
			// state.uid= logindata.id
			// state.phone= logindata.phone
			// state.token= logindata.token
			console.log(logindata)
			console.log(state.loginDatas)
		},
		setplatform(state, platform) {
			state.platform = platform || 'android';
		},
		logout(state) {
			state.userName = "游客";
			state.hasLogin = false;
		},
		
		// ****************************************
		//评论操作
		setnew_xz(state, new_xz) {
			state.new_xz = new_xz||[];
		},
		//新题
		setnew_problem(state, new_problem) {
			state.new_problem = new_problem||[] ;
		},
	}
})

export default store
