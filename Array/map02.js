/**
 * criando um carrinho de compras que recebe em formato JSON os elementos tal como seus preços
 * e em seguida usando o método map retornando um array somente com os preços
 */

 const carrinho = [
     '{"nome": "Bolacha", "preco": 2.99}',
     '{"nome": "Salgadinho", "preco": 10.99}',
     '{"nome": "Carne", "preco": 22.99}',
     '{"nome": "Arroz", "preco": 12.99}'
 ]

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado2);