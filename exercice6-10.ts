// Algo constituant un tableaux de deux tableaux  de même longueur préalablement saisis. 
// Ainsi le nouveau tableau saisi sera la somme  des éléments des deux tableaux de départ

let tableau1: number[] = [4, 8, 7, 9, 1, 5, 4, 6];
let tableau2: number[] = [7, 6, 5, 2, 1, 3, 7, 4];

let tableau3: number[] = [];
const NOT_CHANGE_NUMBER: number = 0;

for (let i = 0; i < NOT_CHANGE_NUMBER; i++) {
    const afficherTableau3 = tableau1[i] + tableau2[i];
    tableau3.push(afficherTableau3);
} console.log(tableau3);
