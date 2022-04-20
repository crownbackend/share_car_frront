<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">ShareCar</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Listes des voitures</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <router-link v-if="!user" class="btn btn-outline-primary" to="/connexion">Connexion</router-link>
        <button v-else class="btn btn-outline-primary" @click="logOut">Deconnexion</button>
        <router-link class="btn btn-outline-secondary" v-if="!user" to="/acheter-voiture">Acheter ça voiture</router-link>
        <router-link class="btn btn-outline-secondary" v-else to="/acheter-voiture/proccess">Acheter ça voiture</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import AuthService from "@/service/AuthService";

export default {
  name: 'HeaderViews',
  data() {
    return {
      user : AuthService.getUser()
    }
  },
  methods: {
    logOut() {
      AuthService.logOut();
    }
  }
}
</script>
<style>

</style>
