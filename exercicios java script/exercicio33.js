/**
 * 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
 * quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
 *  Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
 * mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 * @author JohnnyCarvalho
 */

let vetorInteiro = [10, 20, 30, 40];
let vetorString = ['Johnny', 'Dev', 'Bruna', 'Dev'];
let vetorDouble = [10.5, 20.5, 10.4, 20.4];

function concatenar(...args) {
    resultado = [];
    for (let i = 0; i <arguments.length; i++ ) {
        resultado = resultado.concat(arguments[i]);

    }
    return resultado;
}
    
console.log(concatenar(vetorInteiro, vetorString));
console.log(concatenar(vetorString, vetorDouble));
console.log(concatenar(vetorInteiro, vetorDouble));