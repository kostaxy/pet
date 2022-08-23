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
            }
        }
    }
</script>

<style scoped>

</style>