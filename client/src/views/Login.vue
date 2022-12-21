<template>
  <div class="LoginView">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue"

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
}
</script>
