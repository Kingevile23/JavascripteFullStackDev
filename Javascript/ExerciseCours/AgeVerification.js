const prompt = require("prompt-sync")(); 
let a = prompt("Fait une saisie: ");
let status = (a >= 18)? "Majeurs":"Mineurs";
console.log(status);