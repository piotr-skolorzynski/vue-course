import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            path: '/teams',
            name: 'teams',
            meta: { needsAuth: true },
            components: { default: TeamsList, footer: TeamsFooter },
            children: [{ path: ':teamId', name: 'team-members', component: TeamMembers, props: true },]
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
    //with such meta it is possible to check globally for particular components if user is authenticated
    if (to.meta.needsAuth) {
        console.log('needs auth');
        next();
    }

    next();
});

router.afterEach((to, from) => {
    //sending analitycs data
    console.log('Global afterEach');
    console.log(to, from);
});

export default router;