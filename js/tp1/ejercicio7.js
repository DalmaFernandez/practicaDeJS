// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));
const num3 = Number(prompt("Ingrese el tercer numero"));
if (num1 > num2 && num1 > num3){
    console.log("El primer numero es el mayor y es igual a " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("El segundo numero es el mayor y es igual a " + num2);
} else if (num3 > num2 && num3 > num1) {
    console.log("El tercer numero es el mayor y es igual a " + num3);
} else if (num1==num2 && num1 > num3) {
    console.log("El primer y segundo numero son los mayores y son iguales a " + num1);
} else if (num1==num3 && num1 > num2) {
    console.log("El primer y tercer numero son los mayores y son iguales a " + num1);
} else if (num2==num3 && num2 > num1) {
    console.log("El segundo y tercer numero son los mayores y son iguales a " + num2);
} else{
    console.log("Los tres numeros son iguales y son iguales a " + num1);
}

