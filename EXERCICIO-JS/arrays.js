/**
 * Diferente de outras linguagens como Java por exemplo, array em java script
 * pode conter tamanho indefinido, ou seja, não há necessidade de vc instanciar
 * um valor para o array, vejamos exemplos abaxo
 */
const val1 = [7.7, 8.9, 6.3, 9.2];
console.log(val1[0], val1[1], val1[2], val1[3]);
console.log(val1[3]);
/**
 * executando a linha [15] o terminal vai imprmir undefined, ou seja, 
 * dizendo que essa posição no array não foi definida, mais o java 
 * script é tão senssacional que se vc quiser implementar mais posições 
 * no array basta inserir a qualquer momento, vejamos o exemplo abaixo
 */
console.log(val1[4]);
val1[4] = "Johnny";
console.log(val1);
console.log(val1[4]);
/**
 * E se pedirmos para imprimir a posição 10 por exemplo e atribuirmos aos array essa posição
 * mesmo que não atribuirmos as posições 5,6,7,8,9 ele vai imprimir
 * vejamos o exemplo abaixo
 */
val1[10] = "Bruna";
console.log(val1);
console.log(val1[10]);
console.log(val1.length); // essa função mostra quantos elementos existem dentro do array

val1.push({id: 3}, false, null, "teste"); // essa fnção incrementa itens ao array
console.log(val1);

console.log(val1.pop()); // retira o elemento valor do array
// outra forma de retirar algum elemento do array é ultilizando o delete, vejamos no exemplo abaixo
delete val1[0];
console.log(val1);
