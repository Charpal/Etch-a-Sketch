function createGrid(squareNum){
    if (squareNum > 100)
        return;

    const container = document.querySelector('#container');
    let rowColNum = '';
    for(let i = 0; i < squareNum; i++){
        rowColNum += ' auto';
    }
    container.style.gridTemplateColumns = rowColNum;
    container.style.gridTemplateRows = rowColNum;
    for(let i = 0; i < squareNum * squareNum; i++){
        const grid = document.createElement('div');
        grid.classList.add('gridSquare');
        container.appendChild(grid);
    }
}

createGrid(16);

function removeGrid(){
    const container = document.querySelector('#container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

let gridSquares = document.querySelectorAll('.gridSquare');
function setGridSquares(gridSquares){
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', function(e){
            let color = Math.random() * 360;
            e.target.style.background = `hsl(${color}, 100%, 50%)`;
        });
    });
}

setGridSquares(gridSquares);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let squareNum = prompt("Please enter a number (maximum of 100): ")
    removeGrid();
    createGrid(squareNum);
    gridSquares = document.querySelectorAll('.gridSquare');
    setGridSquares(gridSquares);
});