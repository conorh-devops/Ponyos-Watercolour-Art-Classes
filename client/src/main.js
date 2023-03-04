import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import api from "./service/api.js"

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
  methods: {
    async fetchStudents() {
      const getStudentsResult = await api.auth("getStudents")
      if (getStudentsResult.status !== 200)
        return window.alert("Something went wrong. Code: 619a073b.")

      this.students = JSON.parse(getStudentsResult.body)
    },
  },

  render: h => h(App)
}).$mount('#app')
