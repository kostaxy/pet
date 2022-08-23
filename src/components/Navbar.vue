<template>
    <div class="navbar">
        <div class="navbar__buttons">
            <my-button @click="$router.push('/appointments')">Appointments</my-button>
            <my-button @click="$router.push('/employee')">Doctors</my-button>
            <my-button @click="$store.commit('logout')">Logout</my-button>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .navbar{
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
</style>