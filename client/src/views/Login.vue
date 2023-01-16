<template>
  <div class="LoginView">
    <AccountForm />
  </div>
</template>

<script>
import AccountForm from "@/components/AccountForm.vue"

export default {
  name: "LoginView",
  components: {
    AccountForm,
  },
}
</script>


<style lang="scss" scoped>
.LoginView {
  width: 600px;
  margin: auto;
}
</style>