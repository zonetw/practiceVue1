<template>
  <SearchBar v-on:termChange="onTermChange"></SearchBar>
</template>

<script>
import SearchBar from "./components/SearchBar";
export default {
  // el > no need to add el,
  name: "App", // add name to make debugging more easier
  // use components object to setup the all components will be used inside the template
  components: {
    SearchBar
  },
  methods: {
    onTermChange: function(value) {
      window.console.log("[App] " + value);
    }
  }
};
</script>

<style>
</style>
