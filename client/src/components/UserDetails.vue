<template>
  <div class="UserDetails">
    <v-form>

      <v-text-field v-model="user.email" type="email" label="E-mail" required id="fldEmail"></v-text-field>

      <v-text-field v-if="isSignUp" v-model="user.password" type="password" label="Password" required
        id="fldPassword"></v-text-field>

      <v-text-field v-if="isSignUp" v-model="user.passwordConfirmation" type="password" label="Password Confirmation"
        required id="fldPasswordConfirmation"></v-text-field>

      <v-text-field v-model="user.name" type="text" label="Your Name" required id="fldName"></v-text-field>

      <v-select v-model="user.className" class="classNames" label="Available classes" :items="classNames" clearable>
      </v-select>

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
  },
  data() {
    return {
      user: {
        email: "",
        name: "",
        password: "",
        passwordConfirmation: "",
        className: "",
      },
      classNames: []
    }
  },
  async mounted() {
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
      this.$emit("cancel")
    }
  },
}
</script>

<style scoped>

</style>
