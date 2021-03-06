import Vue from 'vue'
import App from './App'

import store from './store'
import event from 'common/event.js'
import con_base64 from 'common/base64.js'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
import baoJing from './components/baojing/baojing.vue'
Vue.component('bao-jing',baoJing)
import htmlLoading from '@/components/html_loading/html_loading.vue'
Vue.component('htmlLoading', htmlLoading)
import top_msg from '@/components/top_msg/top_msg.vue'
Vue.component('top_msg', top_msg)

Vue.config.productionTip = false

Vue.prototype.event = event;

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()