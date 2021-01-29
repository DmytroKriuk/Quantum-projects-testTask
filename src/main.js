import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script'
import 'bootstrap'
import Swiper from 'swiper';
window.Swiper = Swiper; 
Vue.use(LoadScript);

Vue.config.productionTip = true

new Vue({
  render: h => h(App),

}).$mount('#app')
