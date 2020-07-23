const pai = {nome: 'Helio', corCabelo: 'Preto'}

const filho = Object.create(pai);
filho.nome = 'Johnny';
console.log(filho.nome, filho.corCabelo);

const neto = Object.create(pai, {
    nome: {value: 'Jessica', writable: false, enumerable: true}
})

console.log(neto.nome);
neto.nome = 'Gulherme';
console.log(`${neto.nome} tem cabelo ${neto.corCabelo}`);

console.log(Object.keys(filho));
console.log(Object.keys(neto));

for (let key in neto) {
    neto.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`);
}