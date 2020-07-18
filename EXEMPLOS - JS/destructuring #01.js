const pessoa = {
    nome: "Johnny",
    idade: 29,
    endereco: {
        logradouro: "Rua Jose beira",
        numero: 826
    }
}
// retira as variáveis de dentro da const pessoa
const{nome, idade} = pessoa
console.log(nome, idade);

// troca o nome das variáveis nome e idade por n e i
const {nome: n, idade: i} = pessoa;
console.log(n, i);