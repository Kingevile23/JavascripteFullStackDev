const promp = require("prompt-sync")()
a = Number(promp("Saisissez la note de l_etudiant: "))
if(a<=9){
    console.log("Ajourner")
}else if(a>=10 || a<=11){
    console.log("Passable")
}else if(a>=12 || a<=13){
    console.log("Assez bien")
}else if(a>=14 || a<=15){
    console.log("Bien")
}else if(a>=16 || a<=20){
    console.log("Tres biem")
}else if(a<0){
    console.log("La valeurs saisie est negatif")
}else{
    console.log("Erreur de saisie!")
}