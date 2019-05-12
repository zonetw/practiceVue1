<template>
  <li class="list-group-item">
    <img :src="videoInfo.snippet.thumbnails.default.url">
    {{videoInfo.snippet.title}}
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["videoInfo"]
};
</script>
