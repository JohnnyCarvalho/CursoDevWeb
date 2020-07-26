// faz cache
module.exports = {
    valor:2,
    inc() {
        this.valor++
    },
    valorDivide: 0,
    divide (valor1, valor2) {
        this.valorDivide = valor1 / valor2;
        return this.valorDivide;
    }
}