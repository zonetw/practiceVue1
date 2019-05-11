<template>
  <div>
    <input v-on:input="onTextInput">
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onTextInput: function(e) {
      window.console.log(e.target.value);
    }
  }
};
</script>

<style>
</style>