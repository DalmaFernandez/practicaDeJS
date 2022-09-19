// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)
const a = Number(prompt("Ingrese la base del rectangulo en cm"));
const b = Number(prompt("Ingrese la altura del rectangulo en cm"));
const perimetro = (a, b) => {

  const p = 2 * (a + b);
  return p;
};
const p = perimetro(a,b);
console.log(`El perimetro del rectangulo es ${p} cm`);
