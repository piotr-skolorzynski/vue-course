const app = Vue.createApp({
    data() {
        return {
            name: "Piotr",
            age: 40,
            imageUrl: "https://images.unsplash.com/photo-1572702416711-902ec877386d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5nZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        generateFavouriteNumber() {
            return Math.floor(Math.random() * 10);
        }
    }
});

app.mount("#user-goal");