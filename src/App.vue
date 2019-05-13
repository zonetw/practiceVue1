<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoDetail :detail="selectedVideo"></VideoDetail>
    <!-- <VideoList v-bind:videos="videos"></VideoList> -->
    <VideoList :videos="videos" @changeVideoDetail="onChangeVideoDetail"></VideoList>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import axios from "axios";

const API_KEY = "AIzaSyBGqYeHI1j2-XRT0o5gAguVd12GVwgJPTI";

export default {
  // el > no need to add el,
  name: "App", // add name to make debugging more easier
  // use components object to setup the all components will be used inside the template
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      selectedVideo: null
    };
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
          this.videos = response.data.items;
        });
    },
    onChangeVideoDetail(videoInfo) {
      //   window.console.log("[App]", videoInfo);
      this.selectedVideo = videoInfo;
    }
  }
};
</script>

<style>
</style>
