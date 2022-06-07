
// creo un array con una lista di nomi
const listaNomi = ['Michele','Monica', 'Fabio','Roberto','Federica','Francesco','Paolo','Umberto','Simone','Giovanni','Chiara']

// dichiaro un numero MAX e MIN
const max = 9;
const min = 3;

console.log("num MAX = "+ max + "/ num MIN = " + min );

// creo un altro array nel quale pushare gli elementi desiderati
let listaNomiCompresi = [];
let listaNomiCompresi2 = [];


//********************************************//
//*********          FOREACH        **********//
//********************************************//

// con il forEAch ciclo all interno della array listaNomi
listaNomi.forEach(function(nome, i){
    // dichiaro l indice di ogni nome
    const indiceNome = i+1;
    console.log(nome, i+1);
// creo condizione per decidere quali nomi pushare nell nuovo array
    if(indiceNome < max && indiceNome > min){
        listaNomiCompresi.push(nome);
    }

})
// scrivo in console l array compilato con i nomi compresi tra num MAX e num MIN
console.log("lista con forEach()   " + listaNomiCompresi);


//********************************************//
//*********          FILTER         **********//
//********************************************//

const listaNomi2 = ['Michele', 'Fabio','Roberto','Monica','Federica','Francesco','Paolo','Umberto','Simone','Giovanni','Chiara']


listaNomiCompresi2 = listaNomi2.filter(function(nome, i){
    const indiceNome = i+1;

    return indiceNome < max && indiceNome > min
})

console.log("lista con filter()    " + listaNomiCompresi2);
