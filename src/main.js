import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'normalize.css'; // Normalize.css lib to reset default styles

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
