import { createApp } from 'vue'
import { createPinia, setActivePinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'

//pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
setActivePinia(pinia);


createApp(App).use(pinia).mount("#app");