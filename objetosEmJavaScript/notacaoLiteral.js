const a = 1
const b = 2
const c = 3

const obj1 = {a, b, c}
console.log(obj1);

const nomeAtrib = 'nota';
const valorAtrib = 7.4;
const obj2 = {}
obj2[nomeAtrib] = valorAtrib;
console.log(obj2);

// outra forma
const obj3 = {[nomeAtrib]: valorAtrib}
console.log(obj3);

//criando função dentro de um objeto
const obj4 = {
    funcao1: function() {
        //...
    },
    funcao2 () { // funciona como a funcao1 porém com menos código
        //...
    }
}

console.log(obj4.funcao1, obj4.funcao2);
// ou
console.log(obj4);