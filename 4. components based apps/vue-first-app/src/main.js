import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.component('active-user', ActiveUser);
app.component('user-data', UserData);

app.mount('#app');
