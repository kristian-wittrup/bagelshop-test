<template>
  <div>
    <v-navigation-drawer
      color="primary"
      v-model="drawer"
      app> 
      <div v-if="currentUser">

        <v-card
            class="mx-auto"
            max-width="200"
            tile
          >
            <v-img
              height="100%"
              src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
            >
              <v-row
                align="end"
                class="fill-height"
              >
                <v-col
                  align-self="start"
                  class="pa-0"
                  cols="12"
                >
                  <v-avatar
                    class="profile"
                    color="grey"
                    size="65"
                    tile
                  >
                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                  </v-avatar>
                </v-col>
                <v-col class="py-0">
                  <v-list-item
                    color="rgba(0, 0, 0, .4)"
                    dark
                  >
                    <v-list-item-content>
                      <v-list-item-title class="title">{{ currentUser.email }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-img>
          </v-card>




      </div>
      <ul>
        <router-link tag="li" to="/" ><v-icon color="orange">home</v-icon> Home </router-link>
        <router-link tag="li" to="/menu" ><v-icon color="orange">restaurant_menu</v-icon> Menu </router-link>
        <router-link tag="li" to="/about"><v-icon color="inprogress">info</v-icon> About </router-link>
        <router-link tag="li" to="/login"><v-icon color="inprogress">info</v-icon> Login </router-link>
        <router-link tag="li" to="/admin"><v-icon color="inprogress">lock</v-icon> Admin </router-link>
      </ul> 
    </v-navigation-drawer>

    <v-app-bar
      app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span>BAGELS BY</span>
        <span class="font-weight-light">JERRY McBAGEL</span>
        </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { db } from '../../firebase'

import firebase from 'firebase'
import 'firebase/firestore'
import store from '../store.js'

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('setUser', user)
  } else {
    store.dispatch('setUser', null)
  }
});


  export default {
    data: () => ({
      drawer: null,
    }),
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      }
    }  
  }
</script>

<style lang="scss" scoped>
  nav ul {
    padding: 0;
    margin-top: 20px;
    text-decoration: none;
  }
  nav li {
    color:map-get($colorz, orange);
    margin-left:15%;
    padding:5px 20px;
    list-style-type: none;
    cursor: pointer;
 }
  nav li i {
    margin-right:10px;
  }
  nav li:last-child {
    position: absolute;
    bottom:40px;
    color: map-get($colorz , inprogress )
  }

</style>