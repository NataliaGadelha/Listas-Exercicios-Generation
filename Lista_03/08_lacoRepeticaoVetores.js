const leia = require('readline-sync');

// let vetorString = [
//     "Boxer",
//     "Pastor Alemão",
//     "Pinscher"
// ];

// for (let contador = 0; contador < vetorString.length; contador++) {
//     console.log((contador + 1) + "Temos a raça: " + vetorString[contador]);
// }

let lista = [];

let par = 0, soma = 0;

for (let contador = 0; contador < 10; contador++) {
    lista[contador] = leia.questionInt(`\nDigite o ${contador + 1}° número: `);
    soma += lista[contador];
    //soma = soma + lista[contador] Também funciona
}

//mostrar os números nos índices ímpares
for (let contador = 1; contador < 10; contador+=2) {
    console.log(`Elementos nos índices ímpares: ${lista[contador]}`);
    // console.log(`O número ${lista[contador]} está no índice ${contador}`);
}

console.log("\nElementos pares do vetor:");
for (let contador = 0; contador < lista.length; contador++) {
    if (lista[contador] % 2 === 0) {
        console.log(lista[contador]);
    }
}

    console.log(`Soma: ${soma}`);

    let media = soma / lista.length;
console.log(`Média: ${media.toFixed(2)}`);


