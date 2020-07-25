/**
 * Aqui vamos implementar um novo map chamado map2, esse m´etodo não existe nativamente em Js
 * por esse motivo vamos criar um para que possamos entender como funciona um map por dentro e assim
 * podermos memorizar melhor a funcionalidade do mesmo
 */

Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Bolacha", "preco": 2.99}',
    '{"nome": "Salgadinho", "preco": 10.99}',
    '{"nome": "Carne", "preco": 22.99}',
    '{"nome": "Arroz", "preco": 12.99}'
]

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado2);