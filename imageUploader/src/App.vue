<template>
  <div id="app">
    <AppHeader></AppHeader>
    <!-- router-view will be replaced by another component by VueRouter's config -->
    <router-view></router-view>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "app",
  components: {
    AppHeader
  }
};
</script>

<style>
</style>
