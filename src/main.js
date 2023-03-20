import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
// Plugins
import { registerPlugins } from "@/plugins";
// import public page
import TheHeader from "@/components/Header/TheHeader.vue";
import LandingPage from "./components/layout/LandingPage.vue";
// import ui Base Button  page
import BaseButton from "@/components/ui/BaseButton.vue";
import HeadingSection from "@/components/ui/HeadingSection.vue";
// bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import css file
import "@/assets/styles/main.css";
import "@/assets/styles/form.css";
import "@/assets/styles/Item.css";

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("base-button", BaseButton);
app.component("heading-section", HeadingSection);
app.component("landing-page", LandingPage);

registerPlugins(app);
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
