const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      // object: { name: 'Piotr', age: 40 }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = ''
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
