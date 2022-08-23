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
    .btn{
       align-items: center;
       appearance: none;
       background-color: #fff;
       border: 1px solid #3b3b3b;
       border-radius: .375em;
       box-shadow: none;
       box-sizing: border-box;
       color: #000000;
       cursor: pointer;
       display: inline-flex;
       height: 2.5em;
       justify-content: center;
       line-height: 1.5;
       padding: calc(.5em - 1px) 1em;
       position: relative;
       text-align: center;
       user-select: none;
       -webkit-user-select: none;
       touch-action: manipulation;
       vertical-align: top;
       white-space: nowrap;
    }

    .btn-active {
        border-color: #4a4a4a;
        outline: 0;
    }

    .btn-focus {
        border-color: #485fc7;
        outline: 0;
    }

    .btn-hover {
        border-color: #b5b5b5;
    }

    .btn-focus:not(:active) {
        box-shadow: rgba(72, 95, 199, .25) 0 0 0 .125em;
    }
</style>