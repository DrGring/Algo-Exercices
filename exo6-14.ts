//Ecrire un Algo qui permet le même principe que l'exo 6-13 mais après saisi, renvoi le nombre
// de ces notes supérieures à la moyenne de la classe 
let notesaSaisir: number[] = [];
let NOT_CHANGE: number = 7;
let moyenneNoteSaisis: number = 0;

for (let i = 0; i < NOT_CHANGE; i++) {
  const notesSaisieaParser: string | null = prompt("Saisisez la valeur N°" + (i + 1) + ": ");

  if (notesSaisieaParser) {
    const notesSaisieParser: number = parseInt(notesSaisieaParser);
    notesaSaisir.push(notesSaisieParser);
  }
  moyenneNoteSaisis += notesaSaisir[i] / NOT_CHANGE;
}

let notesSuperieurMoyenne: number[] = [];
for (let i = 0; i < notesaSaisir.length; i++) {
  if (notesaSaisir[i] > moyenneNoteSaisis) {
    notesSuperieurMoyenne.push(notesaSaisir[i]);
  }
}

console.log("notes supérieures à la moyenne :", notesSuperieurMoyenne.length);
console.log("les notes saisies sont: ", notesaSaisir, "Et leur moyenne est de : ", moyenneNoteSaisis);