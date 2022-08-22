<template>
    <div class="employee">
        <div class="top__content">
            <div class="date">
                <b>Time:</b> <i>{{employee.date}}</i>
            </div>
            <div class="action_buttons">
                <div
                        class="icon_btn"
                >
                    <i class="fa-regular fa-pen-to-square"></i>
                </div>
                <div
                        class="icon_btn"
                        @click="$emit('removeEmployee',employee)"
                >
                    <i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
        </div>
        <div class="info">
            <div>
                <b>Owner name:</b>
                {{employee.ownerName}}
            </div>
            <div>
                <b>Animal:</b>
                {{employee.animal}}
            </div>
            <div>
                <b>Reason:</b>
                {{employee.reason}}
            </div>
            <div>
                <b>Doctor:</b>
                {{employee.doctor}}
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
    import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
    import MyButton from "@/components/UI/MyButton";
    export default {
        components: {MyButton},
        props: {
            employee: {
                type: Object,
                required: true,
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .employee {
        padding: 15px;
        width: 600px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .top__content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .action_buttons {
        display: flex;
    }

    .icon_btn {
        font-size: 20px;
        padding: 4px;
        cursor: pointer;
    }
    .info {
        width: 100%;
        margin-top: 10px;
    }
</style>