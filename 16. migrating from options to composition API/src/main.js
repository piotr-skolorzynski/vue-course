import { createApp } from 'vue';

import BaseSearch from './components/UI/BaseSearch.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import App from './App.vue';

const app = createApp(App);

app.component('BaseSearch', BaseSearch);
app.component('BaseContainer', BaseContainer);

app.mount('#app');
