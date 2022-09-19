// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
const num1 = Number(prompt("Ingrese un numero"));
if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0){
    console.log("El numero " + num1 + " es divisible por 2, 3, 5 o 7");
} else {
    console.log("El numero " + num1 + " no es divisible por 2, 3, 5 ni 7");
}