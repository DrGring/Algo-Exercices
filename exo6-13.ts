//Ecrire un Algo qui permet le même principe que l'exo 6-8  mais une fois la saisi terminé renvois la plus grandde valeur en précisant 
//sa position dans le tableau.
let valeuraSaisir: number[] = []
let NOT_CHANGE: number = 4;

for (let i = 0; i < NOT_CHANGE; i++) {
    const valeurSaisieaParser: string | null = prompt("Saisisez la valeur N°" + (i + 1) + ": ");

    if (valeurSaisieaParser) {
        const valeurSaisieParser: number = parseInt(valeurSaisieaParser);
        valeuraSaisir.push(valeurSaisieParser);
        /*const valeurMaxConvert: number[] = valeuraSaisir.map(Number);
        const valeurMaxAfficher: number = Math.max(valeurMaxConvert); */
    }
}
const valeurMax: number = Math.max(...valeuraSaisir)
const valeurMaxPosition: number = valeuraSaisir.indexOf(valeurMax);

console.log("les valeurs du tableau : ", valeuraSaisir);
console.log('La valeur max est : ', valeurMax, " et occupe la", valeurMaxPosition);