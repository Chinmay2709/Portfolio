// main.css
import "./css/main.css"

// app.vue
import { createApp } from "vue";
import App from "./vue/App.vue";

// threeapp.js
import "./js/animations/threeapp"

const app = createApp(App)
app.mount('#app')