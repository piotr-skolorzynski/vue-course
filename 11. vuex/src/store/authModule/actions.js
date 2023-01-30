const authActions = {
    login(context) {
        context.commit('login', { isAuth: true });
    },
    logout(context) {
        context.commit('logout', { isAuth: false });
    }
};

export default authActions;