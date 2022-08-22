<template>
    <form @submit.prevent>
        <my-input
            v-model="appointment.name"
            class="input"
            type="text"
            placeholder="name"
        />
        <my-input
            v-model="appointment.reason"
            class="input"
            type="text"
            placeholder="reason"
         />
        <my-button
            class="btn__create"
            @click="createAppointment"
        >
            create
        </my-button>
    </form>

</template>

<script>
    import MyInput from "@/components/UI/MyInput";
    export default {
        components: {MyInput},
        data() {
            return {
                appointment: {
                    name: '',
                    reason: '',
                }
            }
        },
        methods: {
            createAppointment() {
                this.appointment.id = Date.now()
                this.$emit('createNewAppointment',this.appointment)
                this.appointment = {
                    name: '',
                    reason: '',
                }
            }
        }
    }
</script>

<style scoped>
    .btn__create {
        align-self: flex-end;
        margin-top: 15px;
    }
</style>