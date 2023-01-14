<template>
  <div class="LoginForm">
    <br />
    <v-img contain max-height="150" max-width="300" :src="require('../assets/logo.png')"></v-img>
    <h1 class="text-center">Login Form</h1>
    <br />
    <v-form ref="form">
      <v-text-field v-model="email" type="email" label="E-mail" required></v-text-field>

      <v-text-field v-model="password" type="password" label="E-mail" required></v-text-field>

      <v-btn color="error" class="mr-4" @click="login"> Login </v-btn>
    </v-form>
  </div>
</template>

<script>
import api from "./../service/api.js"

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async login() {
      const result = await api("login", {email: this.email, password: this.password})
      if (result.status !== 200)
        return window.alert("Something went wrong. Code: c1aec1d4.")
      if (!result.body)
        return window.alert("Invalid Email or Password.")

      this.$root.loggedUser = JSON.parse(result.body)
      this.$router.push({ name: "home" })
    },
  },
}
</script>

<style scoped>
</style>
