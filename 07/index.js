const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let a = []

for(let nome of nomes){
    if(nome[0] == "a" ||nome[0] == "A" ){
        a.push(nome)
    }
}
console.log(a)