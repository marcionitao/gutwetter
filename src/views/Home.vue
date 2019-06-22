<template>
  <div class="home">

    <weatherWidget />

  </div>
</template>

<script>
// @ is an alias to /src
import weatherWidget from '@/components/weatherWidget.vue';

export default {
  name: 'home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    weatherWidget,
  },
};
</script>

<style lang="scss" scoped> // some styles 🖍️
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
