let  alpha = [];
alpha[0]=1;

for (let k = 1; k <6; k++) {
    alpha[k]=alpha[k-1]+2;
}
for (let i = 0; i <6; i++) {
    console.log(alpha[i]);
}
//crée un tableau vide appelé alpha,
//affecter la valeur 1 à alpha[0], 
//En utilisant une boucle for, on parcours les indices de 1 à 5 (inclus) du tableau alpha. 
// Et a chaque boucle on calcules la valeur de alpha[k] en ajoutant 2 à la valeur de l'élément précédent.

//utilisons une autre boucle for pour parcourir les indices de 0 à 5 du tableau alpha 