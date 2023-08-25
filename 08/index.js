const numeros = [3, 24, 1, 8, 11, 7, 15];
let temp = 0;

for(let i = 0; i < numeros.length;i++ ){
    if(temp <= numeros[i]){
        temp = numeros[i]
    }
}
console.log(temp)