console.log(`Listas`);

// const florida = `Florida`;
// const barcelona = `Barcelona`;
// const florianopolis = `Florianopolis`;

/*
!! BOA PRÁTICA !!
É importante usar o conceito "camelCase" nas variáveis.
O primeiro nome delas deve estar em minúsculo
e, se houver outros nomes, a inicial deles
deve estar em maiúsculo, como em "sanDiego", por exemplo.
                                                            */

//Para facilitar isso
//Podemos usar listas
//Ainda veremos melhor a respeito
//Ao estudar sobre orientação a objetos
//A princípio, pensemos apenas
//Na forma de escrever
const listaDeDestinos = new Array(
    `Florida`,
    `Barcelona`,
    `Florianopolis`
);

//Para adicionar um item na lista
listaDeDestinos.push(`Sweden`);

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

//Para remover um item na lista
//Devemos lembrar que o comando funciona
//Considerando (posição, quantidade)
//E a 1a posição da lista é 0
//Logo, para remover a Florida
listaDeDestinos.splice(0, 1);

console.log(listaDeDestinos);

//E para mostrar apenas um elemento
console.log(listaDeDestinos[1]);

//Se forem 2 elementos
console.log(listaDeDestinos[1], listaDeDestinos[0]);