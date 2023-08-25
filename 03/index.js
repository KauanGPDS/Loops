const numeros = [54, 22, 14, 87, 10, 284];
let posicao = -1

for(let i = 0; i<numeros.length;i++){
    if(numeros[i] == 10){
        console.log("sim tem o numero 10 e ele ta na posicao" + numeros[i])
        posicao = "";
        break;
    }
}

console.log(posicao)

