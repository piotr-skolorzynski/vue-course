import { createStore } from 'vuex';

import productsModule from './productsModule.store';
import cartModule from './cartModule.store';

const store = createStore({
    modules: {
        products: productsModule,
        cart: cartModule
    }
});

export default store;