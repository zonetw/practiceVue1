<template>
  <ul>
    <VideoListItem v-for="video in videos" :videoInfo="video" :key="video.etag"></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  // two way to setup props
  // 1. an object with props name and type > TODO: What kind of type can we use in Vue ?
  //   props: {
  //       videos: Array
  //   },
  // 2. setup props in array
  props: ["videos"],
  components: {
    VideoListItem
  }
};
</script>
