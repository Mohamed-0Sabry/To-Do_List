// script.js

let input = document.querySelector("#inputTodo");
let button = document.querySelector("#buttonAdd");
let wholeList = document.querySelector("#wholeList");

function addingTodoItem(inputText) {
  let div = document.createElement("div");
  div.classList.add("justify-between", "flex");
  let textDiv = document.createElement("h1");
  textDiv.classList.add("select-none", "font-semibold", "cursor-pointer");
  textDiv.innerText = inputText;
  div.appendChild(textDiv);
  let icon = document.createElement("i");
  icon.classList.add(
    "trashIcon",
    "fa-regular",
    "fa-trash-can",
    "mr-3",
    "text-red-600",
    "cursor-pointer",
    "scale-125",
    "place-self-center"
  );

  div.appendChild(icon);
  wholeList.appendChild(div);

  icon.addEventListener("click", () => {
    console.log("Clicked TrashIcon");
    div.remove(); // Remove the parent div when the icon is clicked
  });

  textDiv.addEventListener("click", () => {
    textDiv.classList.toggle("line-through");
    textDiv.classList.toggle("opacity-50");
  });
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  addTodoItem();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTodoItem();
  }
});

function addTodoItem() {
  let input_value = input.value;
  if (input_value !== "") {
    console.log("Clicked");
    addingTodoItem(input_value);
    input.value = "";
  }
}
