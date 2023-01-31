const cartModule = {
    namespaced: true,
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 }
        };
    },
    mutations: {},
    actions: {},
    getters: {
        cartItemsQuantity(state) {
            return state.cart.qty;
        },
        cartTotal(state) {
            return state.cart.total.toFixed(2);
        },
        cartItems(state) {
            return state.cart.cartItems;
        }
    }
};

export default cartModule;