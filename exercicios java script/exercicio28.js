/**
 * 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
 * @author JohnnyCarvalho
 */

let vetor = [2, 3, 6, 8, 12, 11, 25, 100 ,55, 22, 33, 63, 45, 78, 9, 5, 4, 2, 1, 8, 10]

function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}


paresImpares(vetor)