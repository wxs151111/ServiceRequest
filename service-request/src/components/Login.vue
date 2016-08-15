<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color:  #42b983;
}
</style>

<template>
<h1  style="padding:1ex 0">
ITSM System
</h1>
<div class="row"  style="padding:2ex 0">
<div class='col-xs-4'>
   Username:
</div>
<div class='col-xs-8'>
<input type="text"></input>
</div>
</div>
<div class="row"  style="padding:2ex 0">
<div class='col-xs-4'>
Password:
</div>

<div class='col-xs-8'>
   <input type="text"></input>
  </div>
</div>
<div style="padding:2ex 0">
  <button class='btn btn-block' style='background-color: #42b983;color:#FFF' @click='rexlogin'>login</button>
</div>
</template>

<script>
import { rexlogin } from '../Vuex/actions'
import { getStatus } from '../Vuex/getters'
export default {
  vuex: {
    actions: {
      rexlogin
    },
    getters: {
      getStatus
    }
  }
}
</script>
