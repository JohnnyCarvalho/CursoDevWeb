let aprovados = new Array('Menos recomendável','Johnny', 'Bruna', 'Diego', 'Gabriela'); // não é o mais recomendável
console.log(aprovados);

listaAprovados = ['Mais recomendável', 'Johnny', 'Bruna', 'Diego', 'Gabriela'];
console.log(listaAprovados[0]);
console.log(listaAprovados[1]);
console.log(listaAprovados[2]);
console.log(listaAprovados[3]);
console.log(listaAprovados[4]);

// para mudar um elemento de um array basta
listaAprovados[3] = 'Paulo'; // aqui esta substituindo Diego por Peulo
console.log(aprovados);
// para acrecentarmos basta
listaAprovados.push('Diego'); // aqui esta sendo acrecentado Diego na lista
console.log(listaAprovados.length);
console.log(listaAprovados);

// alterando o array, mudando as ordens das coisas e as reordenando nesse caso em ordem alfabética
console.log(listaAprovados);
listaAprovados.sort();
console.log(listaAprovados);

// deletando itens de dentro de um array
let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros1);
delete numeros1[9];
console.log(numeros1);

/**
 * agora vamos ver um método que exclui um dado 
 * número de elementos de dentrbo de um array, vejams o exemplo
 */

let numeros2 = [10, 25, 36, 98, 45, 65];
numeros2.splice(1, 2); // nesse caso será excluido a partir da posição 1 2 elemntos, ou seja, o elemento que está na posição 1 e mais 1
console.log(numeros2);
numeros2.splice(1,3) // nesse caso será excluido a partir da posição 1, 3 elemntos, ou seja, o elemento que está na posição 1 e mais 2
console.log("Excluindo 3 elementos: "+numeros2);
// incluindo elementos com splice
let numeros3 = ['João', 'Maria', 'Amanda', 'Ana', 'Leticia', 'Aline']
numeros3.splice(1,0,3,4,5) // nesse caso foi incluso sem excluir nada da lista
console.log("Incuindo elementos: "+numeros3);
// incluindo elementos com splice no lugar de outros
let numeros4 = ['João', 'Maria', 'Amanda', 'Ana', 'Leticia', 'Aline']
numeros4.splice(1,3,3,4,5) // nesse caso foi incluso sem excluir nada da lista
console.log("Incuindo elementos no lugar de outros: "+numeros4);
