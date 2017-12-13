<template>
  <div class="param">
    <input type="text" size="30" v-model="UserInput" />
    <input type="button" value="Rechercher" @click="GoToRoute()">
</div>
</template>

<script>
  export default {
    name: 'Connexion',
    data () {
      return {
        UserInput :''
      }
    },

    methods: {
      GoToRoute : function() {
        //params = nom de la route
        this.$router.push({ name: 'user', params: { id: this.UserInput }})
      }
    }
  }
</script>
