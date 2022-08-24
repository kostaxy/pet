<template>
    <div>
        <h1>test router</h1>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    export default {
        name: "Main",
        components: {Navbar},
        beforeCreate () {
            if (this.$store.state.isAuth) {
                this.$router.push('/appointments')
            } else {
                this.$router.push('/login')
            }
        }
    }

</script>

<style scoped>

</style>