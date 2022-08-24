<template>
    <form @submit.prevent class="employee_create__form">

        <my-input
                v-model="employee.firstName "
                class="input"
                type="text"
                placeholder="First name"
        />
        <my-input
                v-model="employee.lastName"
                class="input"
                type="text"
                placeholder="Last name"
        />
        <my-input
                v-model="employee.adress"
                class="input"
                type="text"
                placeholder="Adress"
        />
        <div
                class="error_input__container"
                v-if="!isFieldsCorrect"
        >
            <span class="error_input__text">Fill in all the fields</span>
        </div>
        <my-button
                class="btn__create"
                @click="createEmployee"
        >
            create
        </my-button>
    </form>

</template>

<script>
    import MyInput from "@/components/UI/MyInput";
    import '@vuepic/vue-datepicker/dist/main.css';
    import MySelect from "./UI/MySelect";

    export default {
        components: {MySelect, MyInput},
        data() {
            return {
                isFieldsCorrect: true,
                employee: {
                    id: null,
                    firstName: null,
                    lastName: null,
                    adress: null,
                },
            }
        },
        methods: {
            createEmployee() {
                this.employee.id = Date.now()
                this.employee.imgUrl = this.$store.state.mewImageUrl;
                if (
                    (this.employee.firstName !== null && this.employee.firstName !== '') &&
                    (this.employee.lastName !== null && this.employee.lastName !== '') &&
                    (this.employee.adress !== null && this.employee.adress !== '')
                ) {
                    this.employee.doctorName = this.employee.firstName + ' ' + this.employee.lastName;
                    this.$emit('createNewEmployee',this.employee);
                    this.employee = {
                        firstName: null,
                        lastName: null,
                        adress: null,
                    }
                } else {
                    this.isFieldsCorrect = false
                }
            }
        },
    }
</script>

<style scoped>
    .error_input__container {
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }
    .error_input__text {
        color: red;
        font-size: 12px
    }
    .employee_create__form {
        display: flex;
        flex-direction: column;
    }
    .btn__create {
        align-self: flex-end;
        margin-top: 15px;
    }
    .input {
        margin-top: 15px;
    }
    .select {
        margin-top: 15px;
    }
    .dp__input {
        font-size: 12px;
    }
</style>