let currentGridSize = 16;
const rainbowColors  = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let hoverCounter = 0;

function div_creator(gridSize) {
    let grid = document.querySelector(".grid");
    grid.innerHTML = '';

    let size = grid.offsetWidth - 10;
    let squareSize = size / gridSize;

    for (let index = 0; index < gridSize ** 2; index++) {
        let createdDiv = document.createElement("div");
        createdDiv.className = "gridSquare";
        
        // Set size of squares based on gridSize
        createdDiv.style.width = `${squareSize}px`;
        createdDiv.style.height = `${squareSize}px`;

        grid.appendChild(createdDiv);
    }

    hoverCounter = 0;
    hoverColor();
}

function hoverColor() {
    let grids = document.querySelectorAll('.gridSquare');

    grids.forEach(square => {
        square.addEventListener('mouseenter', () => {
            let colorIndex = hoverCounter % rainbowColors.length;
            let color = rainbowColors[colorIndex];

            square.style.backgroundColor = color;
            hoverCounter++;
        })
    })
}

let resetButton = document.querySelector("#resetbutton");
let sizeButton = document.querySelector("#sizebutton");

div_creator(currentGridSize);

resetButton.addEventListener('click', () => {
    div_creator(currentGridSize);
});

sizeButton.addEventListener('click', () => {
    let input = prompt("How many grids do you want?")

    input = Math.min(Number(input), 100);
    input = Math.max(Number(input), 16);

    currentGridSize = input;
    div_creator(currentGridSize);
})