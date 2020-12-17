import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from "qs";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8000' // TODO: Need to make this dynamic. Docker?

export const store = new Vuex.Store({
   state: {
       token: null,
       postings: null
   },
    getters: {
      loggedIn(state) {
          return state.token !== null
      },
      token(state) {
          return state.token
      }
    },
   mutations : {
       clearPostings(state) {
           state.postings = null
       },
       retrieveToken(state, token) {
           state.token = token
       },
       destroyToken(state) {
           state.token = null
       },
       retrievePostings(state, postings) {
           state.postings = postings
       }
   },
   actions: {
       clearPostings(context) {
           context.commit('clearPostings')
       },
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
           if (context.getters.loggedIn) {
               localStorage.removeItem('access_token')
               context.commit('destroyToken')
           }
       },
       retrievePostings(context) {
           axios.get('/postings', {
               headers: {
                   'Authorization': 'Bearer ' + context.state.token
               }
           })
           .then((response) => {
               context.commit('retrievePostings', response.data)
           })
           .catch((error) => {
               console.log(error)
           })
       }
   }
});