<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">

        <div @click.stop class="dialog__content">
            <div class="close_btn" @click="hideDialog">
                <i class="fa-solid fa-x"></i>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
    export default {
        name: "my-dialog",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
    .dialog {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }
    .dialog__content {
        margin: auto;
        background: white;
        min-height: 100px;
        min-width: 300px;
        padding: 20px 50px;
        border-radius: 5px;
    }
    .close_btn {
        display: flex;
        width: 100%;
        justify-content: end;
        margin: 0 0 25px 25px;
        cursor: pointer;
    }

</style>