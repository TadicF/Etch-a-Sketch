// Initialize important variables

const container = document.querySelector(".container")
const sizeButton = document.querySelector(".sizeButton");
const resetButton = document.querySelector(".resetButton");
const normalMode = document.querySelector(".normalMode");
const rgbMode = document.querySelector(".rgbMode");
const colorOptions = document.querySelector(".colorOptions")
const INITIAL_SIZE = 16;
let mode = 1;

// Event listeners for modes, each has different value

normalMode.addEventListener("click", () => {
  rgbMode.classList.remove("activeMode");
  mode = 1;
  normalMode.classList.add("activeMode");
  document.querySelectorAll(".gridSquare").forEach(grid => grid.remove());
  createGrid(16, mode);
});
rgbMode.addEventListener("click", () => {
  normalMode.classList.remove("activeMode");
  mode = 2;
  rgbMode.classList.add("activeMode");
  document.querySelectorAll(".gridSquare").forEach(grid => grid.remove());
  createGrid(16, mode);
});

// A function for adding grid squares to container
  
function createGrid(size, defaultMode) {
  let gridMode = defaultMode; // Initliaze a variable to hold current mode
  let gridSize = size * size; // Initialize a variable to hold size of the grid (16x16, 20x20, etc...)
  let squareSize = 100 / size; // Initialize a variable to calculate a size per square in % 
  let square;

  if(gridMode === 1) { // This is for normal mode, so default red color
    console.log("DEFAULT MODE");
    for(let i = 0; i < gridSize; i++) { 
      square = document.createElement("div");
      square.classList.add("gridSquare");
      container.appendChild(square);
  
      // Set the size of square width and height to variable value and add %
  
      square.style.width = `${squareSize}%`;
      square.style.height = `${squareSize}%`; 
      square.addEventListener("mouseover", addHoverClass);
   }
  }

  else if(gridMode === 2) { // This is for rgb mode, colors change after each square 
    console.log("RGB MODE");
    for(let i = 0; i < gridSize; i++) { 
      square = document.createElement("div");
      square.classList.add("gridSquare");
      container.appendChild(square);

      square.style.width = `${squareSize}%`;
      square.style.height = `${squareSize}%`
      square.addEventListener("mouseover", rgbColors);
  }
 }
}

// A function for adding class of name "hover" to square div

function addHoverClass(e) {
  e.target.style.backgroundColor = "red"; // ${color}
}

// Function to reset grid style (colors, etc..)

function resetGrid() {
  document.querySelectorAll(".gridSquare").forEach(element => element.style.backgroundColor = "white");
}

// Function that prompts the user for grid size

function setGridSize() {
  resetGrid();
  let userPrompt = prompt("Enter grid size (100 MAX): ");
  if(userPrompt > 100) {
    alert("Incorrect input! 100 is MAX");
    return 0;
  }
  document.querySelectorAll(".gridSquare").forEach(grid => grid.remove());
  createGrid(userPrompt, mode);
}

function rgbColors(e) {
  let availableColors = 255;
  let firstColor = Math.floor(Math.random() * availableColors);
  let secondColor = Math.floor(Math.random() * availableColors);
  let thirdColor = Math.floor(Math.random() * availableColors);
  e.target.style.backgroundColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
}


// event listeners for size & reset buttons

sizeButton.addEventListener("click", setGridSize);
resetButton.addEventListener("click", resetGrid);

createGrid(INITIAL_SIZE, mode);

// To do: 
//DONE - Create Mode variable and don't initialize the value yet
//DONE - Add event listeners to Normal, RGB and Darken Mode
//DONE - When BUTTON is clicked, change mode value based on button clicked
//DONE - For Normal change to 1, for RGB change to 2 and for Darken change to 3
//DONE - Randomize RGB Color values each time user hover over grid square
// - 




// for other modes later on: 
/*
function rgbColors(e) {
  let availableColors = 255;
  let color = Math.floor(Math.random() * availableColors);
  e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}
*/