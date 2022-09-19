// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
for (let i=0; i<30; i++){
    let suma="";
    for(let j=0; j<=i; j++){
        suma= suma + String(i+1);
    }
    console.log(suma);  
}