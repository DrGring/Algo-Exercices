//Ecrire un algo qui permet à l'utilisateur de saisir une valeur numérique quelconque  et ensuite affichcer ses valeurs +1 dans le nouveau tableau 
let valeuraSaisir: number[] = []
let NOT_CHANGE: number = 4;

for (let i = 0; i < NOT_CHANGE; i++) {
  const valeurSaisieaParser: string | null = prompt("Saisisez la valeur N°" + (i + 1) + ": ");

  if (valeurSaisieaParser/*  !== null */) {

    const valeurSaisieParser: number = parseInt(valeurSaisieaParser)/* +valeurSaisieaParser */;
    valeuraSaisir.push(valeurSaisieParser + 1);
  }
}console.log("valeur à Saisir +1 : ", valeuraSaisir);
