<template>
 
    <img alt="Pasteles" src="../assets/pasteles.jpg">
    <div class="boton"><BHacerPedido/></div>

  <div class="nosotros">
    <h1>Nosotros</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Quia, amet repellendus! Autem blanditiis accusantium minus asperiores reiciendis 
     voluptatibus praesentium, magnam cum quos. Nisi error dolore, accusantium facilis
      nobis fugit. Asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Quia, amet repellendus! Autem blanditiis accusantium minus asperiores reiciendis 
     voluptatibus praesentium, magnam cum quos. Nisi error dolore, accusantium facilis
      nobis fugit. Asperiores</p>
      
  </div>
  <Pie/>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'-->
import BHacerPedido from '@/components/BHacerPedido.vue'
import Pie from '@/components/Pie.vue'

export default {
  name: 'HomeView',
  components: {
    BHacerPedido,
    Pie
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: auto;
  margin-bottom: -4.3em;
}
.boton{
  position: relative;
  bottom: 100px;
  margin-left: 41%;
  display: block;
}
.nosotros{
  padding: 2em;
  background-color: #17C3B2;
}
p{
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  text-align: justify;
}
</style>