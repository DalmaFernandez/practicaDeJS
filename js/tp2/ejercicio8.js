// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
const N = parseInt(prompt("Ingrese un numero entero menor o igual al 50"));
if(N<=50){
    for (let i=0; i<=N; i++){
        let suma="";
        for(let j=0; j<i; j++){
            suma= suma + String(j+1);
        }
        console.log(suma);  
    }
}else{
    console.log("Numero inválido");
}
