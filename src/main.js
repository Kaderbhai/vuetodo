import Vue from 'vue'
import VueTodo from './VueTodo.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(VueTodo)
}).$mount('#vuetodo')
