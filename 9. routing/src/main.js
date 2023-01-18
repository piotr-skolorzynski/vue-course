import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
    // tells how to manage the routing history, there are two types createWebHistory means 
    // that router should use build in browser mechanism of history
    history: createWebHistory(),
    //registry of routes to be used
    routes: [],
});

const app = createApp(App);

app.mount('#app');
