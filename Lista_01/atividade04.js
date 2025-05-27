const leia = require('readline-sync');

let n1, n2, n3,n4, produto;

n1 = leia.questionFloat("\nnumero1: ");
n2 = leia.questionFloat("numero2: ");
n3 = leia.questionFloat("numero3: ");
n4 = leia.questionFloat("numero4: ");

produto = (n1 * n2) - (n3 * n4);

console.log("Diferença: " + produto);