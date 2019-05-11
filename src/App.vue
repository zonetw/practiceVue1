<template>
  <SearchBar></SearchBar>
</template>

<script>
import SearchBar from "./components/SearchBar";
export default {
  // el > no need to add el,
  name: "App", // add name to make debugging more easier
  // use components object to setup the all components will be used inside the template
  components: {
    SearchBar
  }
};
</script>

<style>
</style>
