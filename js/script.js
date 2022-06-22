/*
Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
Bonus:
Aggiungere stile in modo da avere una bella pagina per la nostra compagnia di treni. Allego un'immagine di riferimento per chi non ha fantasia. :occhiolino:
Potete usare quel che vi pare (Bootstrap, bool12 , CSS plain)
Se volete potete anche spingervi al responsive ma l'importante è che facciate funzionare il form e stampare correttamente i dati del biglietto!
*/

//dichiaro le variabili del form
const nameSurname = document.getElementById('name-and-surname')
const kms = document.getElementById('km')
const userAge = document.getElementById('age')
const button = document.getElementById('discover-price')

// attivo il bottone al click
button.addEventListener('click', function () {
    const name = nameSurname.value;
    console.log(name)

    const km = kms.value;
    console.log(km)

    const age = userAge.value;
    console.log(age)

    // calcolo il prezzo del biglietto
    const ticketPrice = 0.21 * km
    console.log(ticketPrice)

    let discountedPrice

    if (!isNaN(km) && (km > 0) && (!isNaN(age) && (age > 0))) {


        if (age < 18) {

            discountedPrice = (ticketPrice * 0.8).toFixed(2)

        }

        else if (age > 65) {
            discountedPrice = (ticketPrice * 0.6).toFixed(2)
        }

        else {
            discountedPrice = (ticketPrice).toFixed(2)
        };


    } else {
        alert("Errore. Esprimi le risposte in numeri positivi!")

    }

})
