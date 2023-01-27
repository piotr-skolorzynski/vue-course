<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </ul>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="adddUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
    };
  },
  methods: {
    adddUser() {
      this.users.unshift(this.$refs.userNameInput.value);
      this.$refs.userNameInput.value = '';
    },
    removeUser(user) {
      this.user = this.users.filter((item) => item !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
}
</style>
