// 15- Realiza un script que cuente el número de vocales que tiene un texto.
let texto = prompt("ingrese un texto");
let contador=0;
for(let i=0; i<=texto.length; i++){
    let caracter = texto.charAt(i);
    
    if(caracter==="a" || caracter==="e" || caracter==="i" || caracter==="o" || caracter==="u"){
        contador++;
    }
}

console.log(contador);