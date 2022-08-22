<template>
    <div v-if="appointments.length > 0" class="appointment_list">
        <h3>list of appointments</h3>
        <transition-group
            name="appointment-list"
        >
            <appointment-item
                    class="appointment"
                    v-for="appointment in appointments"
                    :appointment="appointment"
                    :key="appointment.id"
                    @removeAppointment="$emit('removeAppointment',appointment)"
            />
        </transition-group>

    </div>
    <div
        v-else
        class="empty_appointments__div"
    >
        <h3>appointments list is empty</h3>
    </div>

</template>

<script>
    import AppointmentItem from "@/components/AppointmentItem";
    export default {
        components: {AppointmentItem},
        props: {
            appointments: {
                type: Array,
                required: true
            }
        },

    }
</script>

<style scoped>
    .appointment_list{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .empty_appointments__div {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .appointment-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .appointment-list-enter-active,
    .appointment-list-leave-active {
        transition: all 0.25s ease;
    }
    .appointment-list-enter-from,
    .appointment-list-leave-to {
        opacity: 0;
        transform: translateX(100px);
    }
    .appointment-list-move {
        transition: transform 0.5s ease;
    }
</style>