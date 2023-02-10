<template>
  <div class="CoursesAdminView">
    <h1>All Courses - Admin</h1>
    <br>
    <h2 id="adminWelcome">Below is a list of all courses and their assigned students</h2>
    <br />
    <div class="d-flex">

      <v-card class="mx-auto" width="350" v-for="course in Object.keys(courses)" :key="course">
        <v-card-text>
          <p class="text-h4 text--primary" v-text="course" />
          <p class="text-h7" :id="course + '-count'"
            v-text="'Enrolled by ' + courses[course].students.length + ' students'" />
          <p class="text--primary" v-for="student in courses[course].students"
            :id="course + '-student-' + student.id + '-count'" :key="student.id" v-text="student.name" />
        </v-card-text>
        <div>
        </div>
      </v-card>
    </div>

  </div>
</template>

<script>

export default {
  name: "CoursesAdminView",
  data() {
    return {
      courses: [],
      students: []
    }
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser || !vm.$root.loggedUser.isAdmin) return vm.$router.push({ name: "home" })
      vm.courses = JSON.parse(JSON.stringify(vm.$root.courses))
      Object.keys(vm.courses).forEach(courseName => {
        vm.courses[courseName].students = vm.$root.students.filter(student => student.courses[courseName])
      })
      console.log("AE: ~ vm.courses[courseName].", vm.courses)
    })
  },
}
</script>

<style lang="scss" scoped>
.ProfileView {
  width: 600px;
  margin: auto;
}
</style>
