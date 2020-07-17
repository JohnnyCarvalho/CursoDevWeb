/**
 * @author JohnnyCarvalho
 * 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
 * registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
 * mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
 * pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
 * vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
 * jogo. (Número do pior jogo).
 */
let listaPontos = "10, 20, 30, 50, 11, 02, 5, 18, 90, 45, 11, 33"

function verificaPontos(listaPontos){
    let listaPt = listaPontos.split(", ")
    let recorde = 0
    let pior = 1
    let maxPt = listaPt[0]
    let minPt = listaPt[0]

    for (let i = 0; i <listaPt.length; i++){
        if (listaPt[i] > maxPt){
            maxPt = listaPt[i]
            recorde++
        }
        else if (listaPt[i] < minPt){
            minPt = listaPt[i]
            pior = i + 1

        }
    }
    return [recorde, pior]
}

console.log(verificaPontos(listaPontos))