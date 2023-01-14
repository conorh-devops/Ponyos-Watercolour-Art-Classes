<template>
  <div class="HomeView">
    <v-card class="d-flex justify-center text-center mb-6" flat>
      <v-card flat>
        <v-img contain max-height="150" max-width="300" :src="require('../assets/logo.png')"></v-img>
      </v-card>
    </v-card>

    <template v-if="$root.loggedUser">
      <HomeAdmin v-if="$root.loggedUser.isAdmin" />
      <HomeStudent v-else />
    </template>
    <template v-else>

      <v-card class="justify-center text-center mb-6" flat>
        <h2>Welcome to</h2>
        <h2>Ponyos Watercolour Art Class</h2>
      </v-card>
      <br />
      <p>
        Est proident aliquip eu occaecat anim. Lorem culpa dolor laborum id cillum. Laborum anim dolore irure anim
        laboris laboris ex minim eu irure aliquip. Enim laborum sunt non in
        nulla culpa ex et proident Lorem qui do. Culpa exercitation id esse id. Commodo nostrud amet sit ex esse
        consectetur occaecat quis. Culpa nisi nostrud officia consectetur do
        exercitation cupidatat veniam tempor ullamco officia mollit.
      </p>

      <p>Nulla non exercitation qui dolore. Nisi sit commodo magna cupidatat officia qui amet sint. Nostrud id eu do
        occaecat.</p>
    </template>

  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    HomeAdmin: () => import("@/components/HomeAdmin.vue"),
    HomeStudent: () => import("@/components/HomeStudent.vue"),
  },
}
</script>
