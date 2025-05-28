const leia = require('readline-sync');

let numeros = 0;
let soma = 0;

do {

    numeros = leia.questionInt("Digite um número: ");

    if (numeros > 0) {
        soma += numeros;
    }

} while (numeros !== 0);

    console.log(`A soma dos numeros positivos é: ${soma}`);