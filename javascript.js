// Initialize important variables

const container = document.querySelector(".container")
const sizeButton = document.querySelector(".sizeButton");
const resetButton = document.querySelector(".resetButton");

// A function for adding grid squares to container
  
createGrid(16);  

function createGrid(size) {
  let gridSize = size * size; // Initialize a variable to hold size of the grid (16x16, 20x20, etc...)
  let squareSize = 100 / size; // Initialize a variable to calculate a size per square in % 
  for(let i = 0; i < gridSize; i++) { 
    let square = document.createElement("div");
    square.classList.add("gridSquare");
    container.appendChild(square);

    // Set the size of square width and height to variable value and add %

    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`; 
    square.addEventListener("mouseover", addHoverClass);
  }
}

// A function for adding class of name "hover" to square div

function addHoverClass(e) {
  e.target.classList.add("hover");
}

function resetGrid() {
  document.querySelectorAll(".hover").forEach(element => element.classList.remove("hover"));

}

function setGridSize() {
  resetGrid();
  let userPrompt = prompt("Enter grid size (100 MAX): ");
  if(userPrompt > 100) {
    alert("Incorrect input! 100 is MAX");
    return 0;
  }
  document.querySelectorAll(".gridSquare").forEach(grid => grid.remove());
  createGrid(userPrompt);
}

sizeButton.addEventListener("click", setGridSize);
resetButton.addEventListener("click", resetGrid);
