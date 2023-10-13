// Algo qui déclare un tableaux disposant des valeurs de  09 notes que ainsi saisis  l'utilisateur  (Exercise de la branchce Exo6.3)
let tableaux = [9,2,2,4,5,25,6,4,7] ;

for (let i = 0; i < 9; i++) {
   console.log("Saisir la note N°" + (i + 1) + ": " + tableaux[i]);

}
//le code qui permet de calculer la somme a afficher 
let somme = 0;
for (let i = 0; i <tableaux.length; i++) {
  somme += tableaux[i];
}

    console.log("Les notes saisies sont :");
for (let i = 0; i < 9; i++) {
    console.log(tableaux[i]);   
}

//Ecivons la fin pour que le calcul des notes soit éffectuées a l'écran
console.log(`la somme des notes est de : ${somme} `) ;

