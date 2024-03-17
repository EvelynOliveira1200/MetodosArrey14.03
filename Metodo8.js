//Método 8: Array.prototype.findLastIndex()
//Esse método retorna o valor do último elemento do array que satisfizer a função de teste fornecida.

//Exemplo 1: Encontrar o índice do ultimo número par em um array

let numeros = ["1", "3", "5", "6", "9", "11", "21"];
let index = numeros.findLastIndex(num => num % 2 == 0);

console.log(index);

//Exemplo 2: Encontrar o índice do último nome que começa com a letra "Y"

let nomes = ["Sophia", "Mel", "Amora", "Samantha", "Bob", "Yasmim", "Yara"];
let lastIndex = nomes.findLastIndex(nome => nome.startsWith("Y"));

console.log(lastIndex);

