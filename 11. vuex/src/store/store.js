import { createStore } from 'vuex';
import counterModule from './counterModule';
import authenticationModule from './authModule';

const store = createStore({
    modules: {
        numbers: counterModule,
        auth: authenticationModule
    }
});

export default store;