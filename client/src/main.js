import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  data() {
    //Most of these data could be stored on VueX
    return {
      loggedUser: null,
      studentList: [],
      courses: []
    }
  },

  render: h => h(App)
}).$mount('#app')
