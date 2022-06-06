const container = document.querySelector(".container")



// creo l array con oggetti all interno 

const listaBici = [
    {
        nome: "MountainBike",
        peso: 1000,
    },
    {
        nome: "Enduro",
        peso: 2000,
    },
    {
        nome: "BMX",
        peso: 1450,
    },
    {
        nome: "DownHill",
        peso: 1430,
    },
    {
        nome: "Corsa",
        peso: 840,
    },
    {
        nome: "Cross",
        peso: 4400,
    }
]




// creo una funzione che mi controlla il peso e mi risulta quella piu leggera
function pesoMinore (lista){
    
    // con DESTRUCTURING vado ad aggiungere un oggetto con le KEY:peso,nome il cui valore e dato dal oggetto corrispondente all indice corrente [0]
    let biciPiuLeggera = lista[0];

    console.log(biciPiuLeggera);
    // creo il ciclo per controllare quale di questi oggetti ha il peso con valore minore
    for(let i=1; i < lista.length; i++){

        const {peso, nome} = lista[i]

        debugger
        if(peso < biciPiuLeggera.peso){
            biciPiuLeggera ={
                nome,
                peso,
            };
            
        }
    console.log(biciPiuLeggera);
    container.innerHTML = (`<h1>${biciPiuLeggera.nome}</h1>
                            <h2>${biciPiuLeggera.peso} grammi</h2>`)
}
}






pesoMinore(listaBici)







