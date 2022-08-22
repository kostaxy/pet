<template>
    <employee-list
            v-if="!this.isEmployeesLoading"
            @removeEmployee="removeEmployee"
            :employees="employees"
    ></employee-list>
    <my-loader v-else>is loading</my-loader>
</template>

<script>
    import axios from "axios";
    import MyLoader from "@/components/UI/MyLoader";
    import MySelect from "@/components/UI/MySelect";
    import MyButton from "@/components/UI/MyButton";
    import MyDialog from "@/components/UI/MyDialog";
    import AppointmentFormCreate from "@/components/AppointmentFormCreate";
    import EmployeeList from "@/components/EmployeeList";

    export default {
        components: {
            EmployeeList,
            MyLoader,
            MySelect,
            MyButton,
            MyDialog,
            AppointmentFormCreate
        },
        data() {
            return {
                employees: [],
                dialogVisible: false,
                isEmployeesLoading: false,
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
            createEmployee(employee) {
                this.employee.push(employee)
                this.dialogVisible = false
            },
            removeEmployee(employee){
                this.employees = this.employees.filter(el => el.id != employee.id)
            },
            showDialog(){
                this.dialogVisible = true
            },
            async fetchEmployees() {
                try {
                    this.isEmployeesLoading = true
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

                    let employee = null;
                    for (let i = 0; i < response.data.length; i++) {
                        employee = {
                            id: response.data[i].id,
                            date: new Date(response.data[i].dateAppointment).toLocaleString('ru-Ru'),
                            ownerName: response.data[i].ownerFirstName + ' ' + response.data[i].ownerLastName,
                            animal: response.data[i].animal,
                            reason: response.data[i].reason,
                            doctor: response.data[i].doctor,
                        }
                        this.employees.push(employee)
                    }

                }catch (e) {
                    alert('Error ' + e)
                }
                finally {
                    this.isEmployeesLoading = false;
                }
            }
        },
        mounted() {
            this.fetchEmployees()
        },
        watch: {
            selectedSort(compareField) {
                this.employees.sort( (a,b) => {
                    return a[compareField]?.localeCompare(b[compareField])
                })
            }
        }
    }

</script>

<style scoped>

</style>