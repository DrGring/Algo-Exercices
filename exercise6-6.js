const suite = [];

suite[0] = 1;
suite[1] = 1;

for (let i = 2; i <7; i++) {
    suite[i] = suite[i-1] + suite[i-2]
}
for (let i = 0; i < 7; i++) {
    console.log(suite[i]);
}