const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const listElement = document.querySelector("ul");

const addGoal = () => {
    const enteredValue = inputElement.value;
    const listItemElement = document.createElement("li");
    listItemElement.textContent = enteredValue;
    listElement.appendChild(listItemElement);
    inputElement.value = "";
}
 
buttonElement.addEventListener("click", addGoal);