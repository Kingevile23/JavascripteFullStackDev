const prompt = require('prompt-sync')();
let number = parseInt(prompt("Entrez un nombre : "));
for (let i = 0; i<=12;i++){    
    console.log(number,"*",i,"=",number * i);
}