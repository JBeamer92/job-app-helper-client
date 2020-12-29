<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1>Postings Go Here</h1>
          <AddPosting></AddPosting>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th>Position</th>
                <th>Company</th>
                <th></th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="app in apps" :key="app.id">
                <td>{{ app.position }}</td>
                <td>{{ app.company }}</td>
                <td>
                  <v-btn
                      icon
                      color="grey">
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn
                      icon
                      color="grey"
                      @click="removePosting(app.id)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </td>
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
import AddPosting from "@/components/postings/AddPosting";

export default {
  name: 'Applications',
  components :{
    AddPosting
  },
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch('retrievePostings')
  },
  methods: {
    removePosting(posting_id) {
      console.log('Deleting posting with ID:  ' + posting_id.toString())
      this.$store.dispatch('deletePosting', posting_id)
    }
  },
  computed: {
    apps() {
      return this.$store.getters.postings
    }
  }
}
</script>
