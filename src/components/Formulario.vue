<template>

  <div class="cform">
    <form >
    
       <!--<button v-on:click="$store.dispatch('Nombre')">Mas</button>-->
        <input type="text" v-model="Nombre" placeholder="Nombre"><br>
        <input type="email" v-model="Email" placeholder="Email"><br>
        <input type="tel" v-model="Tel" placeholder="Telefono"><br>
        <label for="Npersonas" class="texto">Numero de Personas<br>
        <input type="number" v-model="Npersonas" minlength="5" maxlength="50" ><br>
        </label>
        <label for="Sabor" class="texto">Sabor del Pan<br>
        <select v-model="Sabor">
         <option disabled value="">Sabor del Pan</option>
         <option value="Vainilla">Vainilla</option>
         <option value="Chocolate">Chocolate</option>
         <option value="Zanahoria">Zanahoria</option>
         <option value="Tres Leches">Tres Leches</option>
        </select>
        </label><br>
        <label for="Cubierta" >Cubierta <br>
        <label for="merengue">
          <input class="es" type="radio" name="Cubierta" v-model="Cubierta" value="Merengue">
          Merengue</label>
        <label for="fondant">
          <input class="es" type="radio" name="Cubierta" v-model="Cubierta" value="Fondant">
          Fondant</label>
        <label for="mermelada">
          <input  class="es" type="radio" name="Cubierta" v-model="Cubierta" value="Mermelada">
          Mermelada</label>
        </label><br>
        <label class="texto">Decoraciones<br>
          <label for="bengala">
          <input  class="es" type="checkbox" v-model="Decoracion" value="bengala">
          Bengala</label>
          <label for="veladenumero">
          <input class="es" type="checkbox" v-model="Decoracion1" value="veladenumero"> 
          Vela de Número</label>
          <label for="flores">
          <input class="es" type="checkbox" v-model="Decoracion2" value="flores">
          Flores</label>
        </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  computed: {
    Npersonas: {
      get(){
        return this.$store.state.Npersonas;
      },
      set(Npersonas){
        this.$store.dispatch("Npersonas",Npersonas);
      }
    },
    Nombre: {
      get(){
        return this.$store.state.Nombre;
      },
      set(Nombre){
        this.$store.dispatch("Nombre",Nombre);
      }
    },
    Email: {
      get(){
        return this.$store.state.Email;
      },
      set(Email){
        this.$store.dispatch("Email",Email);
      }
    },
    Tel: {
      get(){
        return this.$store.state.Tel;
      },
      set(Tel){
        this.$store.dispatch("Tel",Tel);
      }
    },
    Sabor: {
      get(){
        return this.$store.state.Sabor;
      },
      set(Sabor){
        this.$store.dispatch("Sabor",Sabor);
      }
    },
    Cubierta: {
      get(){
        return this.$store.state.Cubierta;
      },
      set(Cubierta){
        this.$store.dispatch("Cubierta",Cubierta);
      }
    },
     Decoracion: {
      get(){
        return this.$store.state.Decoracion;
      },
      set(Decoracion){
        this.$store.dispatch("Decoracion",Decoracion);
      }
    },
    Decoracion1: {
      get(){
        return this.$store.state.Decoracion1;
      },
      set(Decoracion1){
        this.$store.dispatch("Decoracion1",Decoracion1);
      }
    },
    Decoracion2: {
      get(){
        return this.$store.state.Decoracion2;
      },
      set(Decoracion2){
        this.$store.dispatch("Decoracion2",Decoracion2);
      }
    }
  },
}
</script>
<style scoped>

.cform{
  /* IMPORTANTE */
  text-align: center;
  color:#FF9B71;
  font-size: 1em;
  font-weight: 900;
}

.es{
 width: 5%;
}
input{
  margin-top: 0.5em;
  width: 15em;
  margin-bottom: 1em;
  padding: 12px;
  border: 1px solid #17C3B2;
  border-radius: 4px;
  resize: vertical;
  color:#FF9B71;
}

select{
  margin-top: 1em;
  margin-bottom: 1em;
  width: 17em;
  padding: 12px;
  border: 1px solid #17C3B2;
  border-radius: 4px;
  resize: vertical;
  color:#FF9B71;
}

</style>