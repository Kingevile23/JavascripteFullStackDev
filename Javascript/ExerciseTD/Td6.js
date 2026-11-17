const prompt = require("prompt-sync")()
let a = Number(prompt("Entre une valeurs pour savoir si c'est paire ou impaire: "))
if(a%2 == 0){
    console.log("Ce nombre est paire")
}else if(a%2 == 1){
    console.log("Ce nombre est impaire")
}