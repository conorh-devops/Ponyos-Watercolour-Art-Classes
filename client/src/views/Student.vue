<template>
  <div class="StudentView">
    <h1 v-text="title" />
    <br />

    <UserDetails v-if="student" ref="userDetails" :editUser="student" @save="save" @cancel="cancel" showCourses />

  </div>
</template>

<script>
import api from "./../service/api.js"

export default {
  name: "StudentView",
  data() {
    return {
      student: null,
    }
  },
  components: {
    UserDetails: () => import("@/components/UserDetails.vue"),
  },
  computed: {
    title() {
      return 'Student: ' + (this.student?.name || "")
    }
  },
  beforeRouteEnter(to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser || !vm.$root.loggedUser.isAdmin) return vm.$router.push({ name: "home" })
      vm.student = vm.$root.students.find(student => student.id === to.params.id)
    })
  },
  methods: {
    async save(user) {
      if (!this.$refs.userDetails.$refs.formUserDetails.validate()) return

      const result = await api("updateStudent", { user })
      if (result.status !== 200)
        return window.alert(`Something went wrong. Code: cd3c2327. Error: ${result.message || JSON.stringify(result)}`)

      window.alert(`Studant updated`)
      this.$root.fetchStudents()
      this.$router.push({ name: "students" })
    },
    cancel() {
      this.$router.push({ name: "students" })
    }
  },
}
</script>

<style lang="scss" scoped>
.ProfileView {
  width: 600px;
  margin: auto;
}
</style>
