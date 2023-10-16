let tableauValeur = []
let valPosi = []
let valNeg = []

for (let i = 0; i < 9; i++) {
    const valeur = prompt("Saisisez la valeur N°" +(i+1)+ ":" );
    tableauValeur.push(valeur)
    
    if (valeur>0) {
        console.log("vous avez saisis " +valeur+ " comme valeur positif ");
        valPosi.push(valeur)
    }else if (valeur<0) {
        console.log("Vous avez saisis " +valeur+ " comme valeur négatif" );
        valNeg.push(valeur)
    }else {
        console.log("Vous aviez Saisis une valeurs null");
    }
}   

console.log(tableauValeur);
console.log("les valeurs positives : " + valPosi);
console.log("le(s) valeur(s) négatifs(ves) : " + valNeg);

alert(`Les valeurs saisis sont : ${tableauValeur}`);
alert(`Les valeurs négatifs disctincts sont : ${valNeg} `)
alert(`les valeurs positifs sont : ${valPosi}`)