const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            isDisplayed: true
        };
    },
    computed: {
        buttonCaption() {
            return this.isDisplayed ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
            this.enteredTaskValue = '';
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
            if (this.tasks.length === 0) {
                this.isDisplayed = false;
            }
        },
        toggleListView() {
            this.isDisplayed = !this.isDisplayed;
        }
    }
});

app.mount('#assignment');