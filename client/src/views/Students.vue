<template>
  <div class="StudentsView">
    <h1>All Students - Admin</h1>
    <br />
    <h2 id="adminWelcome">
      Below is a list of all students and their assigned courses
    </h2>
    <br />

    <v-data-table
      :headers="headers"
      :items="studentList"
      :items-per-page="10"
      @click:row="clickRow"
    />
  </div>
</template>

<script>
export default {
  name: "StudentsView",
  data() {
    return {
      studentList: [],
      headers: [
        {
          text: "Id",
          align: "start",
          value: "uId",
        },
        {
          text: "Name",
          align: "start",
          value: "uName",
        },
        {
          text: "Enrolled",
          align: "start",
          value: "enrolled",
        },
      ],
    }
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser || !vm.$root.loggedUser.uIsAdmin)
        return vm.$router.push({ name: "home" })
      setTimeout(() => {
        vm.fetchStudents()
      }, 200)
    })
  },
  methods: {
    clickRow(student) {
      this.$router.push({
        name: "student",
        params: { id: student.id },
      })
    },
    async fetchStudents() {
      const studentList = await this.$root.fetchStudents()
      this.studentList = studentList.map((student) => ({
        ...student,
        enrolled: Object.keys(student.uCourses).join(", "),
      }))
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
