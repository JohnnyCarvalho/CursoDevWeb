/**
 * Agora vamos ver alguns exemplos de null e underfined, entender
 * oque é cada um deles
 */

 /**
  * Nesse primeiro exemplo vamos criar uma variávrl e não iremos atribuir nada a ela
  * nesse caso vai imprimir no console a palavra "Underfined" que significa indefinido
  * ou seja, dizendo que a variável não tem nada dentro, não foi definido nada a ela
  * portanto ela nunca sera inicializada, ela não tem nenhum endereço de memória
  */
 let valorIndefinido // não está recebendo nada
 console.log(valorIndefinido); // vai imprimir no console a palavra "Underfined"

/**
 * agora vamos ver um exemplo com valor null, nesse novo exemplo embora pareã semelhante ao 
 * anterior, aqui nós inicializamos a variável, ou seja, nós atribuimos um valor a ela, embora
 * esse valor seja null, mais ele está lá, ou seja, essa variável tem um endereço de memória e
 * portanto não imprimira a mensagem "Underfined" no terminal e sim a mensagem "null", ou seja, um valo null
 * mais não deixa de ser um valor
 */
 valorIndefinido = null;
 console.log(valorIndefinido);