import { Libros } from "./Libros.js";

export class Comic extends Libros { //herencia=extender, comics es un tipo de libro
    constructor(autor, titulo, precio, stock, ilustrador, volumen){
        super(autor, titulo, precio, stock)
        this.ilustrador = ilustrador;
        this.volumen = volumen;
    }
    verInfo(){
        // super.verInfo(); tambien se puede hacer esto
        console.log(this.autor,this.titulo,this.precio,this.stock,this.id, this.ilustrador, this.volumen);
    }
}