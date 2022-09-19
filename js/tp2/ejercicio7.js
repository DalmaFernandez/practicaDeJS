// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1
const N = parseInt(prompt("Ingrese un numero entero menor o igual al 50"));
if(N<=50){
    for (let i=N; i>=1; i--){
        let suma="";
        for(let j=0; j<i; j++){
            suma= suma + String(i);
        }
        console.log(suma);  
    }
}else{
    console.log("Numero inválido");
}

