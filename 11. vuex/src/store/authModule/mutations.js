const authMutations = {

    login(state, payload) {
        state.isLoggedIn = payload.isAuth;
    },
    logout(state, payload) {
        state.isLoggedIn = payload.isAuth;
    }
};

export default authMutations;