<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="#DE8D47"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Add Posting
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add a New Posting</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Position title*"
                      v-model="newPosting.position"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Company name*"
                      v-model="newPosting.company"
                      hint="name of the company that the position belongs to"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="URL"
                      v-model="newPosting.url"
                      hint="the URL of the original job posting"
                  ></v-text-field>
                </v-col>
                <!--              <v-col cols="12">-->
                <!--                <v-text-field-->
                <!--                    label="Email*"-->
                <!--                    required-->
                <!--                ></v-text-field>-->
                <!--              </v-col>-->
                <!--              <v-col cols="12">-->
                <!--                <v-text-field-->
                <!--                    label="Password*"-->
                <!--                    type="password"-->
                <!--                    required-->
                <!--                ></v-text-field>-->
                <!--              </v-col>-->
                <!--              <v-col-->
                <!--                  cols="12"-->
                <!--                  sm="6"-->
                <!--              >-->
                <!--                <v-select-->
                <!--                    :items="['0-17', '18-29', '30-54', '54+']"-->
                <!--                    label="Age*"-->
                <!--                    required-->
                <!--                ></v-select>-->
                <!--              </v-col>-->
                <!--              <v-col-->
                <!--                  cols="12"-->
                <!--                  sm="6"-->
                <!--              >-->
                <!--                <v-autocomplete-->
                <!--                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"-->
                <!--                    label="Interests"-->
                <!--                    multiple-->
                <!--                ></v-autocomplete>-->
                <!--              </v-col>-->
              </v-row>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              class="error--text"
              text
              @click="cancel"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="submit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
name: "AddPosting",
  data() {
    return {
      dialog: false,
      newPosting: {
        position: '',
        company: '',
        url: '',
        events: []
      }
    }
  },
  methods: {
    submit() {
      this.dialog = false
      console.log(this.newPosting.title, this.newPosting.company, this.newPosting.url)
      this.$store.dispatch('addPosting', this.newPosting)
      // Can I split this out to 'reset form' method?
      this.newPosting.position = ''
      this.newPosting.company = ''
      this.newPosting.url = ''
    },
    cancel() {
      this.dialog = false
      this.newPosting.position = ''
      this.newPosting.company = ''
      this.newPosting.url = ''
    }
  }
}
</script>

<style scoped>

</style>