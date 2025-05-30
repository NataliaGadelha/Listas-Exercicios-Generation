const leia = require('readline-sync');

let idade;
let continua = true;
let menores = 0;
let maiores = 0;

while (continua) {

    idade = leia.questionInt("\nDigite uma idade: ");

    if (idade < 0){
        break;
    }
    
    if (idade < 21) {
        menores++;
    }else if (idade > 50) {
        maiores++;
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menores}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores}`);