<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="col-12">
        <div style="height: 200px"></div>
        <h1 class="display-2 font-weight-bold mb-3">
          Login
        </h1>
        <div style="height: 50px"></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-md-6 offset-md-3">
        <v-form>
          <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
              type="password"
              v-model="password"
              :error-messages="passwordErrors"
              label="Password"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
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
        Login
      </v-btn>
    </v-row>
  </v-container>
</template>


<script>

import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'
import qs from 'qs'


export default {
  mixins: [validationMixin],
  name: 'Login',
  validations: {
    password: { required },
    email: { required, email },
  },

  data: () => ({
    email: '',
    password: '',
    access_token: ''
  }),

  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      const data = {
        'grant_type': 'password',
        'username': this.email,
        'password':  this.password
      };
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: 'http://localhost:8000/token'
      };
      axios(options)
          .then((response) => {
            this.access_token = response.data.access_token
          })
          .catch((error) => {
            console.log('We done goofed: ' + error)
          })
    }
  }
}
</script>

<style scoped>

</style>