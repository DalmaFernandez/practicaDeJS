// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto=prompt("INGRESE UN TEXTO");
let otxet = "";
let ultCar = texto.length -1;
for(let i=ultCar;i>=0;i--){
otxet=otxet.concat(texto.charAt(i));
}
console.log(otxet);