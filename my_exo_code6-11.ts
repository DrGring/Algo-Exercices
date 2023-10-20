let tableau1: number[] = [4, 8, 12];
let tableau2: number[] = [3, 6, 0];

let schtroumpf: number = 0;
let sumTableau1: number = 0;
let sumTableau2: number = 0;



for (let i = 0; i < tableau1.length; i++) {
  sumTableau1 += tableau1[i];
}

for (let i = 0; i < tableau2.length; i++) {
  sumTableau2 += tableau2[i];
}
schtroumpf = sumTableau1 * sumTableau2;

console.log("sumTableau1: ", sumTableau1);
console.log("sumTableau2: ", sumTableau2);
console.log("schtroumpf: ", schtroumpf);

//Etap1
/* let tableau1: number[] = [4, 8, 12];
let tableau2: number[] = [3, 6];

let schtroumpf: number = 0;

let sumTableau1: number = 0;
let sumTableau2: number = 0;
for (let i = 0; i <tableau1.length && i<tableau2.length; i++) {
    sumTableau1 += tableau1[i];
    sumTableau2 += tableau2[i];

    schtroumpf = sumTableau1*sumTableau2
}
console.log(schtroumpf); */

//Etape2
//let tableau1: number[] = [4, 8, 12];
//let tableau2: number[] = [3, 6];

//let schtroumpf: number = 0;

//let sumTableau1: number ;
//let sumTableau2: number ;
//for (let i = 0; i <tableau1.length && i<tableau2.length; i++) {
//    schtroumpf += tableau1[i]*tableau2[i]
//}
//console.log(schtroumpf);