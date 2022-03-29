<template>
  <div>
    <h1>Pedido</h1>
    <Formulario/>
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '@/components/Formulario.vue'

export default {
  name: 'Pastelero',
  components: {
    Formulario
  }
}
</script>

<style scoped>
h1{
  text-align: center;
  font-weight: bold;
  margin: 0px;
  border: solid 10px rgb(255, 255, 255);
  color:#FF9B71;
}
</style>
