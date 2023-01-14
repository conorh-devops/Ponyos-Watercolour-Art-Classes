<template>
  <div class="HomeView">
    <v-card class="d-flex justify-center text-center mb-6" flat>
      <v-card flat>
        <v-img contain max-height="150" max-width="300" :src="require('../assets/logo.png')"></v-img>
        <H1 v-if="$root.loggedUser" v-text="'Hi, ' + $root.loggedUser.name"></H1>
      </v-card>
    </v-card>
    <p>
      Est proident aliquip eu occaecat anim. Lorem culpa dolor laborum id cillum. Laborum anim dolore irure anim laboris laboris ex minim eu irure aliquip. Enim laborum sunt non in
      nulla culpa ex et proident Lorem qui do. Culpa exercitation id esse id. Commodo nostrud amet sit ex esse consectetur occaecat quis. Culpa nisi nostrud officia consectetur do
      exercitation cupidatat veniam tempor ullamco officia mollit.
    </p>

    <p>
      Cupidatat nisi excepteur laborum esse anim aliqua elit id amet. Exercitation non officia anim cillum excepteur sit ullamco nisi do laboris. Irure tempor enim qui laboris elit
      sunt excepteur consequat nulla. Sint ipsum id cillum quis laboris cupidatat aute do ipsum tempor. Et adipisicing cupidatat enim quis est dolore minim fugiat voluptate laboris
      sint sit enim.
    </p>

    <p>Nulla non exercitation qui dolore. Nisi sit commodo magna cupidatat officia qui amet sint. Nostrud id eu do occaecat.</p>

    <p>In commodo proident dolore in eu eiusmod. Id exercitation sit do ea quis et amet tempor consequat magna sunt id labore ex. Elit tempor in cupidatat cupidatat.</p>

  </div>
</template>

<script>
export default {
  name: "HomeView",
}
</script>
