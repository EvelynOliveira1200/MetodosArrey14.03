//Método 5: Array.prototype.filter()
//Esse método cria um novo array com todos os elementos que passaram no teste de implementação pela função fornecida

//Exemplo 1: Criar um array, onde os números menores que zero sejam evidênciados

let números = ["-10", "-5", "-3", "0", "3", "5", "10"];
let filtrar = números.filter(num => num < 0);

console.log(filtrar);

//Exemplo 2: Criar um array, contendo apenas números ímpares

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let filtro = numbers.filter(num => num % 2 != 0)

console.log(filtro);