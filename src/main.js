import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from './components/library'
import 'normalize.css'
import '@/assets/styles/common.less'
import './mock'

createApp(App).use(store).use(ui).use(router).mount('#app')
