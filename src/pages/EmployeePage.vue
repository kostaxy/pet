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

                    let employee = null;
                    for (let i = 0; i < response.data.length; i++) {
                        employee = {
                            id: response.data[i].id,
                            doctorName: response.data[i].firstName + ' ' + response.data[i].lastName,
                            adress: response.data[i].adress,
                            imgUrl: response.data[i].imgUrl,
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
    }

</script>

<style scoped>

</style>