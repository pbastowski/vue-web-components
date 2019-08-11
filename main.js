import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import wc from './App'

window.customElements.define('vue-wc-01', wrap(Vue, wc))

// import Vue from 'vue'
// import { plugin } from 'vue-function-api'
// import App from './App.vue'

// Vue.config.productionTip = false
// Vue.config.devtools = false
// Vue.use(plugin)

// new Vue({
//     render: h => h(App)
// }).$mount('#app')
