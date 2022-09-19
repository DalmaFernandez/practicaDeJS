// 3- Escribir un script que simule el lanzamiento de dos 
// dados. Hacer uso de la función Math.random para obtener 
// números aleatorios entre 1 y 6 para cada uno de los 
// lanzamientos de los dados. Sumar el resultado de 
// lanzar dos dados y anotar en un array el número de 
// apariciones de dicha suma, repitiendo 50 veces esta 
// operación.
function numeroAleatorio(min, max){
    return parseInt(Math.random()* (max-min) + min);
}
let sumas = [];
for(let i=0; i<20; i++){
const dado1 = numeroAleatorio(1,7);
const dado2 = numeroAleatorio (1,7);
const suma = dado1 + dado2;
sumas.push(suma);
}
console.log(sumas);

let cantidadDe12 = 0;
sumas.forEach((elemento)=>{
    if(elemento ===12){
        cantidadDe12++
    }
})
console.log(cantidadDe12);
