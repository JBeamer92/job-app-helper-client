<template>
  <v-app>
<!--Navigation-->
    <Navigation/>
<!--Body-->
    <v-main>
      <router-view/>
    </v-main>
<!--Footer-->
    <Footer/>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
