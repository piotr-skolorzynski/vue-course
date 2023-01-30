import authMutations from "./mutations";
import authActions from "./actions";
import authGetters from "./getters";

const authenticationModule = {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: authMutations,
    actions: authActions,
    getters: authGetters
};

export default authenticationModule;