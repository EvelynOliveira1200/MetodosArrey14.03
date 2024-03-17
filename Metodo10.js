//Método 10: Array.from()
//Esse array é utilizado para criar uma nova instância de um array a partir de um objeto semelhante de um array (como um objeto Array-like ou um iterável, como um objeto do tipo Set, Map, ou uma string).

//Exemplo 1: Convertendo uma string em um array

let string = "Sistema";

console.log(Array.from(string));

//Exemplo 2: Mapeando os elementos de um array

let numeros = [1, 2, 3, 4];
let saída = Array.from(numeros, x => x * 2);

console.log(saída);