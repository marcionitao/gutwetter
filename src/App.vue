<template>
  <div id="app">
<!--
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
-->
    <div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>

    <div>
      <h5>My GutWetter</h5>
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

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #429EA6;
}

nav li {
  display: inline-block
}

nav li router-link{
  display: block;
  color: white;
  text-align: center;
  //padding: 15px 18px;
  text-decoration: none;
  font-family: sans-serif;
}

nav li a:hover {
  background-color: #111;
}
/*
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
    padding: 5px;
    margin-bottom: 10px;
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
*/
</style>
