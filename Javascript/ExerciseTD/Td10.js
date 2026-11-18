const prompt = require('prompt-sync')();
let a = Number(prompt("Entre une annee a determiner: "));
for (let i = 0; i <= 12; i++) {
    console.log(i,"*",a,"=",i*a);
}