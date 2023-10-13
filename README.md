# Campo Fiorito

- Creare struttura html
- Creare stile css
- Generare 100 caselle con js
    - Recupero dal dom l'elemento 'grid'
    - Richiamare elemento griglia dal DOM
    - inizializzare un ciclo for che genera 100 caselle
        - Dichiarare una variabile che generi un numero da 1 a 100 (const n = indice + 1)
        - Dichiarare una variabile che contenga un tamplate leteral con la variabile numero
        - inserire il tamplate leteral (caselle) nel DOM (.innerHTML)
- Colorare le caselle cliccate
    - Recupero dal DOM le caselle
    - inserisco in un ciclo le caselle e faccio corrispondere ad ognuna un indice
    - ad ogni casella aggiungo un event listener
        - ogni volta che l'event listener si attiverà su una casella aggiungerà la classe 'bg-color'
- Inserire il tutto in un event listener legato al bottone 'Gioca'
    - Recuperare il bottone dal DOM
    - creare la funzione che svuota la griglia ad ogni click
    - inserire il codice all'interno dell'event listener
