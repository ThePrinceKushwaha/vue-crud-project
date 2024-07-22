import "./assets/main.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "./router";

// createApp(App).mount("#app");

const app = createApp(App);
app.use(router);
app.use(Toast);

app.mount("#app");
