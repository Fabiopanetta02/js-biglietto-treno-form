/*Schema logico
1- Recupero gli elementi con l'id
2- Chiedo il numero di chilometri
3- Chiedo l'età del passeggero
4- Calcolo il prezzo totale del viaggio sulla base della tariffa
5- Applico sconto
6-Creo una variabile da stampare
7- Faccio comparire il prezzo
*/

//1- Recupero gli elementi con l'id
const username = document.getElementById('unsername');
const numberChilo = document.getElementById('kms');
const numberAge = document.getElementById('age');
const buttonCreate = document.getElementById('create');
const buttonDelete = document.getElementById('delete');
const resultTicket = document.getElementById('ticket-finish');




//2- Al click del button genera inizo a controllare i valori
buttonCreate.addEventListener('click', function() {
    const kms = numberChilo.value
    const age = numberAge.value

    console.log('kms')
    console.log('age')
    
    let priceKm = kms * 0.21;
    console.log('pricekm');

})
