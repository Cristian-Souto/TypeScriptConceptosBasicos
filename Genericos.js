/*  GENERICOS EN TYPESCRIPT
     Los genéricos permiten escribir funciones y clases que pueden trabajar con varios tipos de datos
     manteniendo la flexibilidad y la seguridad de los tipos.
*/
//clase Sorteo que recibe un tipo generico T y un nombre string 
var Sorteo = /** @class */ (function () {
    function Sorteo(nombre) {
        this.nombre = nombre;
    }
    Sorteo.prototype.setTicket = function (ticket) {
        this.ticket = ticket;
    };
    Sorteo.prototype.getTicket = function () {
        return this.ticket;
    };
    Sorteo.prototype.sortear = function () {
        return "Para ".concat(this.nombre, " ha sorteado el ticket: ").concat(this.ticket);
    };
    return Sorteo;
}());
//instancia de la clase Sorteo
var sorteo = new Sorteo("Juan");
sorteo.setTicket("ABC123");
/* sorteo.setTicket(1023); */
console.log(sorteo.sortear());
//funciones que retornan un tipo generico
function echo(valor) {
    return valor;
}
var resultado = echo("Hola, TypeScript!");
console.log(resultado);
var numero = echo(42);
console.log(numero);
// Función que intercambia los valores de dos variables
function intercambiarValores(a, b) {
    console.log("Antes del intercambio: a=".concat(a, ", b=").concat(b));
    // Intercambiar los valores
    var temp = a;
    a = b;
    b = temp;
    console.log("Despu\u00E9s del intercambio: a=".concat(a, ", b=").concat(b));
}
// Ejemplo con números
var num1 = 5;
var num2 = 10;
intercambiarValores(num1, num2);
// Ejemplo con cadenas
var str1 = "Hola";
var str2 = "Mundo";
intercambiarValores(str1, str2);
// Ejemplo con booleanos
var bool1 = true;
var bool2 = false;
intercambiarValores(bool1, bool2);
