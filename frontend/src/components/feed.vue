<template>
  <div class="ban-g" >
    <nav id="nav">
      <img src="../assets/logo.png" alt="logo" />
      <ul class="links">
        <li><router-link to="/feed">Accueil</router-link></li>
        <li><router-link to="/profile"> Profil</router-link></li>
        <li><a to="/login" v-on:click="Logout()"> Déconnexion</a></li>
      </ul>
    </nav>
    
    <h2>Accueil</h2>
    <div>
      <newMessage />
    </div>
    <div>
      <loadMessages />
    </div>
   
    
  </div>
</template>


<script>
import loadMessages from "./loadMessages";
import newMessage from "./newMessage";



export default {
  name: "feed",
  components: {
    loadMessages,
    newMessage,
    
  },
  data() {
    return {
      token: "",
      allMessages: [],
    };
  },
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

.ban-g {
    background: url("../assets/banniere.jpg") no-repeat!important;
    background-size: cover!important;
    
    
    z-index: 0;
}


</style>