const prompt = require("prompt-sync")();
const tauxTva = (19.25/100);

let HT = parseInt(prompt("Entre le prix unitaire du produit: "));
let quant = parseInt(prompt("Entre la quantite: "));
let totalHt = HT * quant;
let montantTva = tauxTva * totalHt;

console.log("La total est de:",totalHt, "Le Montant avec TVA: ", montantTva);
console.log("Le montant Total est de ",totalHt + montantTva);