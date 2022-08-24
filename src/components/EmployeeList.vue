<template>
    <div v-if="employees.length > 0" class="employee_list">
        <h3>employee list</h3>
        <transition-group
                name="employee-list"
        >
            <employee-item
                    class="employee"
                    v-for="employee in employees"
                    :employee="employee"
                    :key="employee.id"
                    @removeEmployee="$emit('removeEmployee',employee)"
            />
        </transition-group>

    </div>
    <div
            v-else
            class="empty_employees__div"
    >
        <h3>employees list is empty</h3>
    </div>

</template>

<script>
    import EmployeeItem from "@/components/EmployeeItem";
    export default {
        components: {EmployeeItem},
        props: {
            employees: {
                type: Array,
                required: true
            }
        },

    }
</script>

<style scoped>
    .employee_list{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
    }
    .empty_employees__div {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .employee-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .employee-list-enter-active,
    .employee-list-leave-active {
        transition: all 0.25s ease;
    }
    .employee-list-enter-from,
    .employee-list-leave-to {
        opacity: 0;
        transform: translateX(100px);
    }
    .employee-list-move {
        transition: transform 0.5s ease;
    }
</style>