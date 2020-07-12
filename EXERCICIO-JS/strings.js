/**
 * A gora vamos ver um pouco sobre strings em Java script
 */
const nome = 'Johnny';

console.log(nome.charAt(3)); // retorna a letra que está na posição indicada como parâmetro, nesse caso 3 que retorna a letra n
console.log(nome.charCodeAt(3)); // retorna o valor da letra (nesse caso na posição 3) que se encontra na tabela unicode ou tabela ascii
console.log(nome.indexOf('y')); // nesse caso ele imprime em que posição se encontra a letra y, nesse caso na posição 5
console.log(nome.substring(0, 3)); // nesse caso ele imprime os 3 primeiros digitos ou letras da string nome
console.log('Bruna é esposa de '.concat(nome).concat("!")); // para concatenar podemos usar essa função ou a que vemos abaixo
console.log('Bruna é esposa de ' + nome + "!"); // desse jeito também da certo
/**
 * nesse caso a função split cria um array e joga dentro desse array
 * e nesse caso separa por virgula a mensagem impressa na tela sra 
 * um nome do lado do outro, função muito top.
 */
console.log('Johnny, Bruna, Weliton, Rose, Isaac, Kathleen'.split('.')) 