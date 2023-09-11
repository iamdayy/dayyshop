import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "./routes";
import { createPinia } from "pinia";

const pinia = createPinia();
createApp(App).use(routes).use(pinia).mount("#app");
