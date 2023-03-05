<template>
  <div class="HomeView">
    <v-card class="d-flex justify-center text-center mb-6" flat>
      <v-card flat>
        <v-img
          contain
          max-height="150"
          max-width="300"
          :src="require('../assets/logo.png')"
        ></v-img>
      </v-card>
    </v-card>

    <template v-if="$root.loggedUser">
      <HomeAdmin v-if="$root.loggedUser.uIsAdmin" />
      <HomeStudent v-else />
    </template>
    <template v-else>
      <v-card class="justify-center text-center mb-6" flat>
        <h2>Welcome to</h2>
        <h2>Ponyos Watercolour Art Class</h2>
      </v-card>
      <br />
      <v-card class="justify-center text-center mb-6" flat>
        <p>
          Welcome to Ponyos Watercolour Art Class, where creativity and passion
          come together.
        </p>
        <p>
          Our dedicated team of artists and educators is committed to providing
          a supportive and inspiring environment for students of all levels to
          grow and develop their artistic abilities.
        </p>
        <p>
          Whether you're just starting out on your artistic journey or looking
          to take your skills to the next level, we have a variety of programs
          and courses available to help you reach your goals.
        </p>

        <p>So, come join us and unleash your inner artist!</p>
      </v-card>
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
