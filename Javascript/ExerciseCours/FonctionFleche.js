const prompt = require("prompt-sync")();
const add = (a,b) => {return a+b};
const sub = (a,b) => {return a-b};
const mul = (a,b) => {return a*b};
const div = (a,b) => {return a/b};

let a = Number(prompt("Entre une valeurs: "));
let b = Number(prompt("Entre une autre valeurs: "));

console.log("addition", +add(a,b));
console.log("Multiplication", +sub(a,b));
console.log("Division", +mul(a,b));
console.log("Substract", +sub(a,b));


/*
console.log("addition(A)");
console.log("Multiplication (M)");
console.log("Division(D)");
console.log("Substract(S)");

let choix = prompt("Fait un choix: ");
switch(choix){
    case "A":
        console.log(add(a,b));
        break;
    case "D":
        console.log(div(a,b));
        break;
    case "M":
        console.log(mul(a,b));
        break;
    case "S":
        console.log(sub(a,b));
        break;
    default:
        console.log("Ahh refait un choix");
    break;
}*/