<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image</a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <!-- navigation by router-link -->
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a @click="logout" class="item">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
