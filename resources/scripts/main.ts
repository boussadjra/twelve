import { createApp, isVNode } from 'vue'
import router from '@/router'
import store from '@/store'
// import 'css-pro-layout/dist/css/css-pro-layout.min.css';
import '@/css/app.css'
import App from '@/views/App.vue'

let app = createApp(App)
import i18n from '@/i18n'
let root = app.use(i18n).use(store).use(router).mount('#app')


