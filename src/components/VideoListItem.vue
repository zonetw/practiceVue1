<template>
  <li class="list-group-item media">
    <img class="mr-3" :src="thumbnailUrl">
    <div class="media-body">{{videoInfo.snippet.title}}</div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["videoInfo"],
  computed: {
    thumbnailUrl: function() {
      return this.videoInfo.snippet.thumbnails.default.url;
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}
li:hover {
  background-color: #eee;
}
</style>