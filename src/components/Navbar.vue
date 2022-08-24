<template>
    <div class="navbar">
        <div></div>
        <div class="navbar__buttons">
            <nav-button @click="$router.push('/appointments')">Appointments</nav-button>
            <nav-button @click="$router.push('/employee')">Doctors</nav-button>
        </div>
        <div>
            <nav-button @click="$store.commit('logout')>Logout</nav-button>
        </div>
    </div>
</template>

<script>
    import NavButton from "./UI/NavbarButton";
    export default {
        components: {NavButton}
    }
</script>

<style scoped>
    .navbar{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
</style>