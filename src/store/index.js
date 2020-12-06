import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from "qs";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8000' // TODO: Need to make this dynamic. Docker?

export const store = new Vuex.Store({
   state: {
       token: null,
       applications: null
   },
    getters: {
      loggedIn(state) {
          return state.token !== null
      }
    },
   mutations : {
       retrieveToken(state, token) {
           state.token = token
       },
       destroyToken(state) {
           state.token = null
       },
       retrieveApplications(state, applications) {
           state.applications = applications
       }
   },
   actions: {
       retrieveToken(context, credentials) {
           return new Promise((resolve, reject) => {
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
                       const token = response.data.access_token
                       localStorage.setItem('access_token', token)
                       context.commit('retrieveToken', token)
                       resolve(response)
                   })
                   .catch((error) => {
                       console.log('We done goofed: ' + error)
                       reject(error)
                   })
           })
       },
       destroyToken(context) {
           // TODO: implement API method to destroy token on server-side
           if (context.getters.loggedIn) {
               localStorage.removeItem('access_token')
               context.commit('destroyToken')
           }
       },
       retrieveApplications() {
           return new Promise( (resolve, reject) =>{
               axios.get('/apps')
                   .then((response) => {
                       console.log(response)
                       resolve(response)
                   })
                   .catch((error) => {
                       console.log(error)
                       reject(error)
                   })
           })
       }
   }
});