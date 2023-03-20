import App from './App.vue'
import { createApp } from 'vue'
import router from "./router";
// import store from "./store";
import i18n from "./i18n";
// Plugins
import { registerPlugins } from '@/plugins'
// bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import public page
import TheHeader from "@/components/Header/TheHeader.vue";


const app = createApp(App)
app.component("the-header", TheHeader);


registerPlugins(app)
app.use(router);
// app.use(store);
app.use(i18n);
app.mount('#app')
