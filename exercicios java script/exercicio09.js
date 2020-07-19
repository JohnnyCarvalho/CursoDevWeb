/**
 * 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
 * classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
 * possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
 * que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
 * arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
 * 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
 * seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
 * e o aluno será aprovado.
 * @author JohnnyCarvalho
 */

 // função que verifica para arredondar a nota
function verificaNota (notas) {
    if (notas % 5 > 2) {  //se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3
        return notas + (5 - (notas % 5));
    } 
    else if (notas % 5 < 3) {
        return notas;
    }

}

function verificaMedia (notas) {
    let verificaMedia = verificaNota(notas);
    if (verificaMedia >= 40) {
        return "Nota "+verificaMedia+": **** APROVADO ****";
    }
    else if (verificaMedia < 40) {
        return "Nota "+verificaMedia+": #### REPROVADO ####";
    }

}

console.log(verificaMedia(38));
console.log(verificaMedia(40));
console.log(verificaMedia(50));
console.log(verificaMedia(22));
console.log(verificaMedia(37));