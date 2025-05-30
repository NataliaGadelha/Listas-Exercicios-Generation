// Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.

// * Para resolver este exercício, não se esqueça de criar a Classe Stack

import readlineSync from 'readline-sync';
//importando a classe Stack
import { Stack } from "./Stack";

const pilhaLivros = new Stack<string>();
let opcao: string;

do {
  console.log("***********************************************");
  console.log("\n=========== MENU PILHA DE LIVROS ============");
  console.log("           1 - Adicionar livro na pilha");
  console.log("           2 - Listar todos os livros");
  console.log("           3 - Retirar livro da pilha");
  console.log("           0 - Sair");
  console.log("***********************************************");
  opcao = readlineSync.question("\nEntre com a opção desejada: ");

  switch (opcao) {
    case '1':
      const livro = readlineSync.question("\nDigite o nome do livro: ");
      pilhaLivros.push(livro);
      console.log("\nPilha: ")
      pilhaLivros.printStack();
      console.log(`\nLivro '${livro}' adicionado à pilha.`);
      break;

    case '2':
      console.log("\nLista de livros na pilha: \n");
      pilhaLivros.printStack();
      break;

    case '3':
      const retirado = pilhaLivros.pop();
      if (retirado) {
        console.log("\nPilha: \n")
        pilhaLivros.printStack();
        console.log(`\nO livro '${retirado}' foi retirado da pilha.`);
      }
      break;

    case '0':
      console.log("\nPrograma finalizado!");
      console.log("\nEncerrando o programa...");
      break;

    default:
      console.log("\nOpção inválida. Tente novamente.");
  }

} while (opcao !== '0');
