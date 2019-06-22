/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import service from '@/services/service'; // service.js fetch data from API. We will have a look at it in the next step.

Vue.use(Vuex);

export default new Vuex.Store({
  // define here data that you wish to store
  state: {
    weather: {},
    dataIsRecived: false,
  },
  // change state from here
  mutations: {
    UPDATE_WEATHER(state) {
      service
        .getWeather() // call the function from service.js that returns the data from API
        .then((response) => { // if the response was get
          state.weather = response.data.data[0]; // set weather obj in state to real weather obj
          state.dataIsRecived = true; // mark that data was recived
          console.log(response); // and log it
        })
        .catch((error) => { // if there was an error
          console.log('There was an error:', error.response); // log it
          state.dataIsRecived = false; // and mark that data wasn't recived
        });
    },
  },
  // call mutations that change the state here
  actions: {
    updateWeather(context) {
      context.commit('UPDATE_WEATHER');
    },
  },
});
