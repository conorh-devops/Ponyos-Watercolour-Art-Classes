<template>
  <div class="StudentsView">
    <h1>Students</h1>
    <br />

    <v-data-table :headers="headers" :items="students" :items-per-page="10" @click:row="clickRow" />

  </div>
</template>

<script>

export default {
  name: "StudentsView",
  data() {
    return {
      students: [],
      headers: [
        {
          text: 'Id',
          align: 'start',
          value: 'id',
        },
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        {
          text: 'Enrolled',
          align: 'start',
          value: 'enrolled',
        },
      ],
    }
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser || !vm.$root.loggedUser.isAdmin) return vm.$router.push({ name: "home" })
      setTimeout(() => {
        vm.students = vm.$root.students.map(student => ({ ...student, enrolled: Object.keys(student.courses).join(", ") }))
      }, 200)
    })
  },
  methods: {
    clickRow(student) {
      this.$router.push({
        name: "student",
        params: { id: student.id },
      })
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
