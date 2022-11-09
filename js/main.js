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
            totmin = costoBiglietto * minorenni;
            console.log(totmin);
        }

        else if (eta === "anziano"){
            totanz = costoBiglietto * anziano;
            console.log(totanz);
        }

        else {
            costoBiglietto;
            console.log(costoBiglietto);
        }

        
    }



)

