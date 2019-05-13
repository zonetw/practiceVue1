<template>
  <div v-if="detail">
    <div class="detail">
      <h4>{{detail.snippet.title}}</h4>
      <p>{{detail.snippet.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["detail"]
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