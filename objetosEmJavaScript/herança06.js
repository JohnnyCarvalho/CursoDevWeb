function Aula(nome, video) {
    this.nome = nome;
    this.video = video;
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Até logo', 456);
console.log(aula1, aula2);

// simuladoe o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype;
    f,apply(obj, params);
    return obj
}

const aula3 = novo(Aula, 'Muito obg', 789);
const aula4 = novo(Aula, 'Você é demais', 10, 11, 12);
console.log(aula3, aula4);
