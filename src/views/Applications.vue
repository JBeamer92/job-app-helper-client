<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1>Postings Go Here</h1>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th>Position</th>
                <th>Company</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="app in apps" :key="app.id">
                <td>{{ app.position }}</td>
                <td>{{ app.company }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Applications',
  data() {
    return {

    }
  },
  computed: {
    apps() {
      return this.$store.getters.postings
    }
  }
}
</script>
