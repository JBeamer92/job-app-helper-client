<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Stop. Demo time.
          </h1>

          <p class="subheading font-weight-regular">
            Placeholder for Demo page.
          </p>

          <h1>Applications</h1>
          <v-data-table
          :items="apps"
          :headers="headers"
          :item-key="id"
          >

          </v-data-table>

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
  name: 'Demo',
  components: {
    // Example
  },
  data() {
    return {
      headers: [
        { text: 'Company', align: 'start', value: 'company.name' },
        { text: 'Position', value: 'position.title'},
        { text: 'Location', value: 'position.location.city'},
        { text: 'URL', value: 'position.url'},
        { text: 'Status', value: 'events[0].type'},
        { text: 'Updated', value: 'events[0].date'}
      ],
      apps: [
        {
          'id': 1,
          'company': {
            id: 1,
            'name': 'Anthem'
          },
          'position': {
            'title': 'Developer I',
            'id': null,
            'url': 'www.sample.com',
            'location': {
              'city': 'Indianapolis',
              'state': 'IN'
            }
          },
          'events': [
            {
              'type': 'APPLIED',
              'date': '10/15/2020'
            }
          ]
        }
      ]
    }
  }
}
</script>
