<template>
  <div class="AccountForm">
    <br />
    <v-img contain max-height="150" max-width="300" :src="require('../assets/logo.png')"></v-img>
    <h1 class="text-center">Account</h1>
    <br />


    <v-tabs-items v-model="tabIndex">
      <v-tab-item key="0">
        <h2>Login</h2>
        <v-form ref="formCredentials">
          <v-text-field v-model="email" type="email" label="E-mail" id="fldEmail"
            :rules="[rules.required, rules.email]" />

          <v-text-field v-model="password" type="password" label="Password" id="fldPassword"
            :rules="[rules.required]" />

          <v-btn color="primary" class="mr-4" @click="login" id="btnLogin">Login</v-btn>
          <br />
          <br />
          Don't have an account? <v-btn class="mr-4" text id="btnSignUpForm" @click="tabIndex = 1">Sign up</v-btn>
        </v-form>
      </v-tab-item>
      <v-tab-item key="1">
        <h2>Sign up</h2>
        <UserDetails ref="userDetails" isSignUp hideCancel @save="signUp"></UserDetails>
        <br />
        <br />
        Already have an account? <v-btn class="mr-4" text id="btnLoginForm" @click="tabIndex = 0">Login</v-btn>
      </v-tab-item>

    </v-tabs-items>

  </div>
</template>

<script>
import api from "../service/api.js"
import rules from "../rules.js"

export default {
  name: "AccountForm",
  data() {
    return {
      email: "",
      password: "",
      tabIndex: 0,
      rules
    }
  },
  components: {
    UserDetails: () => import("@/components/UserDetails.vue"),
  },
  methods: {
    async login() {
      if (!this.$refs.formCredentials.validate()) return

      const result = await api("login", { email: this.email, password: this.password })
      if (result.status !== 200)
        return window.alert(`Something went wrong. Code: c1aec1d4. Error: ${result.message || JSON.stringify(result)}`)
      if (!result.body)
        return window.alert("Invalid Email or Password.")

      this.loggedUserSet(JSON.parse(result.body))
    },
    async signUp(user) {
      if (!this.$refs.userDetails.$refs.formUserDetails.validate()) return

      if (user.password !== user.passwordConfirmation)
        return window.alert("Password not matching.")

      const result = await api("signup", { user })
      if (result.status !== 200)
        return window.alert(`Something went wrong. Code: cd3c2327. Error: ${result.message || JSON.stringify(result)}`)

      this.loggedUserSet(user)
    },
    loggedUserSet(user) {
      this.$root.loggedUser = user
      this.$router.push({ name: "home" })
    }
  },
}
</script>

<style scoped>

</style>
