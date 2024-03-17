//Método 9: Array.prototype.flat()
//Esse método cria um novo array com todos os elementos de um array sbdimencionado concatenando em uma única dimensão

//Exemplo 1: Juntando um array de arrays

let letras = [["a", "b"], ["c", "d"], ["e", "f"]];

console.log(letras.flat());

//Exemplo 2: Juntando e removendo elementos indefinidos

let palavras = [["abacaxi", "abacate"], , "acerola", "manga", , "goiaba "];

console.log(palavras.flat());
