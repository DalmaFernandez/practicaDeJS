// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
let Nombres = [];
let Edades = [];
for (let i=0; i<3; i++){
    let nombre = prompt ("Ingrese el nombre");
    Nombres[i]= nombre;
    let edad = prompt ("Ingrese la edad");
    if (edad !== null && !isNaN(edad)){
        Edades[i] = edad;
    } else {
        alert ("La edad debe ser un numero")
        let edad = prompt ("Ingrese la edad");
        Edades[i] = edad;
    }
    
}
console.log(Nombres);
console.log(Edades);








// function pedirNombreYEdad(){
//     while (true){
//         const nombre= prompt("Ingrese el primer nombre");
//         const edad= prompt("Ingrese el primer nombre");
//         if(edad !== null && !isNan(edad)){
//             edad = Number(edad);
//             break;
//         }
//         // !isNan- no es un numero
//     }
// }
// const mayor = Math.max(edad1,edad2,edad3);
// console.log(mayor);
// if(mayor===edad1){

// }

// function calcArea(base,altura){
//     const resultado= base * altura;
//     return resultado
// }

// const areaTotal = calcArea(10,5);
