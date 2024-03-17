//Método 3: Array.prototype.copyWithin()
//Esse array é utilizado para copiar uma parte do array para outra localização do mesmo array, ele retorna o array modificado sem modificar seu comprimento.

//Exemplo 1: Copia de elemnetos de um array para outra posição no mesmo array

let letras = ["a", "b", "c", "d", "e", "f"];

console.log(letras.copyWithin(0,4));

//Exemplo 2: Limitar a quntidade de elementos copiados

let números = ["10", "20", "30", "40", "50", "60"];
números.copyWithin(0,5,6);

console.log(números);