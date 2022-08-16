const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  // watch observes value and make action if needed
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  // computed values are like methods but don't cause page render
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      };

      return this.name + " " + "Skolo";
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    substract(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === "") {
        return "";
      };

      return this.name + " " + "Skolo";
    }
  }
});

app.mount('#events');
