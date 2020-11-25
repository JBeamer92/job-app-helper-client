<template>
  <v-container>

    <v-row class="text-center">
      <v-col class="col-12">
        <h1 class="display-2 font-weight-bold mb-3">
          Start your registration now!
        </h1>
        <p>We'll send an email when the site is ready so you can complete your registration</p>
        <div style="height: 50px"></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-md-6 offset-md-3">
        <v-form>
          <!--          <v-text-field-->
          <!--              v-model="username"-->
          <!--              :error-messages="usernameErrors"-->
          <!--              :counter="20"-->
          <!--              label="Name"-->
          <!--              @input="$v.username.$touch()"-->
          <!--              @blur="$v.username.$touch()"-->
          <!--          ></v-text-field>-->
          <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn
          class="mr-4"
          color="#DE8D47"
          @click="submit"
      >
        email me
      </v-btn>
    </v-row>
  </v-container>
</template>


<script>

import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'Register',
  validations: {
    username: { required, maxLength: maxLength(25) },
    email: { required, email },
  },

  data: () => ({
    username: '',
    email: ''
  }),

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength && errors.push('Username must be at most 20 characters long')
      !this.$v.username.required && errors.push('Username is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
      alert('This functionality is coming soon')
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
}
</script>

<style scoped>

</style>