/**
 * 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 * @author JohnnyCarvalho
 */

let vetor = [10, 20, 40, 30];
let media = 0;
function cauculaMedia (vetor) {
    for (let i = 0; i < vetor.length; i++) {
        media = media + vetor[i];
    }
    return `A média é: ${media/vetor.length}`;

}

console.log(cauculaMedia(vetor));
