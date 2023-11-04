const Size = 576;
const container = document.querySelector("#container");

let isMouseDown = undefined;

flexElement(document.body, "column");
addButton("Restart sketch");
flexElement(container, "row");
listenRestartButton();
createGrid(32, Size);
listenSquares();

function flexElement(element, direction) {
  element.style.display = "flex";
  element.style.flex = "1";
  element.style.flexDirection = direction;
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
}

function addButton(text) {
  const container = document.querySelector("#container");
  const button = document.createElement("button");
  button.textContent = text;
  button.className = "btn";
  button.style.margin = "1em"
  document.body.insertBefore(button, container);
}

function createGrid(number, size) {
  const container = document.querySelector("#container");
  const sizeSquare = size / number;
  for (let i = 1; i <= number; i++) {
    let column = document.createElement("div");
    column.style.width = `${sizeSquare}px`
    column.style.height = "auto";
    column.className = "column"
    for (let i = 1; i <= number; i++) {
      let row = document.createElement("div");
      row.style.width = `${sizeSquare}px`
      row.style.height = `${sizeSquare}px`
      row.style.border = "1px solid black";
      row.className = "square"
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

function restartGrid(number, size) {
  const container = document.querySelector("#container");
  container.remove();
  const newContainer = document.createElement("div");
  newContainer.id = "container";
  document.body.appendChild(newContainer);
  createGrid(number, size);
  flexElement(newContainer, "row");
  listenSquares();
}

function changeColor(element) {
  if (isMouseDown) {
    element.style.background = randomizeColor();
  }
}

function randomizeColor() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function listenRestartButton() {
  const button = document.querySelector(".btn");
  button.addEventListener("click", isValidNumber);
}

function isValidNumber() {
  let number = +prompt("How many squares per side?", "16");
  if (number <= 100 && number > 1) {
    restartGrid(number, Size);
  } else {
    alert("Only from 2 to 100 accepted.");
    isValidNumber();
  }
}

function listenSquares() {
  document.addEventListener("mousedown", () => isMouseDown = true);
  document.addEventListener("mouseup", () => isMouseDown = false);
  const squares = Array.from(document.querySelectorAll(".square"));
  for (let square of squares) {
    square.addEventListener("mouseenter", () => changeColor(square));
  }
}
