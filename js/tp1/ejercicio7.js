// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));
const num3 = Number(prompt("Ingrese el tercer numero"));
if (num1 > num2 && num1 > num3){
    console.log("El primer numero es el mayor");
} else if (num2 > num1 && num2 > num3) {
    console.log("El segundo numero es el mayor");
} else if (num3 > num2 && num3 > num1) {
    console.log("El tercer numero es el mayor");
} else if (num1==num2 && num1==num3 && num1<num3) {
    console.log("los numeros son iguales");
}
