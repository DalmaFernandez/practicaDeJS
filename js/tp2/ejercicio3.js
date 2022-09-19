// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
// inicializar la variable 
let cadena="";
while (true) {
  let palabra = prompt("Ingrese un texto");
  if (palabra === null) break;
  cadena =  cadena +  palabra + "-";
}

console.log(cadena);
//  TAREA HASTA EJERCICIO 10