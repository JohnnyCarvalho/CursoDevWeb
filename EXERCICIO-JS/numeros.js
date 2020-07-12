/** nesse código vamos ver alguns exemplos de números em Java Script */
const peso1 = 1.0; // uma forma de definir uma variável do tipo number
const peso2 = Number('2.0'); //outra forma seria essa
console.log(peso1 + "\n" + peso2);
/**
 * Em linguagens de programação como Java por se colocarmos um número 1.0 por exemplo, 
 * ele vai entender que é um número float ou double
 * por causa do ponto separando os números, já aqui em Java Script se colocar 1.0 ele vai entender que é 
 * um número inteiro e não um número real.
 */
console.log(Number.isInteger(peso1) + "\n" + Number.isInteger(peso2)); // esse comando mostra se o número é um inteiro ou não, se for vai imprimir true, se nao false.

/** 
 * nesse segundo caso como colocamos o número quebrado, ou seja, não inteiro ele vai imprimir 1.5 ou 2.3 e embaixo vai imprimir false 
 **/
const peso3 = 1.5; 
const peso4 = Number('2.3'); 
console.log(peso3 + "\n" + peso4);
console.log(Number.isInteger(peso3) + "\n" + Number.isInteger(peso4));

/**
 * Nesse código vamos ver um exemplo de cauculo de uma média de avaliação
 */
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1+avaliacao2;
const media = total/2;
console.log("Manipulando casas decimais: "+ media.toFixed(2)); // o metodo toFixed permite escolher quantas casas decimais queremos colocar na nossa varável
console.log("Transformando em string "+ media.toString()); // transforma um Number em um string
console.log("Transformando em binário: "+ media.toString(2)); // transforma um Number em um binário, simples assim
console.log("Tipo da variável: "+ typeof media) // imprimindo o tipo da variável
console.log(typeof Number) // o number é o tipo da variável e Number é uma função