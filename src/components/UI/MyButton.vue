<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
    .btn {
        padding: 10px;
        font-size: 16px;
        font-weight: bold;
        background: none;
        border: none;
        cursor: pointer;
    }
    btn:hover:after {
        z-index: -10;
        animation: fill 1s forwards;
        -webkit-animation: fill 1s forwards;
        -moz-animation: fill 1s forwards;
        opacity: 1;
    }
</style>