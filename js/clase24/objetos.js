// objetos
// let usuarioDal = {
//     // atributos
//     nombre: "Dalma",
//     apellido: "Fernández",
//     email: "dalmagiufernandez@gmail.com",
//     domicilio: "Buenos Aires 551 - San Miguel de Tucumán",
//     documento : "39.479.320",
//     // metodos
//     comprar: (producto)=>{
//         console.log(`Ha comprado ${producto}`)
//     },
//     vender:()=>{},
//     loguear:()=>{},
// }
//  const claves = Object.keys(usuarioDal);
//  const valores = Object.values(usuarioDal);
//  console.log(claves);
//  claves.forEach((clave,index)=>{
//     const valor = valores[index];
// document.write(`<p>${clave}:${valor}<br></p>`);
//  })
import { Usuario } from "./Usuario.js";

// instanciar el objeto usando la clase usuario que creamos en otro js
let usuarioDalma= new Usuario("Dalma","Fernandez","dalmagiufernandez@gmail.com");
console.log(usuarioDalma.nombre);