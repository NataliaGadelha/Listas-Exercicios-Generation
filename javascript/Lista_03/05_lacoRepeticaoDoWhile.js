const leia = require('readline-sync');

let numeros = 0;
let soma = 0;

do {

    numeros = leia.questionInt("\nDigite um número: ");

    if (numeros > 0) {
        soma += numeros;
    }

} while (numeros !== 0);

    console.log(`\nA soma dos números positivos é: ${soma}`);