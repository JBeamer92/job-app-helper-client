import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from "qs";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8000' // TODO: Need to make this dynamic. Docker?

export const store = new Vuex.Store({
   state: {
       token: null,
       postings: [
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
       // can also 'destructure' the input params and just grab a particular part of the context, like 'commit'
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