const counterActions = {
    increment(context) {
        setTimeout(() => {
            context.commit('increment');
        }, 2000);
    },
    increase(context) {
        context.commit('increase');
    }
};

export default counterActions;