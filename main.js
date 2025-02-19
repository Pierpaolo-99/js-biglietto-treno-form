/* Traccia : 

Scrivere un programma che chieda all’utente:
 - Il numero di chilometri da percorrere
 - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio. 
 
Secondo le seguenti regole:
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.*/



const nameEl = document.getElementById('name')
const kmtravelEl = document.getElementById('km_travel')
const ageRange = document.getElementById('age_range')
const submitEl = document.getElementById('generate_btn')
const formEl = document.getElementById('train_ticket')


const userName = document.getElementById('username')
const price = document.getElementById('price_ticket')
const rateTicket = document.getElementById('offer')
const trainCarriage = document.getElementById('carriage')
const codeCP = document.getElementById('code_CP')

formEl.addEventListener('submit', function(e){
    e.preventDefault()

    userName.innerHTML = nameEl.value
    trainCarriage.innerHTML = Math.floor(Math.random() * 21)
    codeCP.innerHTML = Math.floor(Math.random() * 100000)

    console.log(nameEl.value);
    console.log(kmtravelEl.value);
    console.log(ageRange.value);

    const priceTicket = kmtravelEl.value * 0.21
    const priceTicketMinors = priceTicket - (priceTicket * 0.2)
    const priceTicketOver65 = priceTicket - (priceTicket * 0.4)
    
    if (ageRange.value === 'Minors'){
        price.innerHTML = priceTicketMinors.toFixed(2)
        console.log(priceTicketMinors.toFixed(2)); 
        rateTicket.innerHTML = 'Bigliatto minorenni'

    }
    else if (ageRange.value === 'Over-65'){
        price.innerHTML = priceTicketOver65.toFixed(2)
        console.log(priceTicketOver65.toFixed(2));
        rateTicket.innerHTML = 'Bigliatto Over-65'
    }
    else{
        price.innerHTML = priceTicket.toFixed(2)
        console.log(priceTicket.toFixed(2));
        rateTicket.innerHTML = 'Bigliatto Standard'    
    }
})




