// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado 
// por pantalla, la creación de la tabla debe ser realizada con una función 
// y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const tablaDeMultiplicar = (num) =>{
    console.log(`Tabla de multiplicar del ${num}`);
    for(let i=0; i<=10; i++){
        let p= i*num;
        console.log(`${num}  x  ${i}  =  ${p}`);
    }
}

const multiplo= Number(prompt("Ingrese el numero para ver su tabla de multiplicar"));
tablaDeMultiplicar(multiplo);
