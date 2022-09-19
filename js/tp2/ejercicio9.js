// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10
let j=0;
for (let i = 0; i < 500; i++) {
if (j===5){
    console.log("---------------------------------------");
    j=0;
}
j++;

    if ((i + 1) % 4 === 0 && (i+1) % 9 === 0) {
        console.log((i+1) + " (Multiplo de 4 y 9)");
      } else if ((i + 1) % 4 === 0) {
        console.log((i+1) + " (Multiplo de 4)");
      } else if ((i + 1) % 9 === 0) {
        console.log(i + 1 + " (Multiplo de 9)");
      } else {
        console.log(i + 1);
      }
  
}
