Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ""
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = "";
        }
    }
}).mount("#app");

//aproach using vanilla js
// const buttonElement = document.querySelector("button");
// const inputElement = document.querySelector("input");
// const listElement = document.querySelector("ul");

// const addGoal = () => {
//     const enteredValue = inputElement.value;
//     const listItemElement = document.createElement("li");
//     listItemElement.textContent = enteredValue;
//     listElement.appendChild(listItemElement);
//     inputElement.value = "";
// }
 
// buttonElement.addEventListener("click", addGoal);

