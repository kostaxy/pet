<template>
    <div class="login__container">
        <div class="login__content">
            <h3>log in to use the system</h3>
            <my-input
                placeholder="login"
                type="text"
                class="login_input"
                v-model="user.login"
            >login</my-input>
            <my-input
                type="password"
                placeholder="password"
                class="login_input"
                v-model="user.password"
            >password</my-input>
            <div
                class="error_input__container"
                v-if="isWrongLoginOrPassword"
            >
                <span class="error_input__text">Incorrect login or password</span>
            </div>
            <my-button
                class="login_btn"
                @click="authUser"
            >
                login
            </my-button>
        </div>
    </div>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    import MyInput from "../components/UI/MyInput";
    import axios from "axios";
    export default {
        name: "LoginPage",
        components: {MyInput, MyButton},
        data() {
            return {
                user: {
                    login: '',
                    password: '',
                    role: ''
                },
                allUsers: [],
                isLoginLoading: false,
                isWrongLoginOrPassword: false
            }
        },
        methods: {
            authUser() {
                // const store = useStore();
                this.fetchUsers().then(() => {
                    console.log(this.allUsers)
                    let loggedUser = this.allUsers.filter(el => el.login.toLowerCase() === this.user.login && el.password === this.user.password)
                    if (loggedUser.length > 0) {
                        this.$store.commit('loginUser', loggedUser[0])

                        this.user.login = ''
                        this.user.role = ''

                        this.$router.push('/appointments')
                    } else {
                        this.isWrongLoginOrPassword = true
                    }
                });


            },
            // fetchUsers() {
            //     let url = 'https://run.mocky.io/v3/5c2b188f-0f96-4a04-826b-2bc10f83a3f8'
            // },
            async fetchUsers() {
                try {
                    this.isLoginLoading = true
                    let response = await axios.get('https://run.mocky.io/v3/5c2b188f-0f96-4a04-826b-2bc10f83a3f8',{
                    })

                    let user = null;
                    for (let i = 0; i < response.data.length; i++) {
                        user = {
                            login: response.data[i].login,
                            password: response.data[i].password,
                            role: response.data[i].role
                        }
                        this.allUsers.push(user)
                    }

                }catch (e) {
                    alert('Error ' + e)
                }
                finally {
                    this.isLoginLoading = false;
                }
            }
        }
    }
</script>

<style scoped>
    .login__container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .login__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 250px;
    }
    .login_input {
        margin-top: 10px;
    }
    .login_btn {
        margin-top: 10px;
    }
    .error_input__container {
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }
    .error_input__text {
        color: red;
        font-size: 14px;
    }
</style>