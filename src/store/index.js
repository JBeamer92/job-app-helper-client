import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from "qs";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8000' // TODO: Need to make this dynamic. Docker?

export const store = new Vuex.Store({
   state: {
       token: null,
       postings: []
   },
    // use getters for computed properties
    getters: {
      loggedIn(state) {
          return state.token !== null
      },
      token(state) {
          return state.token
      },
      postings(state) {
          return state.postings
      }

    },
    // use mutations for synchronous changes
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
       },
       addPosting(state, posting) {
           state.postings.push(posting)
       }
   },
    // actions are like mutations, but allow for asynchronous code
    // most often, this is used for some sort of ajax call
    // input params are 'destructured' - grab a particular part of the context, like 'commit'
    // other option for param is to simply pass in 'context', without the braces {}
   actions: {
       clearPostings({commit}) {
           commit('clearPostings')
       },
       // Can probably optimize this action
       addPosting({commit, state}, posting) {
           return new Promise((resolve, reject) => {
               const options = {
                   method: 'POST',
                   headers: {
                       'content-type': 'application/json',
                       'Authorization': 'Bearer ' + state.token
                   },
                   data: posting,
                   url: '/postings'
               };
               axios(options)
                   .then(response => {
                       commit('addPosting', response.data)
                       resolve(response)
                   })
                   .catch(error => {
                       console.log('We done goofed: ' + error)
                       reject(error)
                   })
           })
       },
       retrieveToken({commit}, credentials) {
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
                       commit('retrieveToken', token)
                       resolve(response)
                   })
                   .catch((error) => {
                       console.log('We done goofed: ' + error)
                       reject(error)
                   })
           })
       },
       destroyToken({commit, getters}) {
           if (getters.loggedIn) {
               localStorage.removeItem('access_token')
               commit('destroyToken')
           }
       },
       retrievePostings({commit, state}) {
           axios.get('/postings', {
               headers: {
                   'Authorization': 'Bearer ' + state.token
               }
           })
           .then((response) => {
               commit('retrievePostings', response.data)
           })
           .catch((error) => {
               console.log(error)
           })
       }
   }
});