const prompt = require("prompt-sync")()
const jour = (a) => {return Math.floor(a/86400)};
const heure = (a) => {return Math.floor(a/3600)};
const minute = (a) => {return Math.floor(a/60)};

let a = Number(prompt("Saisissez un entre: "));
let Jour = jour(a)
let Heur = heure(a)
let Minute = minute(a)

let restJour = Jour%86400
let restheure = Heur%3600
let restminute = Minute%60

console.log(" Minute ", +restminute, " Heure ", +restheure," Jour ",+restJour);

