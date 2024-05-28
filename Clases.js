var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Clases en TypeScript:
    Las clases en TypeScript son una forma de definir estructuras y comportamientos de objetos.
    Pueden tener propiedades y métodos, y también admiten herencia.
*/
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.hacerUnSonido = function () {
        console.log("Hago un sonido");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    /*
      Constructor de la clase Perro que recibe dos propiedades raza y nombre como argumentos
      y las asigna a las propiedades de la clase Perro. */
    function Perro(raza, nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.raza = raza;
        return _this;
    }
    Perro.prototype.hacerUnSonido = function () {
        console.log("Guau");
    };
    return Perro;
}(Animal));
var miPerro = new Perro("Labrador", "Firulais");
console.log(miPerro);
miPerro.hacerUnSonido();
// Clase CuentaBancaria utilizando getter y setter 
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(_titular) {
        this._titular = _titular;
        this._saldo = 0;
    }
    CuentaBancaria.prototype.depositar = function (monto) {
        this._saldo += monto;
    };
    Object.defineProperty(CuentaBancaria.prototype, "titular", {
        //propiedad de solo lectura getter
        get: function () {
            return this._titular;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CuentaBancaria.prototype, "saldo", {
        //propiedad de escritura setter
        set: function (saldo) {
            //verificar que el saldo sea positivo
            saldo < 0 ? console.log('El saldo no puede ser negativo') : this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    // Método para realizar un depósito
    CuentaBancaria.prototype.realizarDeposito = function (monto) {
        this._saldo += monto;
        console.log("Dep\u00F3sito realizado. Su saldo actual es: ".concat(this._saldo));
    };
    //metodo para realizar el retiro de dinero
    CuentaBancaria.prototype.realizarRetiro = function (monto) {
        if (monto <= this._saldo) {
            this.saldo -= monto;
            console.log("Se ha retirado ".concat(monto, "\u20AC."));
        }
        else {
            console.log('Fondos insuficientes');
        }
    };
    return CuentaBancaria;
}());
//instanciando la clase CuentaBancaria
var cuenta = new CuentaBancaria('Cristian');
console.log("La cuenta de ".concat(cuenta.titular));
//intento de establecer dinero negativo
cuenta.saldo = 1000;
//realizar operaciones de deposito y retiro de dinero.
cuenta.realizarDeposito(1000);
cuenta.realizarRetiro(2100);
