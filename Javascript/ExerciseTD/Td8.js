prompt = require("prompt-sync")()
let a = Number(prompt("Entre une annee a determiner: "))
let b = a/4
if(a%4 == 0){
    console.log("Annee bissextile")
}else if(a%4 == 1){
    console.log("Annee bixestile")
}else{
    console.log("Erreur de saisie")
}