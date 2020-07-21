// usando o var e chamando fora do bloco for para imprimir
for (var i = 0; i < 9; i++){
    console.log(i);
}
console.log("i = "+i);

// usando o array para loop com var
const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2]();
funcs[8]();