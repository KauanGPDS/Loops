const original = [5, 7, 13, 17, 26, 34, 118, 245];
let count = 0
let novoArray = []
for(let i of original){
count++
if(original[count] >= 0 && original[count] <= 20 ){
  novoArray.push(original[count])
}else if( original[count] >= 100){
    novoArray.push(original[count])
}
}
console.log(novoArray)
