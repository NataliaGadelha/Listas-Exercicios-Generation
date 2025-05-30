const leia = require('readline-sync');

let nomeDoador, idade, primeiraDoacao, apto;

nomeDoador = leia.question("\nDigite o nome do doador: ");
idade = leia.questionInt("Digite a idade do doador: ");
primeiraDoacao = leia.question("Primeira doação de sangue? (true/false): ").toLowerCase() === 'true';

apto = false;

if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && idade <= 69) {
        apto = !primeiraDoacao;
    } else {
        apto = true;
    }
}

if (apto) {
    console.log(`\n${nomeDoador} está apto(a) para doar sangue!`);
} else {
    console.log(`\n${nomeDoador} não está apto(a) para doar sangue!`);
}
