import counterGetters from "./getters";
import counterMutations from "./mutations";
import counterActions from "./actions";

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        };
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
};

export default counterModule;