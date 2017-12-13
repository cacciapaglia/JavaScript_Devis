
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Produits from './components/Produits'
import Connexion from './components/Connexion'
import ConnexionDetails from './components/ConnexionDetails'
import Panier from './components/Panier'
import jsonData from './Data/Donnees.json'

//Vue utilise le VueRouter
Vue.use(VueRouter)

//Les routes
const routes = [
  //Quel composants on ouvre à quel adresse
  { path: '/', component: Hello },
  { path: '/Produits', component: Produits },
  { path: '/Panier', component: Panier },
  { path: '/Connexion', component: Connexion },
  //:id l'espace de la route..   Name :  nom de la route
  { path: '/ConnexionDetails/:id', component: ConnexionDetails, name: 'user' }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes: routes
  //mode: 'history'
})

//Route guard : gardien qui regarde s'il y a eu des actions avant de passer à la prochaine route
router.beforeEach((to, from, next) => {
  if(to.path == '/Connexion'){
    if(localStorage.getItem('user')==undefined){
      var user = prompt("Veuillez entrer votre nom d'utilisateur.");
      var pass = prompt('Veuillez entrer votre mot de passe.');
      console.log(user);
      console.log(pass);
      if (user == localStorage.getItem('nom') && pass == localStorage.getItem('mdp')){
        next();
      } else {
          alert('Mauvais utilisateur ou mot de passe, accès refusé.');
        return;
      }
    }
  }
   next()
})


//Vue instance
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
}).$mount('#app')//mount the router on the app
