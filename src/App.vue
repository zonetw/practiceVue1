<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import axios from "axios";

const API_KEY = "AIzaSyBGqYeHI1j2-XRT0o5gAguVd12GVwgJPTI";

export default {
  // el > no need to add el,
  name: "App", // add name to make debugging more easier
  // use components object to setup the all components will be used inside the template
  components: {
    SearchBar
  },
  methods: {
    onTermChange: function(value) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: value
          }
        })
        .then(response => {
        });
    }
  }
};
</script>

<style>
</style>
