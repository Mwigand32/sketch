let gridSize = 16;

const container = document.querySelector('#container');
const startOver = document.querySelector('#newSketch');

for (i = 1; i <= gridSize * gridSize; i++){
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare-' + i)
    
    container.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.cssText = 'background: black;';
    })   
}

startOver.addEventListener('click', () => {
    for (i = 1; i <= gridSize * gridSize; i++){
        container.removeChild(container.lastElementChild);
    }
    
    do{
    gridSize = prompt(`Enter size of your new sketchbox
        (16-100)`);
    }
    while(gridSize < 16 || gridSize > 100 || gridSize == '')

    for (i = 1; i <= gridSize * gridSize; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare-' + i)
        
        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.cssText = 'background: black;';
        })   
    }
})