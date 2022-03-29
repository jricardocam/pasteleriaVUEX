<template>
    
   
    <nav>
        <div class="logo">
        <img src="../assets/logo.png" alt="logo">
        </div>
        <router-link to="/">Inicio </router-link> 
        <router-link to="/Pasteles">Pasteles </router-link> 
        <router-link to="/Pedido">Pedido </router-link> 
        <router-link to="/Pastelero">Pastelero</router-link>
        </nav>
        <router-view/>
</template>

<script>
    export default {
    name: 'Header',
    }
</script>
<style>

.logo{
    height: auto;
    width: 50%;
    text-align: center;
}
nav {
  padding: 10px;
  display: flex;
  overflow: hidden;
  background-color: #FF9B71;
}

nav a {
  font-weight: bold;
  color: #fff4b8;
  text-decoration: none;
  font-size: 1.5rem;
  margin-right: 1em;
  padding-top:1em;
}

nav a.router-link-exact-active {
  color: #17C3B2;
}
</style>
