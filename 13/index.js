const disjuntores = [false, false, true, false, false, true, false, false];
let disjuntoresAtivos = 0
let count = 0
for(let i of disjuntores){
    count++
    
    if(disjuntores[count] == true){
        disjuntoresAtivos++
    }
   
}

console.log(disjuntoresAtivos)