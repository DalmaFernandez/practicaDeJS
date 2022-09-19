// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
// almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo 
// generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
let ciudades = [];
while(true){

    let ciudad = prompt("Ingrese una ciudad");
    if(ciudad===null) break;
    ciudades.push(ciudad);
    

}
console.log(ciudades);
console.log(`la longitud del arreglo es ${ciudades.length}`);
console.log(`primer elemento ${ciudades[0]}`);
console.log(`tercer elemento ${ciudades[2]}`);
console.log(`ultimo elemento ${ciudades[ciudades.length-1]}`);
ciudades.push("París");
console.log(ciudades);
ciudades.splice(1,1,"Barcelona");
console.log(ciudades);

