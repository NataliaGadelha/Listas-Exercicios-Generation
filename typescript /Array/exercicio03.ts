import readlinesync = require("readline-sync");

console.log("================================================");
console.log("           COLEÇÃO DE NÚMEROS INTEIROS          ");
console.log("================================================");
console.log("  Digite 10 números inteiros **não repetidos**. ");
console.log("      Números repetidos serão ignorados.\n");

const numeros: Set<number> = new Set<number>();

let tentativas = 0;


while (tentativas < 10) {
    const entrada = readlinesync.questionInt(`Digite o número ${tentativas + 1}: ` , {
                 limitMessage: "Por favor, digite um número inteiro válido. \n" }); //
    const numero = Number(entrada);

    // Tenta converter e adicionar — mesmo se for NaN
    if (!numeros.has(numero)) {
        numeros.add(numero);
    }

    tentativas++; // avança mesmo se o usuário digitar algo inválido
}

// Vi que no exemplo do exercício na saída os valores estavam ordenados e por isso adicionei essa validação
const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);

// Mostre na tela todos os elementos da Collection Set
console.log("\nListar dados do Set:");
for (const numero of numerosOrdenados) {
    console.log(numero);
}

/*Tentei fazer assim, validando com readlinesync.quesntionInt, mas quando verifica que é um número repetido
ele não aceita o número inválido e desconsidera, continuando a pedir 10 números */
// while (numeros.size < 10) {
//     const entrada = readlinesync.questionInt(`Digite o número ${numeros.size + 1}: `, {
//         limitMessage: "Por favor, digite um número inteiro válido." });
//     const numero = Number(entrada);

//     if (numeros.has(numero)) {
//         console.log("Número repetido. Digite um valor diferente.");
//         continue;
//     }

//      numeros.add(numero);
// }

// console.log("\nNúmeros digitados (sem repetição):");
// for (const numero of numeros) {
//     console.log(numero);
// }

