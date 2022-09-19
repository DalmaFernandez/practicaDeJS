// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
const M = parseInt(prompt("Ingrese el numero de filas"));
const N = parseInt(prompt("Ingrese el numero de columnas"));
let P = 0;
// 
for (let i = 0; i < M; i++) {
    P= (M*N) - (N*i);
    let fila = "";
  for (let j = 0; j < N ; j++) {
    fila = fila + String(P - j) + " ";
  }

  console.log(fila);
}
