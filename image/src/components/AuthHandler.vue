<template>
  <div>Please wait for a minute</div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(window.location.hash);
  }
};
</script>

<style>
</style>
