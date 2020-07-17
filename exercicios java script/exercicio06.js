/**
 * @author JohnnyCarvalho
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e 
 * a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */
function jurosSimples(capInicial, txJuros, tempoAplic){
    console.log("Juros simples: "+(capInicial + (capInicial * txJuros * tempoAplic)+" %"));

}


function jurosComposto(capInicial, txJuros, tempoAplic){
    console.log("Juros composto :"+(capInicial * (1 + txJuros) ** tempoAplic).toFixed(2)+" %");

}
jurosSimples(100,010/100, 2);
jurosComposto(100, 10/100, 2);