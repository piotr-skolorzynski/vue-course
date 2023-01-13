<template>
  <li>
    <h2>{{ name }} {{ friendIsFavourite === '1' ? '(Favourite)' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress', 'isFavourite'],
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   phoneNumber: {
  //     type: String,
  //     required: true,
  //   },
  //   emailAddress: {
  //     type: String,
  //     required: true,
  //   },
  //   isFavourite: {
  //     type: String,
  //     required: false,
  //     default: '0', //can be a function
  //     validator: function (value) {
  //       return value === '1' || value === '0';
  //     },
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavourite: this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      if (this.friendIsFavourite === '1') {
        this.friendIsFavourite = '0';
      } else {
        this.friendIsFavourite = '1';
      }
    },
  },
};
</script>
