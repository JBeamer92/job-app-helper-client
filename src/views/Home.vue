<template>
  <div class="home">
    <v-container>
      <v-row v-if="!this.$store.getters.loggedIn" class="text-center">
        <v-col cols="12">
          <v-img
              :src="require('../assets/girl-laptop.png')"
              class="my-3"
              contain
              height="325"
          />
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Track. Analyze. Adapt.
          </h1>

          <p class="subheading font-weight-regular">
            Landing the right job can be painful. Resumes. Cover letters. Tracking applications. Job requirements. It can all be overwhelming.<br>
            Our mission is simple: <strong>Take the stress out of looking for jobs.</strong>
          </p>
          <h3>More Coming Very Soon</h3>
        </v-col>

        <v-col
            class="mb-5"
            cols="12"
        >
          <h2 class="headline font-weight-bold mb-3">
            Don't Miss Out
          </h2>

          <v-row justify="center">
            <v-btn
                color="#DE8D47"
                to="/register"
            >
              Register Now
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="this.$store.getters.loggedIn" class="text-center">
        <h1>You're logged in!</h1>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
