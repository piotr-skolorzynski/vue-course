const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "Master Vue and build amazing apps!",
            courseGoalC: "<h2>Have fun</h2>",
            vueLink: "http://vuejs.org/"
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) return this.courseGoalA;

            return this.courseGoalB;
        }
    }
});

app.mount("#user-goal");