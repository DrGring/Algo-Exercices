// Algo qui déclare un tableaux disposant des valeurs de  09 notes que ainsi saisis  l'utilisateur(confère Exo6.3 ) 

let notes = [9, 1, 10, 8, 15, 25, 6, 4, 7];

for (let i = 0; i < 9; i++) {
   const saisis = prompt("Saisis la note N°" + (i + 1) + ": " +notes[i]);
   console.log(`Vous avez saisis ${saisis}`);
}

//le code qui permet de calculer la Moyenne a afficher 
let moyenne = 0;
for (let i = 0; i <notes.length; i++) {
  moyenne += (notes[i])/9;
}

    console.log("Les notes saisies sont :");
for (let i = 0; i < 9; i++) {
    console.log(notes[i]);   
}

//Ecivons la fin pour que le calcul des moyennes soit éffectuées a l'écran
alert = prompt(`la moyenne est de : ${moyenne} `) ;

