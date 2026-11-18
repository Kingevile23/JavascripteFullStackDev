const prompt = require('prompt-sync')();
let a = Number(prompt("Entre le numero du jour: "));
if(a>=1 || a<=7){
switch (a) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
    default:
        console.log("Erreur de saisie");
        break;
}
}else if(a<1){
    console.log("Erreur de saisi")
}else if(a>7){
    console.log("Erreur de saisie")
}