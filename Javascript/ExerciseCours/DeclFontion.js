const prompt = require("prompt-sync")();
let nom = prompt("Dite ton nom: ");

function sayHello(name){
    return "Hello" +name
}
console.log(sayHello(nom));