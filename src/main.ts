import { createApp } from 'vue'
import { createPinia, setActivePinia } from "pinia";
import './style.css'
import App from './App.vue'

//pinia
const pinia = createPinia();
setActivePinia(pinia);


createApp(App).use(pinia).mount("#app");