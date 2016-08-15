<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
<p>
   <router-view></router-view>
</p>

    <p>
      <h3 style='color: #42b983'>Welcome to CUHKSZ<h3>
    </p>

  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Count from './components/Count.vue'
import Request from './components/Request.vue'
export default {
  components: {
    Hello,
    Count,
    Request
  }

}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
