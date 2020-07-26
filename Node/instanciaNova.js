// uma factory retorna um novo objeto

module.exports = () => {
    return{
        valor: 1,
        inc() {
            this.valor++
        },
        valorMultiplica: 0,
        multiplica(valor1, valor2) {
            const result = valor1 * valor2;
            this.valorMultiplica = result;
            
        }
    }
}