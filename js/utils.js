// factorial

export function factorial(numero) {
  let res = 1;
  for (let i = numero; i > 0; i--) {
    res = res * i;
  }
  return res;
}

// primera letra mayuscula
export const primeraLetraMayuscula = (cadena) => {
    let primeraLetra= cadena.charAt(0);
    primeraLetra= primeraLetra.toUpperCase();
    let cadenaMinuscula = cadena.toLowerCase();
    cadenaMinuscula= cadenaMinuscula.slice(1);
    const cadenaFinal= primeraLetra + cadenaMinuscula;
    return cadenaFinal;
}

// Validar que es un email
export const validarEmail= (email) => {
  // patron: texto, arroba, texto, punto, texto
  const regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if(regex.test(email)){
    return true;
  } else {
    return false;
  }
}
export const imprimirObjeto = (claves, valores) =>{
  claves.forEach((clave,index)=>{
    const valor = valores[index];
document.write(`<p>${clave}:${valor}<br></p>`);
 })
}

export const generarId = (n) => {
  let id = "";
  for (let i = 0; i < n; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}


