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
        costo_biglietto = costo_biglietto_km - costo_biglietto_km * 0.2
    }
    else if(anni == 3){
        //OVER 65
        costo_biglietto = costo_biglietto_km - costo_biglietto_km * 0.4
    }
    else{
        costo_biglietto = costo_biglietto_km
    }

    //COSTO DEL BIGLIETTO MOSTRATO IN CONSOLE.LOG
    console.log(costo_biglietto.toFixed(2));

})
