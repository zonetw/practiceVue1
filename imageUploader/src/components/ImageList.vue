<template>
    <div v-if="isLoggedIn" class="image-container">
        <img v-for="(image,index) in allImages" :src="image.link" :key="index">
    </div>
    <div v-else>
        <h2>Please Log in first to see the gallery!</h2>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "ImageList",
        computed: mapGetters(["allImages", "isLoggedIn"]),
        methods: mapActions(["fetchImages"]),
        created() {
            this.fetchImages();
        }
    };
</script>

<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0;
    }

    img {
        max-width: 100%;
        padding: 5px;
    }
</style>