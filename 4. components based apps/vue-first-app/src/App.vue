<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <active-user :name="name" :age="age"></active-user>
    <user-data @change-user="onChangeUser"></user-data>
    <new-friend @add-contact="onAddContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
        @delete-contact="onDeleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';
export default {
  components: { FriendContact, NewFriend, ActiveUser, UserData },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com',
          isFavourite: true,
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 654421 21',
          email: 'julie@localhost.com',
          isFavourite: false,
        },
      ],
      name: 'skolo',
      age: 40,
    };
  },
  methods: {
    toggleFavouriteStatus(id) {
      const identifiedFriend = this.friends.find((friend) => friend.id === id);
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },

    onAddContact(friend) {
      this.friends.push({
        ...friend,
        id: crypto.randomUUID(),
        isFavourite: false,
      });
    },

    onDeleteContact(id) {
      if (id) {
        this.friends = this.friends.filter((friend) => friend.id !== id);
      }
    },

    onChangeUser(name, age) {
      this.name = name;
      this.age = age;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form,
#app div.container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2,
#app div > h2,
#app div > h3 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: auto;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
