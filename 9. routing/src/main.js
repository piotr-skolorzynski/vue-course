import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    // tells how to manage the routing history, there are two types createWebHistory means 
    // that router should use build in browser mechanism of history
    history: createWebHistory(),
    //registry of routes to be used
    routes: [
        { path: '/', redirect: '/teams' },
        {
            path: '/teams', name: 'teams', components: { default: TeamsList, footer: TeamsFooter }, children:
                [
                    { path: ':teamId', name: 'team-members', component: TeamMembers, props: true },
                ]
        },
        {
            path: '/users',
            components: { default: UsersList, footer: UsersFooter },
            beforeEnter(to, from, next) {
                console.log('users beforeEnter');
                console.log(to, from);
                next();
            }
        },
        { path: '/:not-found(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        return { left: 0, top: 0 }
    }
});

router.beforeEach((to, from, next) => {
    console.log('Global beforeEach')
    console.log(to, from);
    next(); //let navigation action continue
    // next(false); //forbid to proceed navigation
    // next('/users'); //navigate to users
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } }); //it will cause that you always are directed to /teams/t2. It is an example cause it does not have any sense to use.
    // }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
