<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h3 class="clickable" @click="$router.push({ name: 'home' })">Ponyo’s Watercolour Art Classes</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="!$root.loggedUser" text @click="$router.push({ name: 'login' })">
        <span class="mr-2">Login</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn v-else text @click="logout">
        <span class="mr-2">Log out</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
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
