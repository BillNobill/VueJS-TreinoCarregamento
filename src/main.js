import { createApp } from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";

const app = createApp(App);

app.use(VueLazyload, {
  preLoad: 1.3,
  error: "../assets/error.png",
  loading: "../assets/loading.gif",
  attempt: 1,
});

app.mount("#app");
