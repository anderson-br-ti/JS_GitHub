//Console.log("Let's work with variables now.");
//console.log("Let's work with variables now.");
//JS é case sensitive

//não fazer
//mes = "Abril";

//const idade = 22;
const primeiroNome = "Frenkie";
const sobrenome = "De Jong";


//Para imprimir o primeiroNome completo
//temos algumas opções                        
//console.log(primeiroNome + sobrenome);
/*
O '+' fará com que tenha uma concatenação.
                                                        */
//console.log(primeiroNome, sobrenome);
/*
A vírgula funciona como separador de itens. 
                                                        */
//console.log(primeiroNome + " " + sobrenome);
/*
Também é possível concatenar um
espaço entre os itens.
                                                        */

/*Além disso, é possível declarar textos
sem usar as aspas, mas com crases(`).
Dessa forma, também iremos declarar as
variáveis de outra forma.                               */

//console.log(`His name is ${primeiroNome} ${sobrenome}`);
/*
Chamamos isso de interpolação de variáveis.
                                                        */

//nome = primeiroNome + sobrenome
/*
Esse código dá erro se
considerarmos "const primeiroNome" lá em cima,
pois "const" significa constante,
logo, a variável não pode ser modificada.
                                                        */ 

//Para mudar isso, vamos usar outra palavra
//que irá significar uma variável
//comum, que pode ser alterada.
//let primeiroNome = "Frenkie";

//Agora podemos sobrescrever
//primeiroNome = primeiroNome + sobrenome;

//console.log(primeiroNome);

/*
!! BOA PRÁTICA !!
Embora exista "let" para declarar variáveis que
possam ser alteradas, a boa prática diz que
deve-se limitar ao máximo usar o "let".

O ideal é sempre declarar variáveis como "const".
                                                        */


//Inclusive, em vez de usar "let" no primeiroNome
//para alterá-lo depois, podemos mudar a outra parte 
const nomeCompleto = primeiroNome + sobrenome;

console.log(nomeCompleto);

//Um exemplo de variável que pode ser alterada
//e que é mais comum de ser usada
//é uma variável de contador
let contador = 0;

//Pois normalmente essa variável
//costuma ser incrementada
contador = contador + 1;

//A idade de uma pessoa também varia
let idade; //declarando variável
idade = 22; //atribuindo valor
idade = idade + 1;
console.log(idade);