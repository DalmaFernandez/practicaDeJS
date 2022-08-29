// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
const num1 = Number(prompt("Ingrese un numero"));
if(num1 % 2 === 0 && num1 % 3 === 0 && num1 % 5 === 0 && num1 % 7 === 0){
    console.log("El numero " + num1 + " es divisible por 2, 3, 5 y 7");
} else if (num1 % 2 === 0 && num1 % 3 === 0 && num1 % 5 === 0){
    console.log("El numero " + num1 + " es divisible por 2, 3 y 5");
} else if (num1 % 2 === 0 && num1 % 3 === 0 && num1 % 7 === 0){
    console.log("El numero " + num1 + " es divisible por 2, 3 y 7");
} else if (num1 % 7 === 0 && num1 % 3 === 0 && num1 % 5 === 0){
    console.log("El numero " + num1 + " es divisible por 3, 5 y 7");
} else if (num1 % 2 === 0 && num1 % 7 === 0 && num1 % 5 === 0){
    console.log("El numero " + num1 + " es divisible por 2, 5 y 7");
} else if (num1 % 2 === 0 && num1 % 3 === 0){
    console.log("El numero " + num1 + " es divisible por 2 y 3");
} else if (num1 % 2 === 0 && num1 % 5 === 0){
    console.log("El numero " + num1 + " es divisible por 2 y 5");
} else if (num1 % 2 === 0 && num1 % 7 === 0){
    console.log("El numero " + num1 + " es divisible por 2 y 7");
} else if (num1 % 3 === 0 && num1 % 5 === 0){
    console.log("El numero " + num1 + " es divisible por 3 y 5");
} else if (num1 % 3 === 0 && num1 % 7 === 0){
    console.log("El numero " + num1 + " es divisible por 3 y 7");
} else if (num1 % 5 === 0 && num1 % 7 === 0){
    console.log("El numero " + num1 + " es divisible por 5 y 7");
} else if (num1 % 2 === 0 ){
    console.log("El numero " + num1 + " es divisible por 2");
} else if (num1 % 3 === 0 ){
    console.log("El numero " + num1 + " es divisible por 3");
} else if (num1 % 5 === 0 ){
    console.log("El numero " + num1 + " es divisible por 5");
} else if (num1 % 7 === 0 ){
    console.log("El numero " + num1 + " es divisible por 7");
} else {
    console.log("El numero " + num1 + " no es divisible por 2, 3, 5 ni 7");
}