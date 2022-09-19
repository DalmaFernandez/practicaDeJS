// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa 
// como argumento. A partir de la cadena que se le pasa, la función determina 
// si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
const mayusculaYminuscula = (texto) =>{
    const regexMay = /[A-Z\s]+/;
    const regexmin = /[a-z\s]+/;
if (regexMay.test(texto) && regexmin.test(texto) ){
    console.log("El texto tiene mayusculas y minusculas");
} else if (regexmin.test(texto)){
    console.log("El texto está en minúsculas");
} else {
    console.log("El texto esta en mayuscula");
}
}



let texto = prompt ("Ingrese un texto");
mayusculaYminuscula(texto);