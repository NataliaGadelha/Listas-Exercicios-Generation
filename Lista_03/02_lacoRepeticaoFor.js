const leia = require('readline-sync');

let numero;
let par = 0, impar = 0

for (let i = 0; i < 10; i++) {
    numero = leia.questionInt(`\nDigite o ${i + 1}° número: `);

    if (numero % 2 === 0) {
        par++;
    }else {
        impar++;
    }
}

console.log(`\nTotal de números pares: ${par}`);
console.log(`Total de números ímpares: ${impar}`); 

