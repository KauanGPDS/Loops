const numeros = [8, 11, 4, 1];
let tempMaior =numeros[0]
let tempMenor= numeros[0]
let diferenca = 0

for(let i = 0;i<numeros.length;i++){
    if(tempMaior < numeros[i]){
        tempMaior = numeros[i]
       
    }else if(tempMenor > numeros[i]){
        tempMenor = numeros[i]
        
    }
}
diferenca = tempMaior - tempMenor

console.log(diferenca)