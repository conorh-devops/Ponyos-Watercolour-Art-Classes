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
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      console.log("AE: ~ login")
      this.$router.push({ name: "home" })
      this.$root.loggedUser = {}
    },
  },
}
</script>

<style scoped>
</style>
