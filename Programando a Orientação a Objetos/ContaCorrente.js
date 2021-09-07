import {Cliente} from "./Cliente.js";

export class ContaCorrente {
  //Atributos públicos
  agencia;
  _cliente;

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  //Atributos privados
  //#saldo = 0;
  /* https://github.com/tc39/
  proposal-class-fields#private-fields */
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if(valor <= 0) {
      return;
    }
      this._saldo += valor;
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);    
  }
}