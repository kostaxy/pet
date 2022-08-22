<template>
    <div>
        <div>
            <my-button @click="showDialog">
                create appointment
            </my-button>
            <my-select
                    v-model="selectedSort"
                    :options="sortOptions"
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <appointment-form-create @createNewAppointment="createAppointment"></appointment-form-create>
        </my-dialog>

        <appointment-list
                v-if="!this.isAppointmentsLoading"
                @removeAppointment="removeAppointment"
                :appointments="appointments"
        ></appointment-list>
        <my-loader v-else>is loading</my-loader>
    </div>
</template>

<script>
    import AppointmentList from "@/components/AppointmentList";
    import AppointmentFormCreate from "@/components/AppointmentFormCreate";
    import MyDialog from "@/components/UI/MyDialog";
    import MyButton from "@/components/UI/MyButton";
    import axios from 'axios';
    import MySelect from "@/components/UI/MySelect";
    import MyLoader from "@/components/UI/MyLoader";

    export default {
        components: {
            MyLoader,
            MySelect,
            MyButton,
            MyDialog,
            AppointmentList,
            AppointmentFormCreate
        },
        data() {
            return {
                appointments: [],
                dialogVisible: false,
                isAppointmentsLoading: false,
                selectedSort: '',
                sortOptions: [
                    {
                        value: 'date',
                        name: "Date"
                    },
                    {
                        value: 'ownerName',
                        name: "Owner name"
                    },

                ]
            }
        },
        methods: {
            createAppointment(appointment) {
                this.appointments.push(appointment)
                this.dialogVisible = false
            },
            removeAppointment(appointment){
                this.appointments = this.appointments.filter(el => el.id != appointment.id)
            },
            showDialog(){
                this.dialogVisible = true
            },
            async fetchAppointments() {
                try {
                    this.isAppointmentsLoading = true
                    let response = await axios.get('https://run.mocky.io/v3/886cab0c-2300-45df-8b57-2b751d16becc',{
                        params: {
                            _page: 1,
                            _limit: 2
                        }
                    })

                    //emulate _pages and _limit backend
                    // let emulatedResponse = {
                    //     data: []
                    // }

                    let appointment = null;
                    for (let i = 0; i < response.data.length; i++) {
                        appointment = {
                            id: response.data[i].id,
                            date: new Date(response.data[i].dateAppointment).toLocaleString('ru-Ru'),
                            ownerName: response.data[i].ownerFirstName + ' ' + response.data[i].ownerLastName,
                            animal: response.data[i].animal,
                            reason: response.data[i].reason,
                            doctor: response.data[i].doctor,
                        }
                        this.appointments.push(appointment)
                    }

                }catch (e) {
                    alert('Error ' + e)
                }
                finally {
                    this.isAppointmentsLoading = false;
                }
            }
        },
        mounted() {
            this.fetchAppointments()
        },
        watch: {
            selectedSort(compareField) {
                this.appointments.sort( (a,b) => {
                    return a[compareField]?.localeCompare(b[compareField])
                })
            }
        }
    }
</script>

<style>

    form {
        display: flex;
        flex-direction: column;
    }

</style>