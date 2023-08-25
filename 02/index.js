const letras = ["A", "a", "B", "C", "E", "e"];
let count = 0;

for(let i = 0;i<letras.length;i++){
    if(letras[i]=="E" ||letras[i]=="e" ){
        count++;
    } 
}
console.log(count)