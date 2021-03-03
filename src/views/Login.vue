<template>
  <div class="mx-auto pa-8 mt-16 align-content-center">
    <v-card
        class="mx-auto pa-8 mt-16"
        max-width="550"
        color="#eeeeee"
        rounded
    >
    <form>
      <div class="mx-auto" style="width: 30%">
        <img src="LOGO.svg" alt="" width="100">
      </div>

      <v-text-field
          class="mt-5"
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          style="width: 350px"
          background-color="#eeeeeee"
          outlined
      ></v-text-field>

      <v-text-field
          v-model="password"
          :rules="[rules.password]"
          required
          label="Password"
          style="min-height: 96px; width: 350px;"
          type="password"
          outlined
      ></v-text-field>

      <v-btn
          tile
          class=""
          elevation="0"
          dark
          large
          to="/payments"
          @click="submit"
          style="margin-left: 120px"
      >
        <span>Выход</span>
      </v-btn>
    </form>
    </v-card>
  </div>

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
  },

  data: () => ({
    name: '',
    email: '',
    password: '',
    rules: {
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*\d).+$/) ||
          'Password must contain letter and numeric character',
      required: v => !!v || 'This field is required',
    },
  }),

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.password = ''
      this.email = ''
    },
  },

  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },
}
</script>

<style>

</style>

