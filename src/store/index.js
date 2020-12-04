import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from "qs";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8000' // TODO: Need to make this dynamic. Docker?

export const store = new Vuex.Store({
   state: {
       token: null
   },
   mutations : {
       retrieveToken(state, token) {
           state.token = token
       }
   },
   actions: {
       retrieveToken(context, credentials) {
           const data = {
               'grant_type': 'password',
               'username': credentials.email,
               'password':  credentials.password
           };
           const options = {
               method: 'POST',
               headers: { 'content-type': 'application/x-www-form-urlencoded' },
               data: qs.stringify(data),
               url: '/token'
           };
           axios(options)
               .then((response) => {
                   console.log(response)
                   const token = response.data.access_token
                   localStorage.setItem('access_token', token)
                   context.commit('retrieveToken', token)
               })
               .catch((error) => {
                   console.log('We done goofed: ' + error)
               })
       }
   }
});