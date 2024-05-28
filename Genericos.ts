/*  GENERICOS EN TYPESCRIPT 
     Los genéricos permiten escribir funciones y clases que pueden trabajar con varios tipos de datos 
     manteniendo la flexibilidad y la seguridad de los tipos.
*/

//clase Sorteo que recibe un tipo generico T y un nombre string 
class Sorteo<T> {
  private ticket?: T;

  constructor(private nombre: string) { }

  setTicket(ticket: T) {
    this.ticket = ticket;
  }
  getTicket() {
    return this.ticket;
  }

  public sortear(): string {
    return `Para ${this.nombre} ha sorteado el ticket: ${this.ticket}`;
  }
}
//instancia de la clase Sorteo
const sorteo = new Sorteo<string>("Juan");
sorteo.setTicket("ABC123");
/* sorteo.setTicket(1023); */
console.log(sorteo.sortear());

//funciones que retornan un tipo generico
function echo<T>(valor: T): T {
  return valor;
}

const resultado = echo("Hola, TypeScript!");
console.log(resultado);

const numero = echo(42);
console.log(numero);

// Función que intercambia los valores de dos variables
function intercambiarValores<T>(a: T, b: T): void {
  console.log(`Antes del intercambio: a=${a}, b=${b}`);

  // Intercambiar los valores
  const temp: T = a;
  a = b;
  b = temp;

  console.log(`Después del intercambio: a=${a}, b=${b}`);
}

// Ejemplo con números
let num1: number = 5;
let num2: number = 10;
intercambiarValores(num1, num2);

// Ejemplo con cadenas
let str1: string = "Hola";
let str2: string = "Mundo";
intercambiarValores(str1, str2);

// Ejemplo con booleanos
let bool1: boolean = true;
let bool2: boolean = false;
intercambiarValores(bool1, bool2);
