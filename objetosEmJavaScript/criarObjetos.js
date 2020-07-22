/**
 * Aqui veremos alguns exemplos de como criar objetos em Java Script
 */

const produto = new Object
produto.nome = 'Johnny'; // mais recomendável
// ou
produto['Bruna'] = 'esposa do Johnny';

console.log(produto);
delete produto.Bruna;
console.log("Sem o nome Bruna: "+produto);
delete produto.nome;
console.log("Sem o nome: "+produto);

// objeto com outro objeto dentro
const carro = { //objeto1
    modelo: 'Logan',
    valor: 36.000,
    proprietario: { // objeto2
        nome: 'Johnny',
        idade: 29,
        endereco: { // objeto3
            logradouro: 'José Beira',
            numero: 826

        }
    },
    condutores: [{ // array de objetos, 1º objeto
        nome: 'Bruna',
        idade: 24
    }, { // 2º objeto
        nome: 'Rose',
        idade: 52
    }],
    caucularSeguro: function(idade) {
        if (idade < 18) {
            return "O valor do seguro é R$ 150,00"
        }
        else if (idade > 18) {
            return "O valor do seguro é R$ 100,00"
        }
        return this.modelo, this.valor, this.proprietario, this.endereco, this.condutores, this.caucularSeguro;
    }

}

carro.proprietario = "Johnny";
carro.condutores = "Bruna e Jhnny";
carro.condutores.idade = 29;
carro.condutores.idade = 17;
carro.modelo = "Cruze";
carro.valor = 64.000;
console.log(carro);