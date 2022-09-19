const ensalada = ["🥑", "🍅", "🥕"];
// metodos: https://www.w3schools.com/jsref/jsref_obj_array.asp

ensalada.push("🥦"); //agrega 1 o mas elementos al final
ensalada.pop(); //elimina el ultimo elemento
ensalada.shift(); //elimina el primer elemento
ensalada.unshift("🥙"); //agrega al principio

const nuevaEnsalada = ensalada.slice(1); //RECORTAR
const postre = ["🥐", "🍧"];
const cena = ensalada.concat(postre); //concatenar
console.log(ensalada);
console.log(nuevaEnsalada);
console.log(cena);
console.log(ensalada.length); //longitud del arreglo
console.log(ensalada.includes("🥕")); //pregunta si mi arreglo incluye tal elemento
ensalada.findIndex(function () {
  // funcion anonima no tiene nombre solo se puede usar dentro de un metodo
  // callback es una funcion dentro de otra funcion . una funcion como parametro de otra
});
let indice= ensalada.findIndex((item) => {
  return item === "🥕";
});
console.log(indice);
let suma = 0;
const valores = [0,1,2,3,4,5];
//forEach es como un for que va recorriendo el arreglo
//la funcion se puede declarar antes (si o si debe tener nombre) y despues usarla dentro del forEach
valores.forEach((item)=>{
    suma += item;
    console.log(item);
})
console.log(valores);
console.log(suma);
//()=>{}  funcion de flechas
const cena1= cena.map((elemento)=>{
    const newValue = elemento + "parte de la cena";
    return newValue;
}) //podemos modificar todos los elementos del arreglo y lo guarda en un nuevo arreglo
console.log(cena1);
// every, filter, find, reduce, reverse, some, sort, 
