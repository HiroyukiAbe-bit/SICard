import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

Vue.use(BootstrapVue) // add
Vue.use(IconsPlugin) // add

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
