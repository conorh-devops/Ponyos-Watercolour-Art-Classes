<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h3 class="clickable" @click="$router.push({ name: 'home' })">Ponyo’s Watercolour Art Classes</h3>
      </div>

      <v-spacer></v-spacer>

      <template v-if="testApiResult">

        <v-btn v-if="!$root.loggedUser" text outlined @click="$router.push({ name: 'login' })" id="btnBarLogin">
          <span class="mr-2" >Login</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <template v-else >
          <v-btn text outlined class="mr-2" id="btnBarProfile">
            <span  v-text="userName"></span>
            <v-icon>mdi-account-cog-outline</v-icon>
          </v-btn>
          <v-btn text outlined @click="logout" class="mr-2" id="btnBarLogout">
            <span >Log out</span>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
      </template>
    </v-app-bar>

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import api from "./service/api.js"

export default {
  name: "App",

  data: () => ({
    testApiResult: null
  }),
  computed: {
    userName() {
      return this.$root.loggedUser.name.split(" ")[0] 
    }
  },
  mounted () {
    this.testApi()
  },
  methods: {
    async testApi(){
      const result = await api("hello") 
      if (result.status === 200)
      this.testApiResult = result.body === "Hello world"
      
      console.log(`App is ${!this.testApiResult ? "NOT" : ""} Connected with backend`)
    },
    logout() {
      this.$root.loggedUser = null
    },
  },
}
</script>

<style>
.main {
  margin: auto;
  max-width: 800px !important;
}
.clickable {
  cursor: pointer;
}
</style>
