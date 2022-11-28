// Tool per definire il prezzo finale di un biglietto considerando l'età e i chilometri da percorrere.

// 1 - Chiedere i chilometri da percorrere.

// 2 - Chiedere l'età della persona.

// 3 - Definire il prezzo pieno del biglietto.

// 4 - Definire i vari scaglioni di prezzo all'ordine dei centesimi e mostrare il risultato sul consol-log:
//     4.1 - Prezzo per minorenni scontato del 20%;
//     4.2 - Prezzo per over 65 scontato del 40%;
//     4.3 - Prezzo pieno per persone tra i 18 e 65 anni.

// 5 - Mostrare a schermo il prezzo finale



// 1 - Chiedere i chilometri da percorrere.

let km = prompt("Quanti chilometri devi percorrere?")
console.log(km)

// 2 - Chiedere l'età della persona.

let eta = prompt("Quanti anni hai?")
console.log(eta)

// 3 - Definire il prezzo pieno del biglietto.

let prezzo = km * 0.21
console.log(prezzo)

// 4 - Definire i vari scaglioni di prezzo all'ordine dei centesimi e mostrare il risultato sul consol-log:

if (eta < 18) {
    prezzo = (prezzo * 0.8).toFixed(2)
    console.log(prezzo)
    
}
else if (eta > 65) {
    prezzo = (prezzo * 0.6).toFixed(2)
    console.log(prezzo)
}
else {
    prezzo = prezzo.toFixed(2)
    console.log(prezzo)
}

// 5 - Mostrare a schermo il prezzo finale

document.getElementById ("prezzo-biglietto") .innerText =  "Il prezzo del tuo biglietto è " + prezzo + " $"