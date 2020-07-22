// usando notação literal de objetos, ou seja {}
const obj1 = {}
console.log(obj1);

// função construtora
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

// função construtora própria, ou seja, quando você cria do seu jeito
function Produto(nome, idade, salario) {
    /**
     * usando o comando "this.nome = nome" nesse caso a variável nome ficara visivel fora da função, ou seja, 
     * podera ser tanto acessada como modificada apartir do escopo global ou browser
     */
    this.nome = nome;
    this.getSalarioComBonus = () => {
        return salario + 10 * idade;
    }
}

const p1 = new Produto('Johnny', 29, 1500);
const p2 = new Produto('Bruna', 24, 1500);
console.log(p1.getSalarioComBonus(), p2.getSalarioComBonus());

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return { // cria um objeto literal
        nome,
        salarioBase, 
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas); // caucula quanto o funcionário ganha por dia e desconta devido o número de faltas
        }
    }
}

const f1 = criarFuncionario('João', 1000, 6);
console.log(f1.getSalario());

// Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

// exemplo com Json
const fromJson = JSON.parse('{"info": "sou um Json!"}')
console.log(fromJson.info);