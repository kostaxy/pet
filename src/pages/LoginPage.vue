<template>
    <div class="login__container">
        <div class="login__content">
            <h3>log in to use the system</h3>
            <my-input>login</my-input>
            <my-input>password</my-input>
            <my-button @click="authUser">login</my-button>
        </div>
    </div>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    import MyInput from "../components/UI/MyInput";
    export default {
        name: "LoginPage",
        components: {MyInput, MyButton},
        data() {
            return {
                user: {
                    login: 'a',
                    role: 'b'
                }
            }
        },
        methods: {
            authUser() {
                // const store = useStore();

                this.user.login = 'admin'
                this.user.role = 'admin'
                this.$store.commit('loginUser', this.user)
            },
            fetchUsers() {
                let url = 'https://run.mocky.io/v3/5c2b188f-0f96-4a04-826b-2bc10f83a3f8'
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
        width: 400px;
    }
</style>