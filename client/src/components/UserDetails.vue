<template>
  <div class="UserDetails">
    <v-form ref="formUserDetails">

      <v-text-field v-model="user.email" :disabled="Boolean(editUser)" type="email" label="E-mail" id="fldEmail"
        ref="fldEmail" :rules="[rules.required, rules.email]" />

      <v-text-field v-if="isSignUp" v-model="user.password" type="password" label="Password" id="fldPassword"
        ref="fldPassword" :rules="[rules.required]" />

      <v-text-field v-if="isSignUp" v-model="user.passwordConfirmation" type="password" label="Password Confirmation"
        id="fldPasswordConfirmation" ref="fldPasswordConfirmation" :rules="[rules.required]" />

      <v-text-field v-model="user.name" type="text" label="Your Name" required id="fldName" ref="fldName"
        :rules="[rules.required]" />

      <v-card-actions>
        <v-btn id="btnSave" @click="cancel" v-if="!hideCancel">
          <span>Cancel</span>
        </v-btn>
        <v-btn id="btnSave" ref="btnSave" @click="save" color="primary">
          <span v-text="isSignUp ? 'Sign up' : 'Save'"></span>
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
import rules from "./../rules.js"

export default {
  name: "UserDetails",
  props: {
    isSignUp: {
      type: Boolean,
      default: false
    },
    hideCancel: {
      type: Boolean,
      default: false
    },
    editUser: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      user: {
        email: "",
        name: "",
        password: "",
        passwordConfirmation: "",
        isAdmin: false
      },
      rules
    }
  },
  async mounted() {
    if (this.editUser) {
      this.user.email = this.editUser.email
      this.user.name = this.editUser.name
      this.user.courses = this.editUser.courses
      this.user.isAdmin = this.editUser.isAdmin
    }
  },
  methods: {
    save() {
      this.$emit("save", this.user)
    },
    cancel() {
      this.$router.push({ name: "home" })
    }
  },
}
</script>

<style scoped>

</style>
