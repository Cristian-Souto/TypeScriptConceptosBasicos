//TIPOS PRIMITIVOS
/*
  let numero: number = 10;
  let texto: string = 'Hola typescript!';
  let booleano: boolean = true;
  let nulo: null = null;
  let indefinido: undefined = undefined;
*/

//TIPOS COMPUESTOS

let array: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ['hello', 10];
//objeto literal
let object: { name: string, age: number } = { name: 'John', age: 30 };
/* let function: (x: number, y: number) => number = (x, y) => x + y; */
let movies: any | number[] = ["spiderman", "hulk", 10, "ironman"];

//ENUM
enum Color {
  Rojo,
  Verde,
  Azul
}

let color: Color = Color.Verde;


//TYPE ALIAS 
type Programador = {
  nombre: string,
  tecnologias: string[],
  tomarBebida: boolean | null
}

let programador: Programador = {
  nombre: "John Doe",
  tecnologias: ["typescript", "javascript", "react"],
  tomarBebida: true
}

let programador2: Programador = {
  nombre: "Maximiliano",
  tecnologias: ["typescript", "Cobol", "react"],
  tomarBebida: null
}

