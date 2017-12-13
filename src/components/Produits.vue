<template>
  <div id="produits">
    <h1>Liste des produits </h1>

      <li v-for="item in items">
        {{ item.nom }}
      </li>

  </div>
</template>

<script>
  export default {
    name: 'Produits',
    data () {
      return {
        items: [
          { nom: 'Lampe' },
          { nom: 'Broche' },
          { nom: 'Ampoule' },
          { nom: 'Bateau' }
      ]}
    }
  }

</script>

<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
