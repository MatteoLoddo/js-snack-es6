const listaStudenti = [
    {
        nome: "Marco",
        id: 213,
        grades: 78,
    },
    {
        nome: "Paola",
        id: 110,
        grades: 96,
    },
    {
        nome: "Andrea",
        id: 250,
        grades: 48,
    },
    {
        nome: "Gaia",
        id: 145,
        grades: 74,
    },
    {
        nome: "Luigi",
        id: 196,
        grades: 68,
    },
    {
        nome: "Piero",
        id: 102,
        grades: 50,
    },
    {
        nome: "Francesca",
        id: 120,
        grades: 84,
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



// 2: stampo in console solo gli studenti con la KAY grades maggiore di 70
const listaStudentiVoti =  listaStudenti.filter((studente, i)=>{
    const voto = studente.grades;

    return  voto > 70
})

console.log(listaStudentiVoti);

//3:  stampo in console solo gli studenti con la KAY grades maggiore di 70 e la KAY id maggiore di 120

const listaStudentiVoti2 =  listaStudenti.filter((studente, i)=>{
    const voto = studente.grades;
    const id = studente.id

    return  voto > 70 && id > 120 
})

console.log(listaStudentiVoti2);
