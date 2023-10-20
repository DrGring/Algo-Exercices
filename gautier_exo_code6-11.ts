let tab1: number[] = [4, 8, 12];
let tab2: number[] = [3, 6, 0];

let sum = 0;

for (let i = 0; i < tab1.length; i++) {
  for (let j = 0; j < tab2.length; j++) {
    sum += tableau1[i] * tab2[j];
  }
}
  
console.log('sum : ', sum)
