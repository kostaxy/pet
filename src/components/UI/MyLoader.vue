<template>
    <div class="loader">
        <img src="@/images/loader.gif" alt="">
    </div>
</template>

<script>
    export default {
        name: 'my-loader'
    }
</script>

<style scoped>
    .loader {
        position: fixed;
        top: 0; left: 0; z-index: 9999;
        width: 100vw;
        height: 100vh;
        transition: opacity 0.2s;
    }
    .loader img {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%);
    }
</style>