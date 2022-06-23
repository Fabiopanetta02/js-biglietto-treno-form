/*Schema logico
1- Recupero gli elementi con l'id
2- Al click del button genera inizo a controllare i valori
3- Chiedo l'età del passeggero
4- Calcolo il prezzo totale del viaggio sulla base della tariffa
5- Applico sconto
6- Creo una variabile da stampare
7- Faccio comparire il prezzo
*/

//1- Recupero gli elementi con l'id
const username = document.getElementById('username');
const numberChilo = document.getElementById('kms');
const numberAge = document.getElementById('age');
const buttonCreate = document.getElementById('create');
const buttonDelete = document.getElementById('delete');
const ticket = document.getElementById('my-ticket')
const userTicket = document.getElementById('username-ticket');
const discounTicket = document.getElementById('discount')
const numberCarriage = document.getElementById('carriage');
const numberCode = document.getElementById('code')
const priceTotal = document.getElementById('priceticket');


//2- Al click del button genera inizo a controllare i valori
buttonCreate.addEventListener('click', function() {
    const name = username.value
    const kms = numberChilo.value
    const age = numberAge.value

    console.log('kms' , kms)
    console.log('age' , age)
    
    //Calcolo il prezzo 
    let priceKm = kms * 0.21;
    console.log('pricekm');

    if(age < 18){
        priceKm *= ( (100-20) / 100 );
        console.log('priceDiscount' , priceKm)
    }
    else if(age > 65){
        priceKm *= ( (100-40) / 100 )
        console.log('over65' , priceKm)
    }

    //Faccio comparire la sezione ticket
    ticket.classList.add('active')

    //Stampo le informazioni sul ticket
    //1-nome
    userTicket.innerText = name
    console.log(username)

    //2-tipologia biglietto

    if(age < 18){
        discounTicket.innerText = 'Biglietto sconto 20%'
    }
    else if (age >= 66){
        discounTicket.innerText = 'Biglietto sconto 40%'
    }
    else if (age >= 18){
        discounTicket.innerText = 'Biglietto standard'
    }

    //3-Numero carrozza
    const randomCarriage = Math.floor(Math.random() * 10) + 1;
    console.log(randomCarriage)
    numberCarriage.innerText = randomCarriage

    //4-Codice CP
    const randomCode = Math.floor(Math.random() * 100000) + 1;
    console.log(randomCode)
    numberCode.innerText = randomCode

    //5-prezzo
    const pricePrinted = priceKm.toFixed(2)
    priceTotal.innerText = pricePrinted + '€'
})


//3- Al click del button annulla azzero i valori
buttonDelete.addEventListener('click', function() {
    username.value = ''
    numberChilo.value = ''
    numberAge.value = ''

    console.log('kms' , kms)
    console.log('age' , age)
    
    //Faccio scomparire la sezione ticket
    ticket.classList.remove('active')
})
