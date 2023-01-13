<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="username">User name:</label>
      <input type="text" id="username" ref="userName" />
    </div>
    <div>
      <label for="userage">User age:</label>
      <input type="number" id="userage" ref="userAge" />
    </div>
    <button type="submit">Set Active User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  emits: ['change-user'],
  methods: {
    onSubmit() {
      this.$emit(
        'change-user',
        this.$refs.userName.value,
        Number(this.$refs.userAge.value)
      );
    },
  },
};
</script>
