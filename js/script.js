const button =  document.querySelector('.btn');

button.addEventListener('click', function(){
    // NOME 
    let name = document.getElementById('name').value; 

    //COGNOME
    let surname = document.getElementById('surname').value;
    
    //KM DA PERCORRERE 
    let km = document.getElementById('km').value;
    
    //FASCIA D'ETA'
    let anni = document.getElementById('anni').value;

    //COSTO DEL BIGLIETTO IN BASE AI KM 
    let costo_biglietto_km = km * 0.21

    //COSTO DEL BIGLIETTO IN BASE ALLA FASCIA D'ETA'
    let costo_biglietto;
    if (anni == 1){
        //UNDER 18
        costo_biglietto = costo_biglietto_km - costo_biglietto_km * 0.2;
        document.getElementById('welcome').innerText = `Welcome ${name} ${surname}!`;
        document.getElementById('discount').innerText = `Rientri nella fascia under 18, hai diritto ad uno sconto del 20% sul costo iniziale di ${costo_biglietto_km.toFixed(2)}\u20AC.`;
        
    }
    else if(anni == 3){
        //OVER 65
        costo_biglietto = costo_biglietto_km - costo_biglietto_km * 0.4;
        document.getElementById('welcome').innerText = `Welcome ${name} ${surname}!`;
        document.getElementById('discount').innerText = `Rientri nella fascia over 65, hai diritto ad uno sconto del 40% sul costo iniziale di ${costo_biglietto_km.toFixed(2)}\u20AC.`;
        
    }
    else{
        costo_biglietto = costo_biglietto_km
        document.getElementById('welcome').innerText = `Welcome ${name} ${surname}!`;
        document.getElementById('discount').innerText = ''
    }

    //COSTO DEL BIGLIETTO MOSTRATO IN CONSOLE.LOG
    console.log(costo_biglietto);

    //PREZZO BIGLIETTO MOSTRATO SUL DISPLAY
    document.getElementById('ticket').innerText =`Prezzo biglietto: ${costo_biglietto.toFixed(2)} \u20AC`

})
