/**
 * aqui iremos implementar um filter2 que não existe no JS nativamente
 * esse exercício tem como objetivo ententer o filter para ver o funcionamento
 * interno do mesmo
 */

Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const produtos = [
    {nome: 'Notebook', preco: 3599, fragil: true},
    {nome: 'Galaxy S10', preco: 2299, fragil: true},
    {nome: 'Phablet', preco: 3000, fragil: true},
    {nome: 'Capas para S10 e Phablet', preco: 899, fragil: false},
]

console.log(produtos.filter2(function(p) {
   return p.preco > 2500 // aqui diz que só sera adicionado ao array resultante os produtos que sejam maior do que R$ 2500
}));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));