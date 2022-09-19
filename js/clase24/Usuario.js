// Las clases van con la primera letra con mayuscula
export class Usuario {
  // es una funcion pero sin poner function
  constructor(_nombre, apellido, email) {
    this.nombre = _nombre;
    // el de la izquierda es el atributo, el de la derecha es el parametro que estoy pasando
    // el _ se usa simplemente para no confundirse
    this.apellido = apellido;
    this.email = email;
  }
  loguear(){
    console.log("El usuario ha sido logueado");
  }
}
