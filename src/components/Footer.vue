<template>
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
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>