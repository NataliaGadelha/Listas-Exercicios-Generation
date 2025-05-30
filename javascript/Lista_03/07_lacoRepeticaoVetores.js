const leia = require('readline-sync');

let numero, posicao;

let vetorNumero = [2,5,1,3,4,9,7,8,10,6];

numero = leia.questionInt("\nDigite o número que você deseja encontrar: ");

    posicao = vetorNumero.indexOf(numero);

if (posicao > -1 && posicao < 10) {
    console.log(`\nO número ${numero} está localizado na posição: ${posicao}`);
} else {
    console.log(`\nO número ${numero} não foi encontrado!`);
}
