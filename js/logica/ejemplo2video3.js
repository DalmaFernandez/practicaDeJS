// 
let suma = 0;

let i = 0;

while(i<5){
    let valorDeEntrada = Number(prompt("Indique un numero"));
    suma = valorDeEntrada + suma;
    i = i+1;
}

console.log("El resultado de la suma es " + suma);
