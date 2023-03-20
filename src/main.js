import App from './App.vue'
import { createApp } from 'vue'
import router from "./router";
import store from "./store";
// import i18n from "./i18n";
// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)
app.use(router);
app.use(store);
// app.use(i18n);
app.mount('#app')
