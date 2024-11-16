const container = document.querySelector(".container")

function createColumns(num) {
  for(let i = 0; i < num; i++) {
    let columns = document.createElement("div");
    columns.classList.add("columns");
    container.appendChild(columns);
    columns.addEventListener("mouseover", addHoverClass);
  }
}

function createRows(num) {
  for(let i = 0; i < num; i++) {
    createColumns(num);
  }
}

function addHoverClass(e) {
  e.target.classList.add("hover");
}

createRows(16);

