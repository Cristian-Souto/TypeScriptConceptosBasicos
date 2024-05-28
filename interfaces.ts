/*
  Definición de Interfaces:
  Las interfaces se utilizan para definir la forma que debe tener un objeto => {}. 
  Pueden contener propiedades y métodos, y luego otros objetos o clases pueden implementar esas interfaces. 
  Aquí hay un ejemplo simple:
*/

//definición de la interfaz
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
};

//implementación de la interfaz en una clase
class Estudiante implements Persona {
  nombre: string;
  edad: number;

  //constructor de la clase Estudiante que recibe dos propiedades nombre y edad 
  //como argumentos y las asigna a las propiedades de la clase Estudiante. 
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  //metodo saludar que imprime un mensaje con el nombre y la edad del estudiante.
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

//crear una instancia de la clase Estudiante
const estudiante = new Estudiante("pedro", 23);

//llamar al método saludar
estudiante.saludar();

/*
  PROPIEDADES OPCIONALES:
  Puedes hacer propiedades opcionales agregando el símbolo de interrogación (?) después del nombre de la propiedad:
*/

interface PersonaDos {
  nombre: string;
  edad?: number; //propiedad opcional
};

const persona1: PersonaDos = { nombre: "Juan", edad: 30 };
const persona2: PersonaDos = { nombre: "Pedro" };

console.log(persona1, persona2);

/*
  Propiedades de Solo Lectura:
  Puedes marcar las propiedades como solo lectura con la palabra clave => readonly
*/

interface Punto {
  readonly x: number;
  readonly y: number;
}

const punto: Punto = { x: 10, y: 20 };
//punto.x = 5;  // Error: 'x' is read-only  

interface Programadores {
  nombre: string;
  tecnologias: string[];
  tomarBebida: boolean | null;
}

let devUno: Programadores = {
  nombre: "Maximiliano",
  tecnologias: ["typescript", "Cobol", "react"],
  tomarBebida: null
}

let devDos = {
  nombre: "John Doe",
  tecnologias: ["typescript", "javascript", "react"],
  tomarBebida: true
}

function enviarCurriculum(dev: Programadores) { 
  console.log(`Enviando curriculum a ${devUno.nombre}`);
}

enviarCurriculum(devUno)