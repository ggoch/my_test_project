import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  Vuex,
}).$mount('#app');

