<template>
  <div class="LoginForm">
    <br />
    <v-img contain max-height="150" max-width="300" :src="require('../assets/logo.png')"></v-img>
    <h1 class="text-center">Login Form</h1>
    <br />
    <v-form ref="form">

      <v-tabs-items  v-model="tabIndex">
        <v-tab-item key="0">
          <v-text-field v-model="email" type="email" label="E-mail" required id="fldEmail"></v-text-field>
    
          <v-text-field v-model="password" type="password" label="E-mail" required id="fldPassword"></v-text-field>
    
          <v-btn color="error" class="mr-4" @click="login" id="btnLogin">Login</v-btn>
          <br/>
          <br/>
          Don't have an account? <v-btn class="mr-4" text id="btnSignUpForm" @click="tabIndex = 1">Sign up</v-btn>
        </v-tab-item>
        <v-tab-item key="1">
          <UserDetails isSignUp hideCancel @save="signUp"></UserDetails>
          <br/>
          <br/>
          Already have an account? <v-btn class="mr-4" text id="btnLoginForm"  @click="tabIndex = 0">Login</v-btn>
        </v-tab-item>

      </v-tabs-items> 
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
      tabIndex: 0
    }
  },
  components: {
    UserDetails: () => import("@/components/UserDetails.vue"),
  },
  methods: {
    async login() {
      const result = await api("login", {email: this.email, password: this.password})
      if (result.status !== 200)
        return window.alert(`Something went wrong. Code: c1aec1d4. Error: ${result.message || JSON.stringify(result)}`)
      if (!result.body)
        return window.alert("Invalid Email or Password.")

      this.loggedUserSet(JSON.parse(result.body))
    },
    async signUp(user){
      const result = await api("signup", {user})
      if (result.status !== 200) 
        return window.alert(`Something went wrong. Code: cd3c2327. Error: ${result.message || JSON.stringify(result)}`)

      this.loggedUserSet(user)
    },
    loggedUserSet(user){
      this.$root.loggedUser = user
      this.$router.push({ name: "home" })
    }
  },
}
</script>

<style scoped>
</style>
