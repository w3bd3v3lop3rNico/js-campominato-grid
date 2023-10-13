// - Generare 100 caselle con js
//     - Richiamare elemento griglia dal DOM
const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement);

//     - inizializzare un ciclo for che genera 100 caselle
for (let i = 0; i < 100; i++) {

    //         - Dichiarare una variabile che generi un numero da 1 a 100 (const n = indice + 1)
    const numero = (i + 1);

    //         - Dichiarare una variabile che contenga un tamplate leteral con la variabile numero
    const cellHTML = `<div class="cell">${numero}</div>`;
    console.log(i, cellHTML);
    //         - inserire il tamplate leteral (caselle) nel DOM (.innerHTML)
    gridDOMElement.innerHTML += cellHTML;
    console.log(gridDOMElement);
}



// - Colorare le caselle cliccate
//     - Recupero dal DOM le caselle
//     - inserisco in un ciclo le caselle e faccio corrispondere ad ognuna un indice
//     - ad ogni casella aggiungo un event listener
//         - ogni volta che l'event listener si attiverà su una casella aggiungerà la classe 'bg-color'
// - Inserire il tutto in un event listener legato al bottone 'Gioca'
//     - Recuperare il bottone dal DOM
//     - creare la funzione che svuota la griglia ad ogni click
//     - inserire il codice all'interno dell'event listener