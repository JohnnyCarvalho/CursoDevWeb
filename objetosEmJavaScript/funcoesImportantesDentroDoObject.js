const pessoa = {
    nome: 'Johnny', //chave
    idade: 29, //chave
    peso: 76 //chave
}

// modos de se chamar um objeto

console.log(Object.keys(pessoa)); // pega todas as chaves de dentro do objeto
console.log(Object.values(pessoa)); // pega os valores de dentro do objeto
console.log(Object.entries(pessoa)); //retorna um array de todos os itens dentro do objeto
// podemos percorrer os elementos dentro desse array recem criado
Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`);
})
// usando o destruction
Object.entries(pessoa).forEach(([chave, valor]) =>{ //troca-se o e pelos nomes mais propenços para cada situação
    console.log(`${chave}: ${valor}`); //tira-se os e[0] e e[1] e coloca somente chave, valor
})

// object define property
Object.defineProperty(pessoa, 'dataNascimento', { //cria uma propriedade dentro do um objeto já existente
    enumerable: true, // pergunta se quer ser enumerado
    writable: false, // pergunta se quer ser escrito
    value: '03/01/1991' // define o valor
})
pessoa.dataNascimento = '24/07/1996'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// object assing
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //essa função nada ,ais faz doq ue concatenar todos os objetos sobreescrevendo se assim for o caso
console.log(obj);
