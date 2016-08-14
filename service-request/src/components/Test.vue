<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
  <button class=""@click="message">save</button>
</template>

<script>
import SOAPClientParameters from '../soapclient.js'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Test!'
    }
  },
  methods: {
    message: function () {
      // this.msg = this.msg.split('').reverse().join('')
      var param = new SOAPClientParameters();  
      param.add('name',this.msg);  
      var result = SOAPClient.invoke("http://isupport.cuhk.edu.cn:8080/arsys/services/ARService?server=itsm-app&webService=HPD_HelpDesk_WebService", "New_Create_Operation_0", param, false);  
      return result;  
    }
  }
}
</script>


