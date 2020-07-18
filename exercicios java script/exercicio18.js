/**
 * 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
 * switch. Crie um case default que escreva ‘Número fora do intervalo.’
 * @author JohnnyCarvalho
 */

 function escreveNumero(numero) {
     switch (numero) {
         case 0:
             console.log("ZERO");
             break;
         case 1:
             console.log("UM");
             break;
         case 2:
             console.log("DOIS");
             break;
         case 3:
             console.log("TRÊS");
             break;
         case 4:
             console.log("QUATRO");
             break;
         case 5:
             console.log("CINCO");
             break;
         case 6:
             console.log("SEIS");
             break;
         case 7:
             console.log("SETE");
             break;
         case 8:
             console.log("OITO");
             break;
         case 9:
             console.log("NOVE");
             break;
         case 10:
             console.log("DEZ");
             break;
         default:
             console.log("*** O NÚMERO NÃO EXISTE ***");
             break;
     }
 }

 escreveNumero(0);
 escreveNumero(1);
 escreveNumero(2);
 escreveNumero(3);
 escreveNumero(4);
 escreveNumero(5);
 escreveNumero(5);
 escreveNumero(6);
 escreveNumero(7);
 escreveNumero(8);
 escreveNumero(9);
 escreveNumero(10);
 escreveNumero(11);