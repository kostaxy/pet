import { createApp } from 'vue'
import App from "@/App";
import components from '@/components/UI'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from "@/router/router";


const app = createApp(App)

components.forEach(component => {
    app.component(component.name,component)
})

app
    .use(router)
    .mount('#app')


