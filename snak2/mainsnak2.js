
// creo un arrray con oggetti
const listaSquadre = [
    {
        nome: "Real Madrid",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Milan",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0,
    }
]

console.log(listaSquadre);
// creo un secondo array dove pushare gli oggetti con nuove KEY
const squadreConInfo = []

// creo il ciclo per ciclare gli elementi nell array
for(let i=0; i<listaSquadre.length; i++){
    // creo due variabili che saranno le nuove KEY 
    listaSquadre[i].punti = Math.floor(Math.random()*100);
    listaSquadre[i].falli = Math.floor(Math.random()*100);


}

for(let i=0; i<listaSquadre.length; i++){
const {nome,falli} = listaSquadre[i]
}

console.log(squadreConInfo);


for(let key in listaSquadre){
    console.log(listaSquadre[key]);
}