/*
  Definición de Interfaces:
  Las interfaces se utilizan para definir la forma que debe tener un objeto => {}.
  Pueden contener propiedades y métodos, y luego otros objetos o clases pueden implementar esas interfaces.
  Aquí hay un ejemplo simple:
*/
;
//implementación de la interfaz en una clase
var Estudiante = /** @class */ (function () {
    //constructor de la clase Estudiante que recibe dos propiedades nombre y edad 
    //como argumentos y las asigna a las propiedades de la clase Estudiante. 
    function Estudiante(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodo saludar que imprime un mensaje con el nombre y la edad del estudiante.
    Estudiante.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " an\u0303os."));
    };
    return Estudiante;
}());
//crear una instancia de la clase Estudiante
var estudiante = new Estudiante("pedro", 23);
//llamar al método saludar
estudiante.saludar();
;
var persona1 = { nombre: "Juan", edad: 30 };
var persona2 = { nombre: "Pedro" };
console.log(persona1, persona2);
var punto = { x: 10, y: 20 };
var devUno = {
    nombre: "Maximiliano",
    tecnologias: ["typescript", "Cobol", "react"],
    tomarBebida: null
};
var devDos = {
    nombre: "John Doe",
    tecnologias: ["typescript", "javascript", "react"],
    tomarBebida: true
};
function enviarCurriculum(dev) {
    console.log("Enviando curriculum a ".concat(devUno.nombre));
}
enviarCurriculum(devUno);
