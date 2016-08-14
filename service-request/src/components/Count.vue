<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>

<template>
  <div>
    <h1>count:{{ getCount }}</h1>
  </div>
  <button @click='addTest'>add</button>
</template>

<script>
import { addTest } from '../Vuex/actions'
import { getCount } from '../Vuex/getters'
export default {
  vuex: {
    actions: {
      addTest
    },
    getters: {
      getCount
    }
  }
}
</script>