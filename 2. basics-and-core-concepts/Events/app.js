const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
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
    // when you have more parameters
    // setName(event, secondParameter) {  
    //    this.name = event.target.value + ' ' + secondParameter;
    // }
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
