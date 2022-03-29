<template>
  <div class="contenedor">
    <h1>Pastelero</h1>
    <h2>Pedido</h2>
    <p>Nombre: {{$store.getters.Nombre}}</p>
    <p>Email: {{$store.getters.Email}}</p>
    <p>Telefono: {{$store.getters.Tel}}</p>
    <p>Numero de personas: {{$store.getters.Npersonas}}</p>
    <p>Sabor del Pan: {{$store.getters.Sabor}}</p>
    <p>Cubierta: {{$store.getters.Cubierta}}</p>
    <p>Bengala: {{$store.getters.Decoracion}}</p>
    <p>Vela de Numero: {{$store.getters.Decoracion1}}</p>
    <p>Flores: {{$store.getters.Decoracion2}}</p>
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
}
h2{
  color:#17C3B2;
  font-size: 2em;
  margin: 0;
}
.contenedor{
  width:100%;
  display: flex;
  max-width: 1100px;
  margin-left: 7%;
  flex-direction: column;
}


.contenedor p{
  text-align: justify;
  color: #FF9B71;
  margin-top: 5px;
  margin-bottom:0.5em;
  font-size: 1.5em;

}

.carta .textcaja a {
  color: #17C3B2;
  border: 2px solid #17C3B2;
  border-radius: 10px;
  padding: 1% 1% 1% 1%;
}
.carta .textcaja a:hover {
  background: #fff4b8;
}
</style>