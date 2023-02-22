<template>
  <div class="HomeAdmin">
    <h1 v-if="$root.loggedUser" id="adminWelcome">Welcome to the Administrator Portal</h1>
    <br />
    <p>
      As the site administrator, you play an important role in maintaining and updating the information on our website.
     <br>
      To help you get started, we've provided the following instructions and resources:
    </p>
    <p>
      <b>Students:</b> Click the "Students" button to view a list of students and their assigned courses.
    </p>
    <p>
      <b>Courses Admin:</b> Click the "Courses Admin" button to view the different courses available to students.
    </p>
    <b>Admin:</b>  Click the "Admin" button to edit your admin profile.
    <p>
      Please let us know if you have any questions or need additional help. We're here to support you and ensure that the site runs smoothly and effectively."
    </p>

  </div>
</template>

<script>
export default {
  name: "HomeAdmin",
}
</script>

<style scoped>

</style>
