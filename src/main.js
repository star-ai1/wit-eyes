import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import {Message} from "@/utils/"





Vue.prototype.$Message = Message;




new Vue({
  router, //配置路由
  render: h => h(App),
}).$mount('#app')
