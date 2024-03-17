//Método 11: Array.prototype.splice()
//Esse método é utilizado para modificar um array ao adicionar, remover ou substituir elementos.

//Exemplo 1: Remover elementos de um array.

let número = [1, 2, 3, 4, 5, 6];
número.splice(1,3);

console.log(número);

//Exemplo 2: Inserir elementos em um array.

let numeros = [10, 20, 30, 40, 50, 60, 70];
numeros.splice(2, 0, "a", "b");

console.log(numeros);

//Exemplo extra: Substituir elementos de um array.

let numbers = [100, 200, 300, 400, 500, 600];
numbers.splice(2, 2, "a", "b");

console.log(numbers);
