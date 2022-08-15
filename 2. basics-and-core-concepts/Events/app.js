const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter += 1;
    },
    substract() {
      this.counter -= 1;
    }
  }
});

app.mount('#events');
