import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
// Plugins
import { registerPlugins } from "@/plugins";
// bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import css file
import "@/assets/styles/main.css";
import "@/assets/styles/form.css";
import "@/assets/styles/Item.css";
// import public page
import TheHeader from "@/components/Header/TheHeader.vue";
// import ui Base Button  page
import BaseButton from "@/components/ui/BaseButton.vue";
import HeadingSection from "@/components/ui/HeadingSection.vue";

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("base-button", BaseButton);
app.component("heading-section", HeadingSection);

registerPlugins(app);
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
