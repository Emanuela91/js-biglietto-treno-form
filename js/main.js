// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

let element = document.getElementById("generate");
element.addEventListener(`click`,

    function() {
        // Richiesta nome e cognome
        let nome = document.getElementById("name").value;
        
        // Quanti Km
        let km = document.getElementById("km").value;
        
        // Età
        let eta = document.getElementById("eta").value;
        
        const costoKm = 0.21;
        const minorenni = 0.8;
        const anziano = 0.6;
        
        // Costo del biglietto: somma Km e costo al Km
        costoBiglietto = km * costoKm;
        
        console.log(costoBiglietto);

        if (eta === "minorenne"){
            tot = costoBiglietto * minorenni;
            console.log(tot);
        }

        else if (eta === "anziano"){
            tot = costoBiglietto * anziano;
            console.log(tot);
        }

        else {
            tot = costoBiglietto;
            console.log(tot);
        }
        document.getElementById("prezzo").innerHTML = `Il costo del tuo biglietto è di: ${tot.toFixed(2)}€`;

        // nome passeggero
        document.getElementById("nome").innerHTML = `Nome Passeggero: ${nome}`; 
        
        // numero carrozza
        document.getElementById("numerocar").innerHTML = `Numero Carrozza: ${Math.floor(Math.random() * 10) + 1}`;

        // codice persona
        document.getElementById("cod").innerHTML = `Codice Passeggero: ${Math.floor(Math.random() * 100000) + 1}`;

        // biglietto da stampare che compare
        const ticket = document.getElementById("stampa");
        ticket.style.display = "block";
        
    }

);

// Bottone annulla
let cancella = document.getElementById("delete");
cancella.addEventListener(`click`,
    function(){
        document.getElementById("infoRequest").reset();
        const ticket = document.getElementById("stampa");
        ticket.style.display = "none";
    }

);

