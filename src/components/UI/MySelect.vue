<template>
    <select class="select" v-model="modelValue" @change="changeOption">
        <!--<option disabled value="">Choose the sort field</option>-->
        <option
            v-for="option in options"
            :disabled="option.disabled ? true : false"
            :hidden="option.hidden ? true : false"
            :key="option.value"
            :value="option.value"
        >
            {{option.name}}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(event) {
                this.$emit("update:modelValue", event.target.value)
            }
        }
    }
</script>

<style scoped>
    .select {
        height: 33px;
        font-family: 'Poppins', sans-serif !important;
        cursor: pointer;
        border-radius: 5px;
        padding: 5px;
    }
</style>