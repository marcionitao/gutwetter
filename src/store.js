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
    SET_WEATHER(state, weather) {
      state.dataIsRecived = true;
      state.weather = weather;
    },
  },
  // call mutations that change the state here
  actions: {
    loadWeather: async ({ commit }) => {
      const weather = (await service.getWeather());
      commit('SET_WEATHER', weather.data.data[0]);
    },
  },

});
