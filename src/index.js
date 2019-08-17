import Vue from 'vue'

Vue.config.productionTip = false
Vue.config.devtools = false

import App from './App.vue'

// new Vue({
//     render: h => h(App),
//     propsData: {
//         abc: 'tra lala'
//     }
// }).$mount('vue-wc-01')

window.customElements.define(
    'vue-wc-01',
    require('@vue/web-component-wrapper').default(Vue, App)
)
