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
// @ is an alias to /src
// import Example from '@/components/Example.vue'
// import axios from 'axios'

export default {
  name: 'Applications',
  components: {
    // Example
  },
  data() {
    return {
      apps: [
        {
          "position": "Developer Hardcode",
          "company": "Test Co.",
          "url": "www.anthem.com/jobs",
          "id": 1,
          "owner_id": 1,
          "events": [
            {
              "name": "Application submitted",
              "date": "12/14/2020",
              "id": 1,
              "posting_id": 3
            }
          ]
        },
        {
          "position": "QA Hardcode",
          "company": "Test & Sons",
          "url": "www.adp.com/jobs",
          "id": 2,
          "owner_id": 1,
          "events": [
            {
              "name": "Application submitted",
              "date": "12/16/2020",
              "id": 1,
              "posting_id": 3
            }
          ]
        }
      ]
    }
  }
}
</script>
