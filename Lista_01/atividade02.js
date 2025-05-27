const leia = require('readline-sync');

let nota1, nota2, nota3, nota4;

nota1 = leia.questionFloat("\nDigite a Nota 1: ");
nota2 = leia.questionFloat("Digite a Nota 2: ");
nota3 = leia.questionFloat("Digite a Nota 3: ");
nota4 = leia.questionFloat("Digite a Nota 4: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Média final: " + media.toFixed(1));

