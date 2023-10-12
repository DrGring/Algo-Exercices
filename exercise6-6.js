const alpha = [];

alpha[0] = 1;
alpha[1] = 1;

for (let i = 2; i <7; i++) {
    alpha[i] = alpha[i-1] + alpha[i-1]
}
for (let i = 0; i < 7; i++) {
    console.log(alpha[i]);
}