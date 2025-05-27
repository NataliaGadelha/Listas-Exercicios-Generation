const leia = require('readline-sync');

let salario, abono, novoSalario;

salario = leia.questionInt("\nDigite o Salário: ");
abono = leia.questionInt("Digite o Abono: ");

novoSalario = salario + abono;

console.log("Novo Salário:\t " +
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(novoSalario))
