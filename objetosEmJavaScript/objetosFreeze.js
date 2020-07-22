/**
 * utilizando o método freeze no objeto, evita que ele seja modificado, é como se criassemos um objeto constante
 * mais se criarmos constante ele podera ser mudado, ja´utilizando o método freeze ele não podera ser modificado de nenhuma forma
 * vejamos alguns ezemplos
 */

// exemplo de criação de um objeto constante e depois o modificando
const pessoa = {nome: 'Johnny', idade: 29}
console.log("Sem modificação: "+pessoa.nome);
pessoa.idade = 29;
console.log("Com acrécimo de idade: "+pessoa.nome+" tem "+pessoa.idade+ " anos");
pessoa.nome = 'Bruna';
pessoa.idade = 24;
console.log("Com modificação de idade e nome: "+pessoa.nome+" tem "+pessoa.idade+ " anos");
/**
 * dessa forma vemos que por mais que criamos um objeto constante ele pode 
 * ser modificado, isso não acontece quando usamos o método freeze, vejamos um exemplo
 */
// agora implementaremos o método freeze no mesmo objeto criado anteriormente, logo em seguida tentaremos modificá-lo
Object.freeze(pessoa)
pessoa.nome = 'João';
pessoa.idade = 40;
console.log("Com modificação de idade e nome usando o método freeze: "+pessoa.nome+" tem "+pessoa.idade+ " anos");
