const listaStudenti = [
    {
        nome: "Marco",
        id: 213,
        grades:"78",
    },
    {
        nome: "Paola",
        id: 110,
        grades:"78",
    },
    {
        nome: "Andrea",
        id: 250,
        grades:"78",
    },
    {
        nome: "Gaia",
        id: 145,
        grades:"78",
    },
    {
        nome: "Luigi",
        id: 196,
        grades:"78",
    },
    {
        nome: "Piero",
        id: 102,
        grades:"78",
    },
    {
        nome: "Francesca",
        id: 120,
        grades:"78",
    },
]


// 1: TRASFORMARE IL NOME DEGLI STUDENTI IN MAIUSCOLO

// creo un array vuoto dove inserire i nomi trasformati in MAIUSCOLO

// attraverso .map() ciclo nell array listaStudenti eprendo in considerazione il la KEY nome e salvo il return nel nuovo array listaStudentiMaiuscolo
const listaStudentiMaiuscolo = listaStudenti.map(({nome})=>{
// trasformo il nome dello studente in maiuscolo
    const nomeMaiuscolo = nome.toUpperCase()
    // console.log("Nome in minuscolo =   " + nome);
    console.log("Nome in maiuscolo =   " + nomeMaiuscolo);
return nomeMaiuscolo
})

console.log(listaStudentiMaiuscolo);



// 2: 
