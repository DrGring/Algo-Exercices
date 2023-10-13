// Un algorithme qui permet de saisir un nombre 
// quelqu'oncque de valeurs qui seront stockés dans un tableau sanchant 
// que l'utilisateur doit savoir le nombre de valeur a saisir et l'effectuera ensuite  
// le programme affichera le nombre de valeur négatives et positives 

let monTableau = [];
const readline = require('readline');
const interfaceLecture = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interfaceLecture.question("Veuillez saisir le nombres de valeurs a saisir : ", function (reponse) {
    console.log("Vous avez saisis : " + reponse);
    interfaceLecture.close();
});

let valeursPositives = 0;
let valeursNegatives = 0;


/* let messageValeurs = ("Veuillez saisir le nombres de valeurs a saisir : ");
let SaisisValeur = parseInt(messageValeurs);

let valeursPositives=0;
let valeursNegatives=0;

for (let i = 0; i < SaisisValeur; i++) {

    const valeur = parseFloat(("Veuillez entrer la valeur " +(i+1)+ ":" ));

    if (!isNaN(valeur)) {
        if (valeur>0) {
            valeursPositives++;
        }else if (valeur<0) {
            valeursNegatives++
        }
        monTableau.push(valeur);
    }

}

console.log("Les valeurs saisies : " + monTableau.join(", "));
console.log("Nombre de valeurs positives : " + valeursPositives);
console.log("Nombre de valeurs négatives : " + valeursNegatives);
 */