/** algumas operaçõe em Java Script são meio estranhas, vejamos alguma delas */

/**
 * O exemplo abaixo em outras linguagens de programação isso causaria um erro, mais em Java não, 
 * essa função metemática vai imprimir infinity no terminal pois em JS qualquer valor dividido por 0
 * gera um numero infinito
 */
console.log(7/0); 

/**
 * No exemplo abaixo em outras linguagens jamais daria certo uma coisa dessas,
 *  em JS como se trata de uma linguagem fracamente tipada, 
 * ela divide esse valor 10 que está em forma de string por 2 e o resultado no terminal é 5
 */
console.log('10'/2);

/**
 * No exemplo abaixo em outras linguagens repetiria a frase por n veses
 * em JS isso nao acontece
 */
console.log('Johnny'*2);

/**
 * Para manipularmos as casas decimais não podemos atacar diretamente o número com o toString por exemplo
 * vejamos nos exemplos abaixo
 */
console.log(10.7458.toFixed(2)); //esse modo está errado
console.log((10).toFixed(1)); // essa forma é a correta