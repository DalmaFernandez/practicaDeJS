while (true) {
  const numero1 = Number(prompt("Ingrese el primer numero"));
  const numero2 = Number(prompt("Ingrese el primer numero"));
  const opcion = prompt(
    "Bienvenido, seleccione una opcion: \n 1.Sumar \n 2. Restar \n 3. Multiplicar \n 4.Dividir \n 5.Salir"
  );
let resultado;
// BANDERA 
let salida= false;
  switch (opcion) {
    case "1": {
      resultado = numero1 + numero2;
      break;
    }
    case "2": {
      resultado = numero1 - numero2;
      break;
    }
    case "3": {
      resultado = numero1 * numero2;
      break;
    }
    case "4": {
        if (numero2===0){
            alert("El denominador es 0, y no se puede dividir");
            break;
        }
      resultado = numero1 / numero2;
      break;
    }
    case "5": {
      salida = true;
      break;
    }
    default: {
        alert("La opcion ingresada no es valida");
      // cualquier otro valor
      break;
    }
  }
  if(resultado===0 || resultado){
    alert (`El resultado es ${resultado}`)
  }
   
  if(salida){
    break;
  }
}
