

<template>

  <div id="app">
    <img src="src\images\greedom.png"> <br/>

    Rue de Genève 6, 1225 Chêne-Bourg, SUISSE </br>
    +41 22-256 02 59 </br> </br>
      <!--v-bind:to définit le chemin internet -->
      <router-link v-bind:to="'/'">Accueil</router-link>
      <router-link v-bind:to="'/Produits'">Produits</router-link>
      <router-link v-bind:to="'/Panier'">Panier</router-link>
      <router-link v-bind:to="'/Connexion'">Connexion</router-link>
      <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'app',
  }
</script>

<!-- styling for the component -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
