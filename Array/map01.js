/**
 * Nesse projeto vamos aprender o map, ele faz nada mais do que criar um novo array
 * com os conteúdos podendo ou não serem modificados, nos exemplos abaixo veremos na prática 
 * como tudo isso funciona
 */
const nums = [1, 2, 3, 4, 5];

// for com propósito
let resultado = nums.map(function(e) {
    return e * 2;
})

console.log(nums); // imprime o array original
console.log(resultado); // imprime o novo array modificado

const soma10 = e => e + 10;
const multiplica = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(multiplica).map(paraDinheiro);
console.log(resultado);


