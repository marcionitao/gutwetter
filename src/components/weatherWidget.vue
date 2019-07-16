<template>

  <div>

    <div>
      <label for="city">City</label>
      <input type="text" id="city" v-model="city">
      <label for="country">Country</label>
      <input type="text" id="country" v-model="country">

      <a class="waves-effect waves-light btn-small" @click="authChatClient()">Search</a>
    </div>

    <div v-if="this.$store.state.dataIsRecived" class="weather-widget">
      <p class="weather-widget__city">{{ weather.city_name }}</p>
      <h2 class="weather-widget__temp">{{ weather.temp }}<span>°C</span></h2>
      <p class="weather-widget__status">{{ weather.weather.description }}</p>

      <img v-bind:src=" 'https://www.weatherbit.io/static/img/icons/' + weather.weather.icon + '.png' ">
    </div>
    <div v-else class="weather-widget"> // preloader
      <img src="spinner.svg" alt="">
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
// eslint-disable-next-line no-unused-vars
import { API_KEY } from '@/constants';

export default {
  name: 'weatherWidget',
  data() {
    return {
      city: 'Lisbon',
      country: 'PT',
      api_key: API_KEY,
    };
  },
  mounted() {
    this.authChatClient();
  },
  methods: {

    authChatClient() {
      const payload = {
        city: this.city,
        country: this.country,
        API_KEY: this.api_key,
      };
      this.$store.dispatch('loadWeather', payload);

      // para limpar os campos
      this.city = '';
      this.country = '';
    },
  },
  computed: {
    ...mapState(['weather']),
  },

};
</script>

<style lang="scss" scoped> // some styles 🖍️
  .weather-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #429EA6;
  }

  .weather-widget__city {
    font-size: 22px;
    margin: 0;
  }

  .weather-widget__temp {
    display: flex;
    align-items: flex-start;
    color: #16F4D0;
    font-size: 130px;
    font-weight: 200;
    margin: 0;

    span {
      font-size: 30px;
      font-weight: 400;
      margin-top: 30px;
    }
  }

  .weather-widget__status {
    font-size: 20px;
    margin: 0;
  }
</style>
