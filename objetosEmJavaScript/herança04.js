/**
 * lembrando que esses método são para fins de conhecimento e aprofundamento na linguagem
 * porém a prototype não é aconselhavel ser instanciado ou acrecentado algo nele, isso não
 * é o correto e não devera ser feito, salvo em condições específicas
 */

function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);
console.log(MeuObjeto.prototype === obj2.__proto__);

MeuObjeto.prototype.nome = 'Johnny';
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia!\nMeu nome é ${this.nome}`);
}

obj1.falar();
obj2.nome = 'Bruna';
obj2.falar();