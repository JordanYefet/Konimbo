new Vue({ })

<template>
  <div id="app">
    <Header class="header"></Header>
    <router-view>
      <Home></Home>
    </router-view>
    <p id="credit">powered by Jordan Yefet</p>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",

  components: {
    Header,
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  max-width: 1200px;
  min-width: 350px;
  margin-left: 25%;
  margin-right: 25%;
}

@media screen and (max-width: 500px) {
  #app {
    margin-left: auto;
    margin-right: auto;
  }
}
p {
  margin: 0;
}

#credit {
  margin-top: 10px;
}
</style>
