<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h3 class="clickable" @click="$router.push({ name: 'home' })">
          Ponyo’s Watercolour Art Classes
        </h3>
      </div>

      <v-spacer></v-spacer>

      <template v-if="apiConnected">
        <v-btn
          v-if="!$root.loggedUser"
          text
          outlined
          @click="$router.push({ name: 'login' })"
          id="btnBarAccount"
        >
          <span class="mr-2">Log In</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <template v-else>
          <template v-if="$root.loggedUser.uIsAdmin">
            <v-btn
              text
              outlined
              class="mr-2"
              id="btnBarCourses"
              @click="$router.push({ name: 'students' })"
            >
              <v-icon class="mr-2">mdi-account-group</v-icon>
              <span>Students</span>
            </v-btn>
            <v-btn
              text
              outlined
              class="mr-2"
              id="btnBarCourses"
              @click="$router.push({ name: 'courses-admin' })"
            >
              <v-icon class="mr-2">mdi-list-box-outline</v-icon>
              <span>Courses Admin</span>
            </v-btn>
          </template>
          <template v-else>
            <v-btn
              v-if="!$root.loggedUser.uIsAdmin"
              text
              outlined
              class="mr-2"
              id="btnBarCourses"
              @click="$router.push({ name: 'courses' })"
            >
              <v-icon class="mr-2">mdi-list-box-outline</v-icon>
              <span>Courses</span>
            </v-btn>
          </template>

          <v-btn
            text
            outlined
            class="mr-2"
            id="btnBarProfile"
            @click="$router.push({ name: 'profile' })"
          >
            <v-icon class="mr-2">mdi-account-cog-outline</v-icon>
            <span v-text="userName"></span>
          </v-btn>
          <v-btn text outlined @click="logout" class="mr-2" id="btnBarLogout">
            <v-icon class="mr-2">mdi-logout</v-icon>
            <span>Log out</span>
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

  data() {
    return {
      apiConnected: false,
    }
  },
  watch: {
    "$root.loggedUser"(newUser) {
      this.$root.fetchCourses()
      if (newUser?.uIsAdmin) this.$root.fetchStudents()
    },
  },
  computed: {
    userName() {
      return this.$root.loggedUser.uName.split(" ")[0]
    },
  },
  async mounted() {
    this.testAPIConnection()
  },
  methods: {
    async testAPIConnection() {
      const result = await api.open("hello")
      this.apiConnected = result?.data.message.includes("Hello")
      console.log(`API ${this.apiConnected ? "" : "NOT "}Connected`)
    },
    logout() {
      this.$router.push({ name: "home" })
      this.$root.loggedUser = null
    },
  },
}
</script>

<style>
.main {
  margin: auto;
  width: 1200px;
  max-width: 98vw;
}

.clickable {
  cursor: pointer;
}
</style>
