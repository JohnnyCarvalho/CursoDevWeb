const nome = 'Johnny';

/**
 *  nesse caso se fosse para concatenar mais coisas, muito mais 
 * coisas iria ficar complicado não é mesmo, nesse caso usaremos o template
 */
const concatenar = 'Bruna ' + 'e ' + nome +'S2';
console.log(concatenar);

/**
 * No caso do template, ele respeta as quebras de linha e também espaços se holver
 * vamos fazer um exemplo abaixo, ele imprime na tela exatamente como está escrito 
 * no editor de texto
 * OBS não podemos usar nem aspas sumples e muito menos dupla, somente o sinal de crase ` 
 * all right!
 */
const template = `
        Hello guys, my name is ${nome}
        Bye Bye !`;

console.log(template);

/**
 * agora vamos ver uma expressão matemática concatenada com string
 */
console.log(`1 + 1 = ${1+1}`);

/**
 * agora vamos ver uma função que transforma um texto ou uma letra de minuscula
 * para maiuscula
 */
const up = texto => texto.toUpperCase();
console.log(`Cuidado.....${up('*** perigo ***')}!`); 