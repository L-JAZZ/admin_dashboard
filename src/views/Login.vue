<template>
  <div class="mx-auto pa-8 mt-16">
    <v-card
        class="mx-auto pa-8 mt-16"
        max-width="550"
        min-width="550"
        color="#eeeeee"
        rounded
    >
    <form>
      <v-spacer></v-spacer>
      <div class="mx-auto">
        <img src="LOGO.svg" alt="">
      </div>

      <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
      ></v-text-field>

      <v-text-field
          v-model="password"
          :rules="[rules.password]"
          required
          label="Password"
          style="min-height: 96px"
          type="password"
      ></v-text-field>


      <v-btn
          tile
          class="mr-2 ml-2"
          elevation="0"
          dark
          large
          to="/payments "
          @click="submit"
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

