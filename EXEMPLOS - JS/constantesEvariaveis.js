/** como declarar uma variável em java script */
var a = 10; // lembrando que o ; é opcional
let b = 20; // essa é uma forma digamos que mais moderna de se declarar uma variável

var a = 100;
//let b = 200; // nesse caso ele vai gerar um erro por que a variável let b já foi declarada acima
b = 200; // se tirarmos o let o erro para de acontecer
console.log(a+b);

/** agora vamos ver alguns exemplos de constantes em js */
const c = 5;
//c = 150; // aqui vai dar erro por quer está tentando mudar uma constante
console.log(c);

const d = 20;
const nome = 'Johnny';
const idade = '29';
console.log(d + "\n"+nome + "\n"+idade);