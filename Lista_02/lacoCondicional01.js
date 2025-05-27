const leia = require('readline-sync');

let numeroA, numeroB, numeroC;

numeroA = leia.questionInt("\nDigite o número A: ");
numeroB = leia.questionInt("Digite o número B: ");
numeroC = leia.questionInt("Digite o número C: ");

if (numeroA + numeroB > numeroC) {
    console.log(`${numeroB} + ${numeroA} = ${numeroA + numeroB} > ${numeroC}`);
    console.log("A Soma de A + B é Maior do que C");
} else if (numeroA + numeroB < numeroC) {
    console.log(`${numeroA} + ${numeroB} = ${numeroA + numeroB} < ${numeroC}`);
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log(`${numeroA} + ${numeroB} = ${numeroA + numeroB} = ${numeroC}`);
    console.log("A Soma de A + B é Igual a C");
}
    