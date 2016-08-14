<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>

<template>
  <div>
   Title:<input type="text"></input>
 </div>
 <div>
   Description:<input type="text"></input>
  </div>
  <button class='btn' @click='submit'>submit</button>
</template>

<script>
import { submit } from '../Vuex/actions'
export default {
  vuex: {
    actions: {
      submit
    }
  }
}
</script>


