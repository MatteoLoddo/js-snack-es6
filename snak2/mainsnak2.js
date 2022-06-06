
// creo un arrray con oggetti
const squadre = [
    {
        nome: "Real Madrid",
    },
    {
        nome: "Milan",
    },
    {
        nome: "Inter",
    },
    {
        nome: "Juventus",
    }
]

console.log(squadre);
// creo un secondo array dove pushare gli oggetti con nuove KEY
const squadreConInfo = []

// creo il ciclo per ciclare gli elementi nell array
for(let i=0; i<squadre.length; i++){
    // creo due variabili che saranno le nuove KEY 
    const goal = Math.floor(Math.random()*100);
    const falli = Math.floor(Math.random()*100);


    // console.log(squadre[i], goal , falli);
    // pusho ogni oggetto aggiornandolo con la KEY che mi seve
    squadreConInfo.push({
        ...squadre[i],
        falli,
    })



}

console.log(squadreConInfo);
