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
// import Aos library
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
// import css file
import "@/assets/styles/main.css";
import "@/assets/styles/form.css";
import "@/assets/styles/Item.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("base-button", BaseButton);
app.component("heading-section", HeadingSection);
app.component("landing-page", LandingPage);

registerPlugins(app);
app.use(router);
app.use(store);
app.use(i18n);
app.use(vuetify);

app.mount("#app");
