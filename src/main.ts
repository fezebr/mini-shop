import { createPinia, setActivePinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
setActivePinia(pinia);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(pinia).mount("#app");
