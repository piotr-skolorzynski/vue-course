Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    methods: {
        addValue(value) {
            return this.result += value;
        }
    },
    computed: {
        finalResult() {
            if (this.result < 37) {
                return "Not yet there";
            };

            if (this.result === 37) {
                return this.result;
            }

            return "Too much!";
        }
    },
    watch: {
        finalResult() {
            const timeout = setTimeout(() => {
                this.result = 0;
                return clearTimeout(timeout);
            }, 5000)
        }
    }
}).mount("#assignment");

