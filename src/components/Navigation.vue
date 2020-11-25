<template>
  <v-app-bar
      app
      color="#868685"
      dark
      hide-on-scroll
  >
    <div class="d-flex align-center">
      <v-toolbar-title @click="$router.push('/')" style="cursor:pointer">App Track Studio</v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" text exact-active-class="">Home</v-btn>
      <v-btn to="/register" text exact-active-class="">Register</v-btn>
      <v-btn to="/login" text exact-active-class="">Login</v-btn>
    </v-toolbar-items>
    <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
name: "Navigation"
}
</script>

<style scoped>

</style>