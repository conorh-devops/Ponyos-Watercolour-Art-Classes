<template>
  <div class="UserDetails">
    <v-form ref="formUserDetails">
      <v-text-field
        v-model="user.uEmail"
        :disabled="Boolean(editUser)"
        type="email"
        label="E-mail"
        id="fldEmail"
        ref="fldEmail"
        autocomplete="email"
        :rules="[rules.required, rules.email]"
      />

      <v-text-field
        v-if="isSignUp"
        v-model="user.uPassword"
        type="password"
        label="Password"
        id="fldPassword"
        ref="fldPassword"
        autocomplete="new-password"
        :rules="[rules.required]"
      />

      <v-text-field
        v-if="isSignUp"
        v-model="user.uPasswordConfirmation"
        type="password"
        label="Password Confirmation"
        id="fldPasswordConfirmation"
        ref="fldPasswordConfirmation"
        autocomplete="new-password"
        :rules="[rules.required]"
      />

      <v-text-field
        v-model="user.uName"
        type="text"
        label="Your Name"
        required
        id="fldName"
        :rules="[rules.required]"
      />

      <template v-if="showCourses">
        <br />
        <p>Courses</p>
        <v-chip-group class="primary--text" v-if="user.courses">
          <v-chip
            v-for="course in Object.keys(user.uCourses)"
            :key="course"
            disabled
          >
            {{ course }}
          </v-chip>
        </v-chip-group>

        <br />
      </template>
      <br />
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
      default: false,
    },
    hideCancel: {
      type: Boolean,
      default: false,
    },
    editUser: {
      type: Object,
      default: null,
    },
    showCourses: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: {
        uEmail: "",
        uName: "",
        uPassword: "",
        uPasswordConfirmation: "",
        uIsAdmin: false,
      },
      rules,
    }
  },
  async mounted() {
    if (this.editUser) {
      this.user.uEmail = this.editUser.uEmail
      this.user.uName = this.editUser.uName
      this.user.uCourses = this.editUser.uCourses
      this.user.uIsAdmin = this.editUser.uIsAdmin
    }
  },
  methods: {
    save() {
      this.$emit("save", this.user)
    },
    cancel() {
      this.$emit("cancel")
    },
  },
}
</script>

<style scoped>
</style>
