<template>
  <li class="list-group-item">
    {{videoInfo.snippet.title}}
    <img :src="thumbnailUrl">
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
