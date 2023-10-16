// Un algorithme qui permet de saisir un nombre 
// quelqu'oncque de valeurs qui seront stockés dans un tableau sanchant 
// que l'utilisateur doit savoir le nombre de valeur a saisir et l'effectuera ensuite  
// le programme affichera le nombre de valeur négatives et positives 

let monTableau = /* new Array(3) */[];
/* const readline = require('readline');
const interfAceLecture = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); */

const rl = require('readline');
const interfaceLecture = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});



function afficherSaisirValeur() {/* 
 interfAceLecture.question("Veuillez saisir le nombres de valeurs a saisir : ", (valeur0)=> {
 */
  for (let i = 0; i<3; i++) {
    interfaceLecture.question("saisir la valeur N°" + (i + 1) + ":", (valeur)=> {
    monTableau.push(valeur);
    console.log("Vous avez saisis : " + valeur);

    interfaceLecture.close();
    console.log(monTableau);
    })    
  }  
}
/* )
console.log("Vous avez saisis : " + valeur0 +" éléments");
  interfAceLecture.close();
} */

afficherSaisirValeur(0);
