// Oppgave 1
const btn = document.getElementById("remove-btn");
btn.addEventListener("click", () => {
  document.getElementById("remove").style.display = "none";
});
// Oppgave 2
const button = document.getElementById("change-btn");
button.addEventListener("click", () => {
  document.getElementById("change").style.color = "blue";
});

// Oppgave 3
let inputBox = document.getElementById("input");
let inputText = document.getElementById("input-text");

inputBox.addEventListener("click", () => {
  inputText.innerHTML = "";
});

let newText = (event) => {
  let pressedLetter = event.key;
  inputText.innerHTML += pressedLetter;
};

inputBox.addEventListener("keyup", newText);

// Oppgave 4
const myList = ["item OnOOO", "item DOSSSSS", "item ThREEES"];
const writeListButton = document.getElementById("write-list");
const ul = document.getElementById("ul");

writeListButton.addEventListener("click", () => {
  ul.innerHTML =
    "<li>" +
    myList[0] +
    "</li>" +
    "<li>" +
    myList[1] +
    "</li>" +
    "<li>" +
    myList[2] +
    "</li>";
});

// Oppgave 5
let listSelect = document.getElementById("select");
let inputTextBox = document.getElementById("text");
let createTextButton = document.getElementById("create");
let placeholder = document.getElementById("placeholder");

createTextButton.addEventListener("click", () => {
  let selectHTML = listSelect.value;
  let inputText = inputTextBox.value;
  placeholder.innerHTML =
    "<" + selectHTML + ">" + inputText + "</" + selectHTML + ">";
});

// Oppgave 6

let list = document.getElementById("list");
let removeElementButton = document.getElementById("remove-li");

removeElementButton.addEventListener("click", () => {
  list.removeChild(list.firstElementChild);
});

// Oppgave 7

let nameInput = document.getElementById("name");
let orderButton = document.getElementById("order");

nameInput.addEventListener("keypress", () => {
  let name = nameInput.value;

  console.log("click");

  for (let i = 0; i < name.length; i++) {
    if (name.length < 4) {
      orderButton.disabled = false;
    } else {
      orderButton.disabled = true;
    }
  }
});

// Oppgave 8

const addBorderButton = document.getElementById("color");
let oddChildren = document.querySelectorAll(".children li:nth-child(odd)");
let evenChildren = document.querySelectorAll(".children li:nth-child(even)");

addBorderButton.addEventListener("click", () => {
  for (let i = 0; i < oddChildren.length && i < evenChildren.length; i++) {
    oddChildren[i].style.border = "solid blue";
    evenChildren[i].style.border = "solid red";
  }
});
