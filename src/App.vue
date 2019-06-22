<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view/>

  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400&display=swap&subset=cyrillic');

  body {
    font-family: 'Montserrat', sans-serif;
    max-height: 100vh;
  }

  a {
    color: #153B50;
    text-decoration-color: rgba($color: #153B50, $alpha: 0.5);
    transition: all 0.3s ease;

    &:hover {
      text-decoration-color: #153B50;
    }
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .nav__link {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

</style>
