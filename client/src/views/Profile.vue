<template>
  <div class="ProfileView">
    <h1 id="studentWelcome" v-text="'Hi ' + $root.loggedUser.name"></h1>
    <h2 id="adminWelcome">Edit your profile here</h2>
    <br />
    <UserDetails
      ref="userDetails"
      :editUser="$root.loggedUser"
      @save="save"
      @cancel="cancel"
    />
  </div>
</template>

<script>
import api from "./../service/api.js"

export default {
  name: "ProfileView",
  data() {
    return {
      user: null,
    }
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm) => {
      if (!vm.$root.loggedUser) return vm.$router.push({ name: "home" })
    })
  },
  components: {
    UserDetails: () => import("@/components/UserDetails.vue"),
  },
  methods: {
    async save(user) {
      if (!this.$refs.userDetails.$refs.formUserDetails.validate()) return

      try {
        const result = await api.auth("updateProfile", { user })
        if (result.status !== 200) throw result

        this.$root.loggedUser = user
        this.$router.push({ name: "home" })
        window.alert(`Profile updated`)
      } catch (error) {
        return window.alert(
          `Something went wrong. Code: beba5d64. Error: ${
            error.message || JSON.stringify(error)
          }`,
        )
      }
    },
    cancel() {
      this.$router.push({ name: "home" })
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
