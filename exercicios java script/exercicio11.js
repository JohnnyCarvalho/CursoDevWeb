/**
 * 11) As regras para o cálculo dos anos bissextos são as seguintes:
 * De 4 em 4 anos é ano bissexto;
 * De 100 em 100 anos não é ano bissexto;
 * De 400 em 400 anos é ano bissexto;
 * Prevalecem as últimas regras sobre as primeiras.
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
 * mensagem e retornando true ou false.
 * @author JohnnyCarvalho
 */

 function verificaAno (ano) {
     if (ano % 4 == 0) {
         console.log(ano+": ** ESSE ANO É BISSEXTO **");
         return true;
     }
     else {
         console.log(ano+": ## ESSE ANO NÃO É BISSEXTO ##");
         return false;
     }
 }

verificaAno(2020);
verificaAno(2019);
verificaAno(2018);
verificaAno(2017);
verificaAno(2016);