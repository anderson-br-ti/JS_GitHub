console.log(`Condicionais`);

const listaDeDestinos = new Array(
    `Florida`,
    `Barcelona`,
    `Florianopolis`
);

const idadeComprador = 21;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log(`Comprador maior de idade`);
//     listaDeDestinos.splice(0, 1);
// }

// else if(estaAcompanhada){
//     console.log(`Comprador está acompanhado`);
//     listaDeDestinos.splice(0, 1);
// }

// else{
//     console.log(`Não é maior de idade e não posso vender`);
// } 

/**
|| (2 barras verticais) - Operador lógico 'OU'                 
                                                                    */
if(idadeComprador >= 18 || estaAcompanhada){
    console.log(`Escolha seu destino.`);
    listaDeDestinos.splice(0, 1);
}

else{
    console.log(`Não é maior de idade e não posso vender`);
} 

// [\n] - Pula uma linha
// [&&] - Operador lógico 'E'
console.log(`Embarque:\n\n`);
if(idadeComprador >= 18 && temPassagemComprada){
    console.log(`Boa Viagem!`);
}

else {
    console.log(`Você não pode embarcar!`);
}

console.log(listaDeDestinos);