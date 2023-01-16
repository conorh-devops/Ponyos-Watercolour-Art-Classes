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

      <v-select v-if="!user.isAdmin" v-model="user.className" id="classNames" ref="classNames" label="Available classes"
        :items="classNames" :rules="[rules.required]" />

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
import api from "./../service/api.js"
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
        className: "",
        isAdmin: false
      },
      classNames: [],
      rules
    }
  },
  async mounted() {
    if (this.editUser) {
      this.user.email = this.editUser.email
      this.user.name = this.editUser.name
      this.user.className = this.editUser.className
      this.user.isAdmin = this.editUser.isAdmin
    }

    const result = await api("getClassNames")
    if (result.status !== 200)
      return window.alert("Something went wrong. Code: 4f6513d0.")

    this.classNames = JSON.parse(result.body)
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
