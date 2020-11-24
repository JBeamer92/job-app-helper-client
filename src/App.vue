<template>
  <v-app>
<!--Navigation-->
    <v-app-bar
      app
      color="#868685"
      dark
      hide-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title>Job App Helper</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>Register</v-btn>
        <v-btn text>Login</v-btn>
      </v-toolbar-items>
    </v-app-bar>
<!--Body-->
    <v-content>
      <HelloWorld/>
    </v-content>
<!--Footer-->
    <v-footer
        app
        padless
        color="#868685"
        dark
    >
      <v-col class="text-center" cols="12">
        Copyright&nbsp; &copy; {{ new Date().getFullYear() }}, <strong>JBDevApps</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    //
  }),
};
</script>
