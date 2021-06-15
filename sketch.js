let gridSize = 16;

const container = document.querySelector('#container');

for (i = 1; i <= gridSize * gridSize; i++){
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare-' + i)
    
    container.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.cssText = 'background: black;';
    })
    
}

