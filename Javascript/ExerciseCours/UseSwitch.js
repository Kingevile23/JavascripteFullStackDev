// Faire le choix d'une opperation et de retourne une valeurs
const prompt = require("prompt-sync")();

let a = Number(prompt("Entre un nombre: "));
let b = Number(prompt("Entre un autre nombre: "));
let addition = a + b;
let substraction = a - b;
let multiplication = a*b;
let division = a/b;

let choix = prompt("Entre le choix de l'operation: ");

console.log("addition(A)");
console.log("Multiplication (M)");
console.log("Division(D)");
console.log("Substract(S)");

switch(choix){

    case "A":
        console.log("Vous avez choisi l'addition", addition);
    break;

    case "M":
        console.log("Vous aurez", multiplication); 
        break;
    case "D":
        console.log("Vous aurez: ", division);
        break;

    case "S":
            console.log("Vous aurez: ", substraction);
            break;
            default :
            console.log("Ahh refaite le choix!! :)");
            break;
}