const cartModule = {
    namespaced: true,
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 }
        };
    },
    mutations: {
        addProductToCart(state, payload) {
            const productInCartIndex = state.cart.items.findIndex(
                (ci) => ci.productId === payload.productId
            );

            if (productInCartIndex >= 0) {
                state.cart.items[productInCartIndex].qty += 1;
            } else {
                const newItem = {
                    productId: payload.productId,
                    title: payload.title,
                    image: payload.image,
                    price: payload.price,
                    qty: 1,
                };

                state.cart.items.push(newItem);
            }

            state.cart.qty += 1;
            state.cart.total += payload.price;
        },
        removeProductFromCart(state, payload) {
            console.log(payload.prodId)
            const productInCartIndex = state.cart.items.findIndex(
                (cartItem) => cartItem.productId === payload.prodId
            );
            const prodData = state.cart.items[productInCartIndex];
            state.cart.items.splice(productInCartIndex, 1);
            state.cart.qty -= prodData.qty;
            state.cart.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addProductToCart(context, payload) {
            context.commit('addProductToCart', payload);
        },
        removeProductFromCart(context, payload) {
            context.commit('removeProductFromCart', payload);
        }
    },
    getters: {
        cartItemsQuantity(state) {
            return state.cart.qty;
        },
        cartTotal(state) {
            return state.cart.total.toFixed(2);
        },
        cartItems(state) {
            return state.cart.items;
        }
    }
};

export default cartModule;