<template>
  <div class="StudentView">
    <h1 v-text="title" />
    <br />

    <UserDetails
      v-if="student"
      ref="userDetails"
      :editUser="student"
      @save="save"
      @cancel="cancel"
      showCourses
    />
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
      return "Student: " + (this.student?.name || "")
    },
  },
  beforeRouteEnter(to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser || !vm.$root.loggedUser.uIsAdmin)
        return vm.$router.push({ name: "home" })
      vm.student = vm.$root.studentList.find(
        (student) => student.id === to.params.id,
      )
    })
  },
  methods: {
    async save(user) {
      if (!this.$refs.userDetails.$refs.formUserDetails.validate()) return
      try {
        const result = await api.auth("updateProfile", { user })
        if (!result.ok) throw result

        window.alert(`Studant updated`)
        this.$root.fetchStudents()
        this.$router.push({ name: "students" })
      } catch (error) {
        this.$root.alertError("fc706ebb", error)
      }
    },
    cancel() {
      this.$router.push({ name: "students" })
    },
  },
}
</script>

<style lang="scss" scoped>
.ProfileView {
  width: 600px;
  margin: auto;
}
</style>
