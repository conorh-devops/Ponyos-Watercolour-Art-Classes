<template>
  <div class="HomeStudent">
    <h1 id="studentWelcome" v-text="'Welcome to the Student Portal ' + $root.loggedUser.name"></h1>
    <br />
    <p>
      In the student portal you can access all of your important school information.
    </p>
    <p>
      Here are some quick tips to help you get started:
      <br>
      <br>
      <b>Courses:</b> Click the "Courses" button to view available courses. You may enroll or unenroll from courses if you wish.
      <br>
      You may also choose to add an extra tutor if required.
      <br>
      <br>
      <b>Profile:</b> Click your name above to edit your profile information.
      <br>
      <br>
      <b>Log Out:</b> Don't forget to click the "Log Out" button when you are finished.
    </p>
    <p>
      We hope you find everything you need here to succeed in your academic journey.
      <br>
      If you have any questions or need help with anything, please don't hesitate to reach out to us.
      <br>
      Good luck with your studies!
    </p>

  </div>
</template>

<script>
export default {
  name: "HomeStudent",
}
</script>

<style scoped>

</style>
