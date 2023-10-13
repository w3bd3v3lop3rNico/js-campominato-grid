
const gridDOMElement = document.querySelector('.grid');

const playBtnDOMElement = document.getElementById('play-btn');

playBtnDOMElement.addEventListener('click', function() {

    gridDOMElement.innerHTML = '';

    for (let i = 0; i < 100; i++) {

        const numero = (i + 1);

        const cellHTML = `<div class="cell">${numero}</div>`;

        gridDOMElement.innerHTML += cellHTML;
    }

    const cellsDOMElements = document.querySelectorAll('.cell');
    console.log(cellsDOMElements);

    for (let i = 0; i < cellsDOMElements.length; i++ ) {

        const selectedCell = cellsDOMElements[i];
        console.log(i, selectedCell);

        selectedCell.addEventListener('click', function() {

            selectedCell.classList.add('bg-color');
        })
    }
})