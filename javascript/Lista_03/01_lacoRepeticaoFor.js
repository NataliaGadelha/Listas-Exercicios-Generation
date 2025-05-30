const leia = require('readline-sync');

let numero1, numero2, i;

numero1 = leia.questionInt("\nDigite o primeiro número do intervalo: ");
numero2 = leia.questionInt("Digite o segundo número do intervalo: ");

if (numero1 < numero2) {
    console.log(`\nNo intervalo entre ${numero1} e ${numero2}: \n`);
} else {
    console.log("\nIntervalo inválido!");
}

for ( i = numero1; i <= numero2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log( i + " é multiplo de 3 e 5");
    }
  }