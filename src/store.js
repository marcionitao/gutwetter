/* eslint no-param-reassign: "error" */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// eslint-disable-next-line max-len
// import service from '@/services/service'; // service.js fetch data from API. We will have a look at it in the next step.

Vue.use(Vuex);

export default new Vuex.Store({
  // define here data that you wish to store
  state: {
    weather: {},
    dataIsRecived: false,
  },
  // change state from here
  mutations: {
    SET_WEATHER(state, weather) {
      state.dataIsRecived = true;
      state.weather = weather;
    },
  },
  // call mutations that change the state here
  actions: {

    loadWeather: async ({ commit }, { city, country, API_KEY }) => {
      const weather = (await axios.get(`https://api.weatherbit.io/v2.0/current?city=${city},${country}&key=${API_KEY}`));
      commit('SET_WEATHER', weather.data.data[0]);
    },
  },

});
