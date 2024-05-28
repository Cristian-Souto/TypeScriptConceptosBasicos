/* Clases en TypeScript:
    Las clases en TypeScript son una forma de definir estructuras y comportamientos de objetos. 
    Pueden tener propiedades y métodos, y también admiten herencia. 
*/
class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
  hacerUnSonido() {
    console.log("Hago un sonido");
  }
}

class Perro extends Animal {
  raza: string;
  /*
    Constructor de la clase Perro que recibe dos propiedades raza y nombre como argumentos
    y las asigna a las propiedades de la clase Perro. */
  constructor(raza: string, nombre: string) {
    super(nombre);
    this.raza = raza;
  }
  hacerUnSonido(): void {
    console.log("Guau");
  }
}

const miPerro = new Perro("Labrador", "Firulais");
console.log(miPerro);
miPerro.hacerUnSonido()

// Clase CuentaBancaria utilizando getter y setter 
class CuentaBancaria {
  private _saldo: number = 0;

  constructor(private _titular: string) { }

  public depositar(monto: number) {
    this._saldo += monto;
  }
  //propiedad de solo lectura getter
  get titular(): string {
    return this._titular;
  }
  //propiedad de escritura setter
  set saldo(saldo: number) {
    //verificar que el saldo sea positivo
    saldo < 0 ? console.log('El saldo no puede ser negativo') : this._saldo = saldo
  }

  // Método para realizar un depósito
  realizarDeposito(monto: number): void {
    this._saldo += monto;
    console.log(`Depósito realizado. Su saldo actual es: ${this._saldo}`);
  }
  //metodo para realizar el retiro de dinero
  public realizarRetiro(monto: number): void {
    if (monto <= this._saldo) {
      this.saldo -= monto;
      console.log(`Se ha retirado ${monto}€.`);
    } else {
      console.log('Fondos insuficientes');
    }
  }
}
//instanciando la clase CuentaBancaria
const cuenta = new CuentaBancaria('Cristian');
console.log(`La cuenta de ${cuenta.titular}`);

//intento de establecer dinero negativo
cuenta.saldo = 1000;

//realizar operaciones de deposito y retiro de dinero.
cuenta.realizarDeposito(1000);
cuenta.realizarRetiro(2100);

