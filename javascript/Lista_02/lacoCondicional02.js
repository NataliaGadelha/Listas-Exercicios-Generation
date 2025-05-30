const leia = require('readline-sync');

let numero;

numero = leia.questionInt("\nDigite um número: ");

if (numero % 2 === 0 && numero > 0){
    console.log(`O Número ${numero} é par e positivo!`);
} else if (numero % 2 === 0 && numero < 0) {
    console.log(`O Número ${numero} é par e negativo!`);
} else if (numero % 2 !== 0 && numero > 0) {
    console.log(`O Número ${numero} é ímpar e positivo!`);
} else {
    console.log(`O Número ${numero} é ímpar e negativo!`);
}
