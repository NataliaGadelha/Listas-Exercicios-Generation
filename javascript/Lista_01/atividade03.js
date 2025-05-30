const leia = require('readline-sync');

let salarioBruto, adicionalNoturo, horasExtras, descontos, salarioLiquido;

salarioBruto = leia.questionFloat("\nSalário Bruto: \t\t");
adicionalNoturo = leia.questionFloat("Adicional Noturno: \t");
horasExtras = leia.questionFloat("Horas Extras: \t\t");
descontos = leia.questionFloat("Descontos: \t\t");

salarioLiquido = salarioBruto + adicionalNoturo + (horasExtras * 5) - descontos;

console.log("Salário Líquido: \t" +
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(salarioLiquido))