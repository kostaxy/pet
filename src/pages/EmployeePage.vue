<template>
    <div
            v-if="employees.length > 0"
            class="list_text"
    >
        <h3>employee list</h3>
    </div>
    <div
            v-else
            class="list_text"
    >
        <h3>employee list is empty</h3>
    </div>

    <div
        class="actions_block"
        v-if="this.$store.state.currentRole === 'ROLE_ADMIN'"
    >
        <div
                v-if="employees.length > 0"
                class="actions_content">
            <my-button @click="showDialog">
                Create new
            </my-button>

        </div>
        <div
                v-else
        >
            <my-button @click="showDialog">
                Create new
            </my-button>
        </div>

    </div>
    <employee-list
            v-if="!this.isEmployeesLoading"
            @removeEmployee="removeEmployee"
            :employees="employees"
    >

    </employee-list>
    <my-loader v-else>is loading</my-loader>
    <my-dialog v-model:show="dialogVisible">
        <employee-form-create @createNewEmployee="createEmployee"></employee-form-create>
    </my-dialog>
</template>

<script>
    import axios from "axios";
    import MyLoader from "@/components/UI/MyLoader";
    import MySelect from "@/components/UI/MySelect";
    import MyButton from "@/components/UI/MyButton";
    import MyDialog from "@/components/UI/MyDialog";
    import AppointmentFormCreate from "@/components/AppointmentFormCreate";
    import EmployeeList from "@/components/EmployeeList";
    import EmployeeFormCreate from "@/components/EmployeeFormCreate";

    export default {
        components: {
            EmployeeFormCreate,
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
                console.log(employee)
                this.employees.push(employee)
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
    .actions_block {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
    .actions_content {
        width: 600px;
        display: flex;
        justify-content: end;
    }
    .list_text {
        margin-top: 15px;
        display: flex;
        justify-content: center;
    }
</style>