const leia = require('readline-sync');

let numero1, numero2, codigo, operacao, resultado;

numero1 = leia.questionFloat("\nDigite o 1º número: ");
numero2 = leia.questionFloat("Digite o 2º número: ");
codigo = leia.questionInt("Operação (1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão): ");

switch (codigo) {
    case 1:
        resultado = numero1 + numero2;
        operacao = "+";
        break;
    case 2:
        resultado = numero1 - numero2;
        operacao = "-";
        break;
    case 3:
        resultado = numero1 * numero2;
        operacao = "*";
        break;
    case 4:
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            operacao = "/";
       } else {
            console.log("\nErro: divisão por zero!");
            process.exit(); // Encerra o programa corretamente
        }
        break;
    default:
        console.log("\nOperação Inválida!");
        process.exit(); // Encerra o programa corretamente
}

// Só chega aqui se a operação foi válida
console.log(`${numero1} ${operacao} ${numero2} = ${resultado}`);
