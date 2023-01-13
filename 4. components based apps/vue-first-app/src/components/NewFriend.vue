<template>
  <form @submit.prevent="onAddNewContact">
    <div>
      <label for="name">Name:</label>
      <input type="text" ref="name" id="name" />
    </div>
    <div>
      <label for="phone">Phone Number:</label>
      <input type="tel" ref="phone" id="phone" />
    </div>
    <div>
      <label for="email">Email address:</label>
      <input type="email" ref="email" id="email" />
    </div>
    <div>
      <button>Add contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  emits: ['add-contact'],
  methods: {
    onAddNewContact() {
      if (
        !this.$refs.name.value ||
        !this.$refs.phone.value ||
        !this.$refs.email.value
      ) {
        return;
      }

      this.$emit('add-contact', {
        name: this.$refs.name.value,
        phone: this.$refs.phone.value,
        email: this.$refs.email.value,
      });

      this.$refs.name.value = '';
      this.$refs.phone.value = '';
      this.$refs.email.value = '';
    },
  },
};
</script>
