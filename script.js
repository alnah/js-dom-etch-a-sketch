changeDisplay("flex");
createGrid(16);

let isMouseDown = undefined;
document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

const squares = Array.from(document.querySelectorAll(".square"));
for (let square of squares) {
  square.addEventListener("mouseenter", () => changeColor(square));
}

function changeDisplay(display) {
  const container = document.querySelector("#container");
  container.style.display = display;
  container.style.width = "960px";
  container.style.height = "auto";
  if (display === "flex") {
    container.style.flex = "1";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
  }
}

function createGrid(number) {
  const container = document.querySelector("#container");
  for (let i = 1; i <= number; i++) {
    let column = document.createElement("div");
    column.style.width = "1em";
    column.style.height = "1em";
    column.className = "column"
    for (let i = 1; i <= number; i++) {
      let row = document.createElement("div");
      row.style.width = "1em";
      row.style.height = "1em";
      row.style.border = "1px solid black";
      row.className = "square"
      column.appendChild(row);
    }
    container.appendChild(column);
  }
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
  return `rgb(${red}, ${green}, ${blue})`
}