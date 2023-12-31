import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import '@/utils/initMap'
import VueAMap from '@vuemap/vue-amap'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAMap)
app.mount('#app')
