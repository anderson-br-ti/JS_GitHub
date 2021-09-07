console.log("Convertendo tipos");

console.log("ano" + 2020);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));
/*
[parse] - Conversão explícita.               
                                            */

console.log("10" / "2");
//Como é divisão, ele entende que
//Só faz sentido dividir números
//Portanto, ele faz a conversão implícita

console.log("Ricardo" / "2");
/*
Ele retorna "NaN", que seria Not A Number    
                                            */

console.log("7" / "2");
/*
Ele converte pra float e retorna 3.5         
                                            */