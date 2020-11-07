import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../packages/assets/base.css'
import input from './../packages/MtInput'
import MtSelect from './../packages/MtSelect'
import MtDateTimePicker from './../packages/MtDateTimePicker'
import MtPagination from './../packages/MtPagination'
import MtLoading from './../packages/MtLoading'
Vue.use(input)
Vue.use(MtSelect)
Vue.use(MtDateTimePicker)
Vue.use(MtPagination)
Vue.use(MtLoading)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
