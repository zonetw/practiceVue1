<template>
  <li class="list-group-item media" @click="onClick">
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
  },
  methods: {
    onClick() {
      this.$emit("videoListItemSelect", this.videoInfo);
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

/* method2 without flex */
/* li > div {
  display: inline-block;
  position: absolute; but I don't know what the difference between relative & absolute
} */

li:hover {
  background-color: #eee;
}
</style>