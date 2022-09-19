import { factorial , primeraLetraMayuscula, validarEmail} from "./utils.js";


const resultado = factorial(8);
console.log(resultado);

const cadena = primeraLetraMayuscula("HOla Como estAS");
console.log(cadena);

// template strings, literal
const texto1 = "Dalma";
const texto2 = 26;

console.log(`Soy ${texto1} y tengo ${texto2} años`);

const email= "dalmagiufernandez@gmail.com";

const par = (numero) =>{
    const regex= /^(\+|-)?\d+$/;
    
    if(numero && regex.test(numero)){
        if(numero % 2 ===0){
            console.log(numero);
            console.log("Es par");
        }else{
            console.log(numero);
            console.log("Es impar");
        }
        
    } else{
        alert("Numero no valido");
    }
}

par (-7);


