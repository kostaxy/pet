<template>
    <form @submit.prevent>
        <Datepicker
            v-model="date"
        />
        <div v-if="!isDateCorrect">
            <span style="color: red; font-size: 12px">Choose a date larger than the current</span>
        </div>
        <my-input
            v-model="appointment.ownerName"
            class="input"
            type="text"
            placeholder="Owner name"
        />
        <my-input
            v-model="appointment.animal"
            class="input"
            type="text"
            placeholder="Animal"
         />
        <my-input
            v-model="appointment.reason"
            class="input"
            type="text"
            placeholder="Reason"
         />

        <div v-if="!isFieldsCorrect">
            <span style="color: red; font-size: 12px">Choose a date larger than the current</span>
        </div>
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
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import { ref } from 'vue';
    export default {
        components: {MyInput, Datepicker},
        data() {
            return {
                isDateCorrect: true,
                isFieldsCorrect: true,
                appointment: {
                    ownerName: '',
                    reason: '',
                }
            }
        },
        methods: {
            createAppointment() {
                this.appointment.id = Date.now()

                if (typeof this.date !== 'undefined' && this.date.getTime() > new Date().getTime()) {
                    if (true) {
                        this.appointment.date = new Date(this.date.getTime())
                        this.$emit('createNewAppointment',this.appointment);
                        this.appointment = {
                            doctorName: '',
                            reason: '',
                        }
                    } else {
                        this.isFieldsCorrect = false
                    }
                } else {
                    this.isDateCorrect = false
                }

            }
        },
        setup() {

            const date = ref();

            return {
                date,
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