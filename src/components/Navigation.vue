<template>
  <v-app-bar
      app
      color="#868685"
      dark
      dense
      hide-on-scroll
  >
    <div class="d-flex align-center">
      <v-toolbar-title @click="$router.push('/')" style="cursor:pointer">AppTrack Studio</v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" text exact-active-class="">Home</v-btn>
      <v-btn v-if="loggedIn" to="/apps" text exact-active-class="">Apps</v-btn>
      <v-btn v-if="!loggedIn" to="/register" text exact-active-class="">Register</v-btn>
      <v-btn v-if="!loggedIn" to="/login" text exact-active-class="">Login</v-btn>
      <v-btn v-if="loggedIn" to="/logout" text exact-active-class="">Logout</v-btn>

    </v-toolbar-items>
    <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  }
}
</script>

<style scoped>

</style>