//Método 7: Array.prototype.findIndex()
//Esse método é utilizado para retornar o índice do primeiro elemento em um array que satisfaz uma determinada condição promovida por uma função de retorno de chamada. Caso não corresponda a condição, seu retorno será -1.

//Exemplo 1: Encontar o índice do elemento que satisfaça a condição personalizada. 

let objetos = [{ Valor: 5.00, Nome: "Dado" }, { Valor: 29.90, Nome: "Bola" }, { Valor: 10.00, Nome: "Petéca" }, { Valor: 15.00, Nome: "Vassoura" }];
let index = objetos.findIndex(objetos => objetos.Valor === 15.00);

console.log(index);

//Exemplo 2: Encontrar o índice do primeiro elemento maior que o valor específico. 

let número = ["13", "17", "21", "23", "26", "-1", "03"];
let saída = número.findIndex(num => num < 0);

console.log(saída);
