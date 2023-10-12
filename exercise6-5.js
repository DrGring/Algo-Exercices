const alpha = [];

alpha[0]=1;
for (let k = 1; k <6; k++) {
    alpha[k]=alpha[k-1]+2;
}
for (let i = 0; i <6; i++) {
    console.log(alpha[i]);    
}