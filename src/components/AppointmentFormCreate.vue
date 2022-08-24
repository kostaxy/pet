<template>
    <form @submit.prevent class="appointment_create__form">
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
        <my-select
            v-model="selectedDoctor"
            :options="doctorOptions"
            placeholder="test"
        ></my-select>

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
    import MySelect from "./UI/MySelect";
    export default {
        components: {MySelect, MyInput, Datepicker},
        data() {
            return {
                isDateCorrect: true,
                isFieldsCorrect: true,
                appointment: {
                    ownerName: null,
                    animal: null,
                    reason: null,
                    doctorName: null,
                    doctorId: null,
                },
                selectedDoctor: '',
                doctorOptions: [],
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
                            doctorName: '',
                        }
                    } else {
                        this.isFieldsCorrect = false
                    }
                } else {
                    this.isDateCorrect = false
                }
            },
        },
        setup() {

            const date = ref();

            return {
                date,
            }
        },
        mounted() {
            let employee = {
                name: 'Michael Scott',
                value: JSON.stringify({id: 1, firstName: 'Michael', lastName: 'Scott'}),
            }
            let employee2 = {
                name: 'Michael2 Scott2',
                value: JSON.stringify({id: 2, firstName: 'Michael2', lastName: 'Scott2'}),
            }
            this.doctorOptions.push(employee)
            this.doctorOptions.push(employee2)
        },
        watch: {
            selectedDoctor(doctor) {
                const selDoctor = JSON.parse(doctor)
                this.appointment.doctor = selDoctor.firstName + ' ' + selDoctor.lastName;
                this.appointment.doctorId = selDoctor.id;
            }
        }
    }
</script>

<style scoped>
    .appointment_create__form {
        display: flex;
        flex-direction: column;
    }
    .btn__create {
        align-self: flex-end;
        margin-top: 15px;
    }
</style>