<template>
  <div class="CoursesAdminView">
    <h1>All Courses - Admin</h1>
    <br />
    <h2 id="adminWelcome">
      Below is a list of all courses and their assigned students
    </h2>
    <br />
    <div class="d-flex">
      <v-card
        class="mx-auto"
        width="350"
        v-for="course in Object.keys(courseList)"
        :key="course"
      >
        <v-card-text>
          <p class="text-h4 text--primary" v-text="course" />
          <p
            class="text-h7"
            :id="course + '-count'"
            v-text="
              'Enrolled by ' + courseList[course].students.length + ' students'
            "
          />
          <p
            class="text-h7"
            :id="course + '-withExtraTutor-count'"
            v-text="
              'Enrolled with extra tutor: ' +
              enrolledWithExtraTutorCount(course) +
              ' students'
            "
          />
          <p
            class="text--primary"
            v-for="student in courseList[course].students"
            :id="course + '-student-' + student.id + '-count'"
            :key="student.id"
            v-text="
              student.name +
              (student.courseList[course]?.extraTutor ? ' *' : '')
            "
          />
        </v-card-text>
        <div></div>
      </v-card>
    </div>
    <br />
    <p>* Enrolled with extra tutor</p>
  </div>
</template>

<script>
export default {
  name: "CoursesAdminView",
  data() {
    return {
      courseList: [],
    }
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser || !vm.$root.loggedUser.uIsAdmin)
        return vm.$router.push({ name: "home" })

      vm.courseList = JSON.parse(JSON.stringify(vm.$root.courseList))
      Object.keys(vm.courseList).forEach((courseName) => {
        vm.courseList[courseName].students = vm.$root.studentList.filter(
          (student) => student.courseList[courseName],
        )
      })
    })
  },
  methods: {
    enrolledWithExtraTutorCount(course) {
      return this.courseList[course].students.filter(
        (s) => s.courseList[course]?.extraTutor,
      ).length
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
