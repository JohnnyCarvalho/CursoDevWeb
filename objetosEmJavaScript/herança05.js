console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
// todos os 3 tem o atributo .prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola PUCPR'.reverse());

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5, 6].first());
console.log(['A', 'B', 'C'].first());

