<template>
  <div>
    <h1>Pasteles</h1>

    <div class="contenedor">
        <div class="carta">
            <figure>
                <img src="../assets/fondant.jpg" alt="">
            </figure>
            <div class="textcaja">
                <h3>Fondant</h3>
                <p class="tcaja">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem et sagittis laoreet. 
                    Sed eu elit tellus. Fusce dictum magna sit amet interdum pharetra.
                     Integer at turpis ultrices dui pretium malesuada. Mauris eu ex porttitor, tristique sem non, rhoncus tellus.</p>
                <BHacerPedido/>
            </div>
        </div>

        <div class="carta">
            <figure>
                <img src="../assets/chocolate.jpg" alt="">
            </figure>
            <div class="textcaja">
                <h3>Chocolate</h3>
                <p class="tcaja">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem et sagittis laoreet. 
                    Sed eu elit tellus. Fusce dictum magna sit amet interdum pharetra.
                     Integer at turpis ultrices dui pretium malesuada. Mauris eu ex porttitor, tristique sem non, rhoncus tellus.</p>
                <BHacerPedido/>
            </div>
        </div>
        <div class="carta">
            <figure>
                <img src="../assets/zanahoria.jpg" alt="">
            </figure>
            <div class="textcaja">
                <h3>Zanahoria</h3>
                <p class="tcaja">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem et sagittis laoreet. 
                    Sed eu elit tellus. Fusce dictum magna sit amet interdum pharetra.
                     Integer at turpis ultrices dui pretium malesuada. Mauris eu ex porttitor, tristique sem non, rhoncus tellus.</p>
                <BHacerPedido/>
            </div>
        </div>
    </div>

    <!---------------------------->

    <div class="contenedor">
        <div class="carta">
            <figure>
                <img src="../assets/pay.jpg" alt="">
            </figure>
            <div class="textcaja">
                <h3>Pay</h3>
                <p class="tcaja">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem et sagittis laoreet. 
                    Sed eu elit tellus. Fusce dictum magna sit amet interdum pharetra.
                     Integer at turpis ultrices dui pretium malesuada. Mauris eu ex porttitor, tristique sem non, rhoncus tellus.</p>
                <BHacerPedido/>
            </div>
        </div>

        <div class="carta">
            <figure>
                <img src="../assets/mfruta.jpg" alt="">
            </figure>
            <div class="textcaja">
                <h3>Merengue</h3>
                <p class="tcaja">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem et sagittis laoreet. 
                    Sed eu elit tellus. Fusce dictum magna sit amet interdum pharetra.
                     Integer at turpis ultrices dui pretium malesuada. Mauris eu ex porttitor, tristique sem non, rhoncus tellus.</p>
                <BHacerPedido/>
            </div>
        </div>
        <div class="carta">
            <figure>
                <img src="../assets/mermelada.jpg" alt="">
            </figure>
            <div class="textcaja">
                <h3>Mermelada</h3>
                <p class="tcaja">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis sem et sagittis laoreet. 
                    Sed eu elit tellus. Fusce dictum magna sit amet interdum pharetra.
                     Integer at turpis ultrices dui pretium malesuada. Mauris eu ex porttitor, tristique sem non, rhoncus tellus.</p>
                <BHacerPedido/>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import BHacerPedido from '@/components/BHacerPedido.vue'

export default {
  name: 'Pasteles',
  components: {
    BHacerPedido,
  }
}
</script>

<style scoped>

h1{
  text-align: center;
}
.contenedor{
  width:100%;
  display: flex;
  max-width: 1100px;
  margin-left: 7%;

}

.carta{
  width:100%;
  margin: 20px;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 1px 10px rgb(0, 0, 0,0.2);
  cursor:default;
  transition: all 400ms ease;
 
}
.carta:hover{
  box-shadow: 5px 5px 20px rgb(0,0,0,0.5);
  transform: translateY(-2%);
}
.carta img{
  width:100%;
  height:auto;
  max-height: 180px;
}

.textcaja{
  padding: 15px;
  text-align: center;
  margin-bottom: 5%;
}

.carta .textcaja p{
  text-align: justify;
  color: #FF9B71;
  margin-top: 10px;
  margin-bottom: 50px;
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