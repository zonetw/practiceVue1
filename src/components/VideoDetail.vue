<template>
  <div v-if="detail">
    <div class="detail">
      <iframe :src="embedUrl"></iframe>
      <h4>{{detail.snippet.title}}</h4>
      <p>{{detail.snippet.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["detail"],
  computed: {
    embedUrl() {
      const { videoId } = this.detail.id;
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
};
</script>

<style scoped>
.detail {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>