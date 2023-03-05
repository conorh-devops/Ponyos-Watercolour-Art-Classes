<template>
  <div class="CoursesView">
    <h1
      id="studentWelcome"
      v-text="'Welcome to the courses page ' + $root.loggedUser.uName"
    ></h1>
    <p>
      <br />
      You may enroll or un-enroll from any course.
      <br />
      You may also choose to add an extra tutor if required.
    </p>
    <br />

    <div class="d-flex">
      <v-card
        class="mx-auto"
        max-width="344"
        v-for="course in Object.keys(courseList)"
        :key="course"
      >
        <v-card-text>
          <p class="text-h4 text--primary" v-text="course" />
          <p
            class="text-h7"
            v-text="
              'Duration: ' +
              courseList[course].duration +
              'hrs | Price: €' +
              courseList[course].price
            "
          />
          <p class="text-h7">Description</p>
          <div class="text--primary" v-text="courseList[course].desc" />
          <v-checkbox
            v-model="courseList[course].extraTutor"
            :id="'checkExtraTutor' + course"
            label="Extra tutor"
            :disabled="Boolean(getEnrolledDate(course))"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="Boolean(getEnrolledDate(course))"
            text
            outlined
            color="orange accent-4"
            :id="'btnRemove_' + course"
            @click="confirmationModal(course)"
          >
            Remove
          </v-btn>
          <v-btn
            v-else
            text
            outlined
            color="primary"
            :id="'btnEnroll_' + course"
            @click="confirmationModal(course)"
          >
            Enroll
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <p v-text="getEnrolledDate(course)" />
        </v-card-text>
      </v-card>
    </div>

    <v-dialog v-model="dialog.show" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          Ponyo’s Watercolour Art Classes
        </v-card-title>
        <v-card-text>
          <span v-html="dialog.content" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="dialog.cancelShow"
            text
            id="btnCancel"
            @click="confirmingModal(false)"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            id="btnConfirm"
            @click="confirmingModal(true)"
          >
            <span v-text="dialog.btnConfirmText" />
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import api from "../service/api.js"

export default {
  name: "CoursesView",
  data() {
    return {
      user: null,
      dialog: {
        show: false,
        content: "",
        isEnrolled: false,
        isFeedbackMessage: false,
        btnConfirmText: "Confirm",
      },
      courseList: [],
    }
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser) return vm.$router.push({ name: "home" })
      vm.courseList = vm.$root.courseList
      for (const propCourse of Object.keys(vm.courseList)) {
        vm.courseList[propCourse].extraTutor = vm.getEnrolledTutor(propCourse)
      }
    })
  },
  methods: {
    getEnrolledDate(course) {
      const enrolledCourse = this.$root?.loggedUser?.uCourses[course]
      return enrolledCourse
        ? `Enrolled at ${new Date(enrolledCourse.enrollDt).toLocaleString()}`
        : ""
    },
    getEnrolledTutor(course) {
      const enrolledCourse = this.$root?.loggedUser?.uCourses[course]
      const result = Boolean(enrolledCourse && enrolledCourse.extraTutor)
      return Boolean(result)
    },
    async confirmationModal(course) {
      const enrolled = Boolean(this.getEnrolledDate(course))
      this.dialog.course = course
      this.dialog.isEnrolled = enrolled
      this.dialog.cancelShow = true
      this.dialog.isFeedbackMessage = false
      this.dialog.btnConfirmText = "Confirm"
      this.dialog.content = this.dialog.isEnrolled
        ? `Are you sure you want to <b>remove</b> "${this.dialog.course}" form your Enrolloed list?`
        : `Are you sure you want to <b>enroll</b> "${this.dialog.course}"?`
      this.dialog.show = true
    },
    async confirmingModal(confirmed) {
      this.dialog.show = false

      if (!confirmed) return
      if (this.dialog.isFeedbackMessage) return

      const extraTutor = this.courseList[this.dialog.course].extraTutor
      if (this.dialog.isEnrolled)
        delete this.$root?.loggedUser?.uCourses[this.dialog.course]
      else {
        this.$root.loggedUser.uCourses[this.dialog.course] = {
          enrollDt: new Date().toISOString(),
          extraTutor,
        }
      }
      try {
        const result = await api.auth("updateProfile", {
          user: this.$root?.loggedUser,
        })
        if (!result.ok) throw result
        this.dialog.cancelShow = false
      } catch (error) {
        this.$root.alertError("3beedf9c", error)
      }

      setTimeout(() => {
        this.dialog.isFeedbackMessage = true
        this.dialog.content = `You've successfully <b id="successAction">${
          this.dialog.isEnrolled ? "removed" : "enrolled"
        }</b> the course`
        if (!this.dialog.isEnrolled)
          this.dialog.content += " with <b>extra tutor</b>"

        this.dialog.content += "."
        this.dialog.btnConfirmText = "Ok"
        this.dialog.show = true
      }, 500)
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
