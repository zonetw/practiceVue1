<template>
  <li>{{videoInfo.snippet.title}}</li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["videoInfo"]
};
</script>
