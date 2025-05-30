import readlinesync = require("readline-sync");

// Criar array de strings
const lista: Array<string> = new Array<string>();

// Solicitar ao usuário, que ele digite via teclado 5 cores
for (let contador = 0; contador < 5; contador++) {
    const cor = readlinesync.question(`Digite a ${contador + 1}° cor: `, {
        limitMessage: "Digite uma palavra!",
    });
    lista.push(cor);
}

// Mostra na tela todas as cores adicionadas. 
console.log("\nListar todas as cores:");
for (let cor of lista) {
    console.log(cor);
}

// Ordenar a lista com .sort()
const listaOrdenada = lista.sort();

// Mostrar na tela todas as cores adicionadas, ordenadas em ordem crescente.
console.log("\nOrdenar as cores:");
for (const cor of listaOrdenada) {
    console.log(cor);
}

// Tentei ordenar a lista e exibir as cores em ordem alfabética ao mesmo tempo, mas não funcionou
// console.log("\nOrdenar as cores:");
// for (const cor of lista) {
//     console.log(cor.sort());
// }
