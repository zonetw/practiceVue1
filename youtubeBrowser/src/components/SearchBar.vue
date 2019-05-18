<template>
  <div>
    <!-- <input v-on:input="onTextInput"> -->
    <input @input="onTextInput">
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onTextInput(e) {
      this.$emit("termChange", e.target.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 75%;
}
div {
  text-align: center;
  margin: 20px;
}
</style>