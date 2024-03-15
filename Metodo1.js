//Método 1: Array.prototype.at()
//É utilizado para receber elementos de um arrey no índice especificado, recebendo valor inteiros retorna o item referente ao seu index, permitindo valores positivos e negativos.

//Exemplo 1: Acessando elemento em uma posição específica

let comidas = ["Pizza", "Batata-Frita", "Pastel", "Hambúrguer", "Cachorro-Quente"];
console.log(comidas.at(2));

//Exemplo 2: Acessando elementos em uma posição negativa

let valores = ["49,90", "15,00", "7,00", "35,50", "29,90"];
console.log(valores.at(-3));

