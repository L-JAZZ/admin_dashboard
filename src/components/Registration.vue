<template>
  <div class="mx-auto pa-8 mt-16">
    <router-view/>
    <v-card
        class="mx-auto pa-8 mt-16"
        max-width="550"
    >
      <form>
        <h1>Register</h1>

        <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
        ></v-text-field>

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
            type="password"
        ></v-text-field>

        <v-text-field
            v-model="password2"
            :rules="[rules.password]"
            required
            label="Password"
            type="password"
        ></v-text-field>

        <v-btn
            class="green theme--dark mr-4"
            @click="submit"
        >
          submit
        </v-btn>
        <v-btn
            class="orange theme--dark mr-4"
            @click="clear">
          clear
        </v-btn>
        <v-btn to="/login">
          Login
        </v-btn>
      </form>
    </v-card>
  </div>

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Registration',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
  },

  data: () => ({
    name: '',
    email: '',
    password: '',
    password2: '',
    rules: {
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*\d).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
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
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
  },
}
</script>

<style scoped>
/*#content{*/
/*  width: 50%;*/
/*  align-content: center;*/
/*  border-color: aquamarine;*/
/*}*/
</style>
