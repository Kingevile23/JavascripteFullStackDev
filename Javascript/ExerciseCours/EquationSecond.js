const prompt = require('prompt-sync')();


let a = prompt("Entrez la premier valeurs x1: ");
let b = prompt("Entrez une valeurs pour x2: ");
let c = parseInt(prompt("Entrez une valeurs pour c: "));
let delta = b**2 - 4*a*c;

if(delta > 0){
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log("x1 ",+x1);
    console.log("x2 ",+x2);
}else{
    let g = -b/(2*a);
    console.log("Valeurs", g);
};