/**
 * 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
 * deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações.
 * @author JohnnyCarvalho
 */
let vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
function percorreLista (vetor) {
    // let vetor = [];
    let dentro = 0;
    let fora = 0;
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >=10 && vetor[i] <=20){
            dentro++;
        }
        else {
            fora++;
        }
    }
    console.log(`Dentro do intervalo tem ${dentro} numeros\nFora do intervalo tem ${fora} números`);
}
percorreLista(vetor);


