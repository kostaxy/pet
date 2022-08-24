<template>
    <div>login page </div>
    <my-button @click="authUser">login</my-button>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    import {useStore} from "vuex";
    export default {
        name: "LoginPage",
        components: {MyButton},
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

</style>