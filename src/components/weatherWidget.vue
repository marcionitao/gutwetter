<template>

  <div>

    <!-- <div>
      <input type="text" v-model="city">
      <input type="text" v-model="country">
      <button @click="Load()">Load</button>
    </div> -->

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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'weatherWidget',
  data() {
    return {
      city: 'Lisbon',
      country: 'PT',
    };
  },
  mounted() {
    this.loadWeather();
  },
  methods: {
    ...mapActions(['loadWeather']),
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
    font-size: 20px;
    margin: 0;
  }

  .weather-widget__temp {
    display: flex;
    align-items: flex-start;
    color: #16F4D0;
    font-size: 200px;
    font-weight: 200;
    margin: 0;

    span {
      font-size: 30px;
      font-weight: 400;
      margin-top: 35px;
    }
  }

  .weather-widget__status {
    font-size: 20px;
    margin: 0;
  }
</style>
