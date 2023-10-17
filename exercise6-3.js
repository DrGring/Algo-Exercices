// Algo qui déclare un tableaux disposant des valeurs de  09 notes que ainsi saisis  l'utilisateur 
let tableaux = [9, 2, 2, 4, 5, 25, 6, 4, 7];

for (let i = 0; i < 9; i++) {
   const saisis = prompt("Saisis la note N°" + (i + 1) + " :" +tableaux[i]);
   console.log(`Vous avez saisis ${saisis}`);
}
