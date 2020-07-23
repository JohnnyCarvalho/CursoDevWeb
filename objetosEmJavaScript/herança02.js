/**
 * Cadeia de protótipos, ou seja, uma hierarquia ou árvore genealoliga
 * sera criada a partir do avô e assim sucessivamente
 */

const avo = {atr1: 'A'}
const pai = {__proto__: avo, atr2: 'B'}
const filho = {__proto__: pai, atr3: 'C'}
console.log(filho.atr1);

// mais um exemplo

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        }
        else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F450 Spider',
    velMax: 340 // aqui acontece o shadowing ou sombreamento
}

const mercedes = {
    modelo: 'AmgGt',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

/**
 * nesse método "Object.setPrototypeOf(ferrari, carro);"  estipulamos que ferrari herda 
 * coisas de carro,ou seja, é como se fosse um ferrari extends carro do Java
 */
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(mercedes, carro);

mercedes.acelerar(100);
console.log(mercedes.status());

ferrari.acelerar(250);
console.log(ferrari.modelo, ferrari.status());



