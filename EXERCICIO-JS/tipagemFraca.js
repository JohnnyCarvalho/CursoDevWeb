/** neesse  código vamos ver os prós e contras da tipagem fraca do java scripr*/
let nome = 'João';
console.log(nome);
let idade = 29;
console.log("A idade de "+nome+" é "+idade+" anos.")
console.log("A variável nome é uma: "+ typeof nome+" \nE a variável idade é um: "+typeof idade);
/** 
 * vemos nos exemplos acima que, em momento nenhum foi declarado que e variável nome seria uma string certo?
 * ou que a variável idade seria um inteiro! porem isso não quer dizer que ela não seja nada, na linha 4 vemos que, 
 * o comando typeof mostra qual o tipo da
 * variável nome, se ela é uma string, um inteiro, um float e etc... 
 * Nesse caso vemos que diferente do Java por exemplo, a chance de dar algo errado em uma linguagem como Java Script é muito grande
 * pois ela deixa você fazer quase de turo, Java, C# por exemplo já não permite você fazer oque quiser, existem as regras
 * deles e você tera que segui-las, caso contrário seu código vai travar.
 */