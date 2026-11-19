const promp = require("prompt-sync")()
let a = Number(promp("Entre l'entier a calcule: "))
let n = Number(promp("Nombre d'iteration 'n' a faire: "))
for (let i = 0; i<=n;i++) {
    let m = a*(a+1)/2
    console.log("La sortie des 'n' nombre: ",n)
    console.log("La sortie est de: ",m)
}