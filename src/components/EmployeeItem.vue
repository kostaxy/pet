<template>
    <div class="employee">

        <div class="info">
            <div>
                <img class="avatar" :src=employee.imgUrl>
            </div>
            <div class="text_info">
                <div>
                    <b>Doctor:</b>
                    {{employee.doctorName}}
                </div>
                <div>
                    <b>Adress:</b>
                    {{employee.adress}}
                </div>
            </div>

            <div
                v-if="this.$store.state.currentRole === 'ROLE_ADMIN'"
                class="action_buttons"
            >
                <div
                        class="icon_btn"
                        @click="$emit('removeEmployee',employee)"
                >
                    <i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
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

    .avatar {
        border-radius: 50%;
        width: 64px;
        height: 64px;
    }

    .action_buttons {
        display: flex;
        margin-left: auto;
    }

    .icon_btn {
        font-size: 20px;
        padding: 4px;
        cursor: pointer;
    }
    .info {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;
    }
    .text_info {
        margin-left: 20px;
    }
</style>