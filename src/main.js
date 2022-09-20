import Vue from 'vue'
import App from './App.vue'

//引入路由
import VueRouter from "vue-router"
import router from "./router/index"

//引入vuex
import store from "./store/index"

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// 引入echarts
import echarts from "./utils/echarts";
 
// 挂载到vue实例中
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueAxios)



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
