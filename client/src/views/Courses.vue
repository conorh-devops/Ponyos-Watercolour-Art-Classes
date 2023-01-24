<template>
  <div class="CoursesView">
    <h1>All Courses</h1>
    <br />
    <div class="d-flex">

      <v-card class="mx-auto" max-width="344" v-for="course in Object.keys($root.courses)" :key="course">
        <v-card-text>
          <p class="text-h4 text--primary" v-text="course" />
          <p class="text-h7"
            v-text="'Duration: ' + $root.courses[course].duration + 'hrs | Price: €' + $root.courses[course].price" />
          <p class="text-h7">Description</p>
          <div class="text--primary" v-text="$root.courses[course].desc" />
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="Boolean(getEnrolledDate(course))" text outlined color="orange accent-4"
            :id="'btnRemove_' + course" @click="confirmationModal(course)">
            Remove
          </v-btn>
          <v-btn v-else text outlined color="primary" :id="'btnEnroll_' + course" @click="confirmationModal(course)">
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
          <v-btn text @click="confirmingModal(false)">
            Cancel
          </v-btn>
          <v-btn color="primary" text id="btnConfirm" @click="confirmingModal(true)">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
          <v-btn v-if="dialog.cancelShow" text id="btnCancel" @click="confirmingModal(false)">
            Cancel
          </v-btn>
          <v-btn color="primary" text id="btnConfirm" @click="confirmingModal(true)">
            Confirm
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
        isFeedbackMessage: false
      },
    }
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser) return vm.$router.push({ name: "home" })
    })
  },
  methods: {
    getEnrolledDate(course) {
      const date = this.$root?.loggedUser?.courses[course]
      return date ? `Enrolled at ${(new Date(date).toLocaleString())}` : ""
    },
    async confirmationModal(course) {
      const enrolled = Boolean(this.getEnrolledDate(course))
      this.dialog.course = course
      this.dialog.isEnrolled = enrolled
      this.dialog.cancelShow = true
      this.dialog.isFeedbackMessage = false
      this.dialog.content = this.dialog.isEnrolled ?
        `Are you sure you want to <b>remove</b> "${this.dialog.course}" form your Enrolloed list?` :
        `Are you sure you want to <b>enroll</b> "${this.dialog.course}"?`
      this.dialog.show = true
    },
    async confirmingModal(confirmed) {
      this.dialog.show = false
      if (this.dialog.isFeedbackMessage) return

      if (!confirmed) return

      if (this.dialog.isEnrolled)
        delete this.$root?.loggedUser?.courses[this.dialog.course]
      else
        this.$root.loggedUser.courses[this.dialog.course] = (new Date().toISOString())

      const result = await api("updateProfile", { user: this.$root?.loggedUser })
      if (result.status !== 200)
        return window.alert(`Something went wrong. Code: cd3c2327. Error: ${result.message || JSON.stringify(result)}`)

      setTimeout(() => {
        this.dialog.cancelShow = false
        this.dialog.isFeedbackMessage = true
        this.dialog.content =
          `You've successfully <b id="successAction">${this.dialog.isEnrolled ? "removed" : "enrolled"}</b> the course`
        this.dialog.show = true
      }, 500)

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
