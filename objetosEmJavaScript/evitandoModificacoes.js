/**
 * Nesse aquivo vamos ver alguns exemplos de como restringir os seu código JS uma vez que 
 * a linguagem JS nos da uma certa liberdade de fazer oque quisermos, porém essa é uma faca de dois 
 * gumes, em certos momentos é bom e faz muita falta essa liberdade que o JS nos da comparado a outras linguagens 
 * como Java e C# por exemplo, porém na maioria das vezes isso é perigoso, pois se não soubermos oque estamos
 * fazendo podemos comprometer nosso código inteiro, nessa aujla veremos um pouco sobre como restringir esses acessos
 * e como deixar o nosso código o mais reservado possivel
 */

// Object.preventExtensions
const produto = Object.preventExtensions ({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensivel', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar';
delete produto.tag;
console.log(produto);