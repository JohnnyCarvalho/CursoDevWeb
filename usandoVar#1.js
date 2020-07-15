/**
 * Criando uma variável var dentro de um bloco que não seja uma função
 * essa ficará visivel idependente de quantos blocos ela esteja dentro
 * já uma variável declarada dentro de um bloco pertencente a uma função
 * está não ficará visível no escopo global, e sim somente no escopo da função.
 * vamos ver algusn exemplos abaixo:
 */
{
    {
        {
            {
                {
                    {
                        {
                            var nome = "Johnny don't function";
                        }
                    }
                }
            }
        }
    }
}
console.log("Esta acessivel mesmo dentro de 7 blocos"+"\n****** "+nome+" ********");

// agora veremos dentro de uma função
function teste(){
    var teste = "Johnny yes Function"
    console.log(teste);
}
teste();
console.log(teste);

//mais um exemplo
var numero = 1
{
    var numero = 2
    console.log("Dentro do bloco "+numero);
}
console.log("Fora do bloco "+numero);