<template>
  <v-container></v-container>
</template>

<script>
export default {
  name: "Logout",
  created() {
    this.$store.dispatch('clearApplications')
    this.$store.dispatch('destroyToken')
        // eslint-disable-next-line no-unused-vars
        .then( response => {
          this.$router.push({name: 'Home'})
        })
  }
}
</script>

<style scoped>

</style>