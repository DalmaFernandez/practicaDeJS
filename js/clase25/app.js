import { Libros } from "./Libros.js";
import { Comic } from "./Comic.js"
const libro = new Libros ("Pepe","Juegos del hambre",1500,30);
libro.verInfo();
console.log(libro);

const comic = new Comic ("Juan", "It", 2000, 15, "Juan Perez", "Volumen1");
comic.verInfo();