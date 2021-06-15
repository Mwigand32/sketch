let gridSize = 16;
const defaultSize = 16;
const container = document.querySelector('#container');
const startOver = document.querySelector('#newSketch');


function buildGrid(newSize){

    for (i = 1; i <= newSize * newSize; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare-' + i)
        
        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.background = 'black';
            gridSquare.style.opacity = (parseFloat(gridSquare.style.opacity) || 0) + 0.1;
        })   
    }
    container.style.cssText = 'grid-template-columns: repeat(' + newSize + ', 1fr)';

}

startOver.addEventListener('click', () => {
    for (i = 1; i <= gridSize * gridSize; i++){
        container.removeChild(container.lastElementChild);
    }

    do{
    gridSize = prompt(`Enter size of your new sketchbox:
        (16-100)`);
    }
    while(gridSize < 16 || gridSize > 100 || gridSize == '')

    buildGrid(gridSize);
})

buildGrid(defaultSize);