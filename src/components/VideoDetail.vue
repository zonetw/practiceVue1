<template>
  <div v-if="detail">{{detail.snippet.title}}</div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["detail"]
};
</script>

<style>
</style>