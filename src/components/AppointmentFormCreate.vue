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
            class="select"
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
    import axios from 'axios';

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
                doctors: [],
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
                        }
                    } else {
                        this.isFieldsCorrect = false
                    }
                } else {
                    this.isDateCorrect = false
                }
            },
            async fetchDoctors() {
                try {
                    let response = await axios.get('https://run.mocky.io/v3/3526a901-6007-4f94-823b-24c5f87a49d2',{
                        params: {
                            _page: 1,
                            _limit: 2
                        }
                    })

                    //emulate _pages and _limit backend
                    // let emulatedResponse = {
                    //     data: []
                    // }

                    let doctor = null;
                    for (let i = 0; i < response.data.length; i++) {
                        doctor = {
                            id: response.data[i].id,
                            doctorName: response.data[i].firstName + ' ' + response.data[i].lastName
                        }
                        this.doctors.push(doctor)
                    }

                }catch (e) {
                    alert('Error ' + e)
                }
            }
        },
        setup() {

            const date = ref();

            return {
                date,
            }
        },
        mounted() {
            this.fetchDoctors().then(() => {
                console.log(this.doctors)
                let employee = null;
                for (let i = 0; i < this.doctors.length; i++) {
                    employee = {
                        name: this.doctors[i].doctorName,
                        value: JSON.stringify({id: this.doctors[i].id, doctorName: this.doctors[i].doctorName})
                    }
                    this.doctorOptions.push(employee)
                }
            });


        },
        watch: {
            selectedDoctor(doctor) {
                const selDoctor = JSON.parse(doctor)
                this.appointment.doctor = selDoctor.doctorName;
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
    .input {
        margin-top: 15px;
    }
    .select {
        margin-top: 15px;
    }
</style>