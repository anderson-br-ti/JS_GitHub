/* 
C:\Users\Andy_TheDeviant.AND2IN1NOTEBOOK\Downloads\Lifestyle\IT\A L U R A\Conteúdo de cursos\JavaScript\Programando a Orientação a Objetos
*/

// PAREI NA AULA IV

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "John";
cliente1.cpf = 18690465;

// const cliente2 = new Cliente();
// cliente2.nome = "Mary";
// cliente2.cpf = 55882200;

const contaCorrenteJohn = new ContaCorrente();
contaCorrenteJohn.agencia = 101;
contaCorrenteJohn.cliente = cliente1;
contaCorrenteJohn.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Mary";
conta2.cliente.cpf = 55882200;
conta2.agencia = 102;

contaCorrenteJohn.transferir(200, conta2);

console.log(conta2);