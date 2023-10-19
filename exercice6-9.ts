let tableauValeur: number[] = [];
let valPosi: number[] = [];
let valNeg: number[] = [];
let somme: number = 0;
let NUMERO_DIX: number = 10;

for (let i = 0; i < NUMERO_DIX; i++) {

  const valeurSaisieaParser: string | null = prompt("Saisisez la valeur N°" + (i + 1) + ": ");

  if (valeurSaisieaParser/*  !== null */) {

    const valeurSaisieParser: number = parseInt(valeurSaisieaParser)/* +valeurSaisieaParser */;
    tableauValeur.push(valeurSaisieParser)

    if (valeurSaisieParser > 0) {
      valPosi.push(valeurSaisieParser)
    }else{
      valNeg.push(valeurSaisieParser)
    }
  }
}

for (let i = 0; i < tableauValeur.length; i++) {
  somme += tableauValeur[i];
}

console.log(tableauValeur);
console.log("les valeurs positives : ", valPosi);
console.log("le(s) valeur(s) négatifs(ves) : ", valNeg);
console.log("la somme est de : ", somme);

alert(`Les valeurs saisis sont : ${JSON.stringify(tableauValeur)}`);
alert(`Les valeurs négatifs disctincts sont : ${JSON.stringify(valNeg)} `)
alert(`les valeurs positifs sont : ${JSON.stringify(valPosi)}`)