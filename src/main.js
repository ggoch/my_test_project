import Vue from 'vue'
import App from './App.vue'
import router from './router'
import storeTest from './stores'
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store:storeTest
}).$mount('#app');

