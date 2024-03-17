//Método 6: Array.prototype.find()
//Esse método executa a função callback uma vez para cada elemento presente no array até encontar um valor verdadeiro

//Exemplo 1: Encontrando um objeto com uma propriedade específica dentro de um array

let nomes = [{ Idade: 10, Nome: "Alice" }, { Idade: 25, Nome: "Fernanda" }, { Idade: 39, Nome: "Matias" }, { Idade: 15, Nome: "Margarida" }, { Idade: 2, Nome: "Dudinha" }, { Idade: 5, Nome: "Antônio" }];
let idades = nomes.find(nomes => nomes.Idade === 5);

console.log(idades);

//Exemplo 2: Encontrando o primeiro número par dentro de um array

let pares = ["15", "25", "30", "24", "2"];
let saída = pares.find(num => num % 2 == 0);

console.log (saída);