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
      courseList: []
    }
  },
  methods: {
    async fetchStudents() {
      try {
        const result = await api.auth("getStudents")
        if (!result.ok) throw result
        this.studentList = result.data

        return this.studentList
      } catch (error) {
        this.alertError("619a073b", error)
      }
    },
    async fetchCourses() {
      try {
        const result = await api.auth("getCourses")
        if (!result.ok) throw result
        this.courseList = result.data
      } catch (error) {
        this.alertError("c1aec1d4", error)
      }
    },
    alertError(code, error) {
      window.alert(
        `Something went wrong. Code: ${code}. Error: ${error.message || error?.data?.message || JSON.stringify(error)
        }`,
      )
    }
  },

  render: h => h(App)
}).$mount('#app')
