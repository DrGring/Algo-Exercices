let tableauValeur:number[] = [];
let valPosi:number[] = [];
let valNeg:number[] = [];
let somme:number = 0;
/* 
let str: string = "431"; 
console.log(typeof str); 
let num = Number(str); 
console.log(typeof num); 
 */

for (let i = 0; i < 9; i++) {
    const valeurSaisie:number = prompt("Saisisez la valeur N°" +(i + 1 )+ ": " );

    tableauValeur.push(valeurSaisie)
    
    if (valeurSaisie>0) {
        console.log("vous avez saisis " +valeurSaisie+ " comme valeur positif ");
        valPosi.push(valeurSaisie)
    }else if (valeurSaisie<0) {
        console.log("Vous avez saisis " +valeurSaisie+ " comme valeur négatif" );
        valNeg.push(valeurSaisie)
    }else {
        console.log("Vous aviez Saisis une valeurs null");
    }
}   
for (let i = 0; i <tableauValeur.length; i++) {
  somme += (tableauValeur[i]);
}

console.log(tableauValeur);
console.log("les valeurs positives : " + valPosi);
console.log("le(s) valeur(s) négatifs(ves) : " + valNeg);
console.log("la somme est de : " +somme) ;

alert(`Les valeurs saisis sont : ${tableauValeur}`);
alert(`Les valeurs négatifs disctincts sont : ${valNeg} `)
alert(`les valeurs positifs sont : ${valPosi}`)