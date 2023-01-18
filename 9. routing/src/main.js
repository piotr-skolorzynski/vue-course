import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
    // tells how to manage the routing history, there are two types createWebHistory means 
    // that router should use build in browser mechanism of history
    history: createWebHistory(),
    //registry of routes to be used
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList },
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
