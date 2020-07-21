/**
 * 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
 * e imprime a quantidade no console.
 * @author JohnnyCarvalho
 */
let negativos = 0;
function listaNegativos (vetor) {
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0) {
            negativos++;

        }
    }
    return `A quantidade de número(s) negativo é: ${negativos}`;
}

vetor =  [-6, 5, 7, -1, 1, 3, 11, -10, 6, 9]
console.log(listaNegativos(vetor))