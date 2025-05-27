const leia = require('readline-sync');

let nomeProduto, preco, quantidade, codigo, valorTotal;

codigo = leia.questionInt("\nCódigo do Produto: ");
quantidade = leia.questionInt("Quantidade: ");

switch (codigo) {
    case 1:
        nomeProduto = "Cachorro quente";
        preco = 10.00;
        break;
    case 2:
        nomeProduto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        nomeProduto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        nomeProduto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        nomeProduto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        nomeProduto = "Suco de laranja";
        preco = 13.00;
        break;
    default:
        console.log("Digite um código válido!");
        return;
}

valorTotal = quantidade * preco;

console.log(`\nProduto: ${nomeProduto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);


