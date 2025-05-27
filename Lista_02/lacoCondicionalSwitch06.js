const leia = require('readline-sync');

let cargo, codigoCargo, salario, nomeColaborador, percentualReajuste, novoSalario;

nomeColaborador = leia.question("\nNome do colaborador: ");
codigoCargo = leia.questionInt("Cargo: \t\t\t\t");
salario = leia.questionFloat("Salário: \t\tR$ ");



switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentualReajuste = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentualReajuste = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentualReajuste = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentualReajuste = 0.08;
        break;
    default:
        console.log("Digite um código válido!");
        return;
}

novoSalario = salario + (percentualReajuste * salario)

console.log(`\nNome do Colaborador: ${nomeColaborador}`);
console.log(`Cargo:   \t\t${cargo}`);
console.log(`Salário: \t\tR$ ${novoSalario.toFixed(2)}`);