import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import { plugin } from 'vue-function-api'
Vue.config.productionTip = false
Vue.config.devtools = false

import App from './App.vue'

Vue.use(plugin)

// new Vue({
//     render: h => h(App)
// }).$mount('#app')

window.customElements.define('vue-wc-01', wrap(Vue, App))

export default App
