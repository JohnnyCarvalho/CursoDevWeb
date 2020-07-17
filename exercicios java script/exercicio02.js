/**
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. 
 * Isósceles: Dois lados iguais. 
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 * @author JohnnyCarvalho
 */
function ladosDoTriangulo(ladoA, ladoB, ladoC){
    if (ladoA === ladoB && ladoB === ladoC){
        console.log("O triângulo é Equilátero !");
    }
    else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        console.log("O triângulo é Isósceles !");
    }
    else {
        console.log("O triângulo é Escaleno !");
    }
}
ladosDoTriangulo(2,2,2);
ladosDoTriangulo(2,2,1);
ladosDoTriangulo(2,1,3);
