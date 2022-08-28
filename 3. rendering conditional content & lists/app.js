const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      object: { name: 'Piotr', age: 40 }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = ''
    }
  }
});

app.mount('#user-goals');
