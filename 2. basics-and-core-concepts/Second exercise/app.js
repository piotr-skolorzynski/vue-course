const app = Vue.createApp({
    data() {
        return {
            inputOneValue: "",
            inputTwoValue: ""
        }
    },
    methods: {
        showAlert() {
            alert("hello world!");
        },
        outputFirtInput(e) {
            this.inputOneValue = e.target.value;
        },
        outputSecondInput(e) {
            this.inputTwoValue = e.target.value;
        }
    }
});

app.mount("#assignment");