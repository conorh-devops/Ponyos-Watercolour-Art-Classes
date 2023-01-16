<template>
  <div class="ProfileView">
    <h1 id="adminWelcome">Editing profile</h1>
    <br />
    <UserDetails ref="userDetails" :editUser="$root.loggedUser" @save="save" />
  </div>
</template>

<script>
import api from "./../service/api.js"

export default {
  name: "ProfileView",
  data() {
    return {
      user: null
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

      const result = await api("updateProfile", { user })
      if (result.status !== 200)
        return window.alert(`Something went wrong. Code: cd3c2327. Error: ${result.message || JSON.stringify(result)}`)

      this.$root.loggedUser = user
      this.$router.push({ name: "home" })
      window.alert(`Profile updated`)
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
