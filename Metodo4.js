//Método 4: Array.prototype.every()
//Esse método é utilizado para testar se todos os elementos do array passam pelo teste de implementação

//Exemplo 1: Verifique se todos os elementos do array são maiores que 10

let numeros = ["10", "25", "15", "2"];
let maiores = numeros.every(elementos => elementos > 10);

console.log(maiores);

//Exemplo 2: Verifique se todos os elementos são pares

let números = ["10", "15", "4"];
let pares = números.every(elementos => elementos % 2 == 0);

console.log(pares);



