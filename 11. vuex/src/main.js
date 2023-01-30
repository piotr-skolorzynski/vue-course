import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state) {
            state.counter += 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000);
        },
        increase(context) {
            context.commit('increase');
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;

            if (finalCounter < 0) {
                return 0;
            }

            if (finalCounter > 100) {
                return 100;
            }

            return finalCounter;
        },
    }
};

const authenticationModule = {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {

        login(state, payload) {
            state.isLoggedIn = payload.isAuth;
        },
        logout(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {

        login(context) {
            context.commit('login', { isAuth: true });
        },
        logout(context) {
            context.commit('logout', { isAuth: false });
        }
    },
    getters: {

        isUserAuth(state) {
            return state.isLoggedIn;
        }
    }
}

const store = createStore({
    modules: {
        numbers: counterModule,
        auth: authenticationModule
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
