console.log(`\nCondicionais`);

const listaDeDestinos = new Array(
    `Florida`,
    `Barcelona`,
    `Florianopolis`
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Vegas";

console.log(`\n Destinos possíveis:`);
console.log(listaDeDestinos);
 
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

/* 
Código que eu fiz...

let posicao = 0;
let destinoConfirmado = false;
while(posicao <= 2){
    if(listaDeDestinos[posicao] != destino){
        posicao = posicao + 1;
    }
    else {
        console.log(`Temos passagens para ${destino}!`);
        posicao = 3;
        destinoConfirmado = true;
    }
}

if(destinoConfirmado == false){
    console.log(`Sinto muito, não temos ${destino}.`);
}
                                                                */


//Código da Alura...

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //faz o programa sair do while
    }

    contador += 1;
    //forma resumida de escrever
    //contador = contador + 1
}

console.log(`Destino existe: ${destinoExiste}`);

if(podeComprar && destinoExiste){
    console.log(`Boa Viagem!`);
}

else {
    console.log(`Desculpe, tivemos um erro.`);
}

/*
!! FORMA MAIS COMUM DE SE USAR !!
for(let i = 0 ; i < 3 ; i ++ ){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
}

//"i" como contador
                                            */