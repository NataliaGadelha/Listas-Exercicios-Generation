// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem 
// de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.

// * Para resolver este exercício, não se esqueça de criar a Classe Queue


import readlineSync from 'readline-sync';
//importando a classe Queue
import { Queue } from './Queue';

//Inicia a fila de strings vazia
const filaBanco = new Queue<string>();
let opcao: string;

//Criação do Menu usando do while para repetir enquanto o usuário não digitar 0
do {
  console.log("***********************************************")
  console.log("\n================ MENU BANCO =================");
  console.log("           1 - Adicionar cliente");
  console.log("           2 - Listar clientes");
  console.log("           3 - Chamar próximo cliente");
  console.log("           0 - Sair");
  console.log("***********************************************")
  opcao = readlineSync.question("\nEntre com a opção desejada: ");

  //switch case para definir o que cada número digitado pelo usuário faz
  //usando os métodos da classe Queue
  switch (opcao) {
    case '1':
      const nome = readlineSync.question("\nDigite o nome do cliente: ");
      filaBanco.enqueue(nome);
      console.log(`\nCliente '${nome}' adicionado à fila!`);
      break;

    case '2':
      console.log("\nClientes na fila: \n");
      filaBanco.printQueue();
      break;

    case '3':
      const chamado = filaBanco.dequeue();
      if (chamado) {
        console.log("\nFila: \n");
        filaBanco.printQueue();
        console.log(`\nO Cliente '${chamado}' foi chamado!`);
      } else {
        console.log("\nA fila está vazia. Nenhum cliente para chamar.");
      }
      break;

    case '0':
      console.log("\nEncerrando o programa...");
      console.log("\nPrograma finalizado!");
      break;

    default:
      console.log("\nOpção inválida! Tente novamente.");
  }

} while (opcao !== '0');

