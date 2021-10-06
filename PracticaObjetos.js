/*Crea una clase libro
-La clase libro tendra un titulo, autor, año y genero
-Crea un metodo que devuelva toda la informacion del libro
-Pide 3 libros y guardalos en un array
-Los libros se introduciran al arrancar el programa pidiendo los datos con prompt.
-Validar que los campos no se introduzan vacios.

Validar que el año sea un numero y que tenga 4 digitos.
Validar que el genero sea: aventuras, terror o fantasia.

-Crea una funcion que muestre todos los libros
-Crea una funcion que muestre los autores ordenados alfabeticamente
-Crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelve la informacion
*/

class Libro {
  constructor(titulo, autor, year, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.year = year;
    this.genero = genero;
  }

  infoLibro() {
    return `EL Libro se titula ${this.titulo}, el auto es ${this.autor}, el año de publicacion es ${this.year} y pertenece al genero ${this.genero}`;
  }
}

let arrayLibros = [];

while (arrayLibros.length <= 3) {
  let book = prompt("Introduce el titulo del libro");
  while (book == "") {
    alert("Debes ingresar el titulo del libro");
    book = prompt("Introduce el titulo del libro");
  }

  let autor = prompt("Introduce el autor");
  while (autor == "") {
    alert("Debes ingresar el nombre del autor");
    autor = prompt("Introduce el autor");
  }

  let year = prompt("Introduce 4 numeros para el año de publicacion");
  while (year == "" || year.length < 4) {
    alert("Debes ingresar el año de publicacion con el formato indicado");
    year = prompt("Introduce 4 numeros para el año de publicacion");
  }

  let genero = prompt(
    "Introduce 1)Aventuras 2)Terror 3)Fantasia para el genero del libro"
  ).toLowerCase();
  while (genero == "") {
    alert("Debes ingresar el genero al que pertenece el libro");
    genero = prompt(
      "Introduce 1)Aventuras 2)Terror 3)Fantasia para el genero del libro"
    );
  }

  arrayLibros.push(new Libro(book, autor, year, genero));
  
}

const mostrarLibros = () => {
  for (let l of arrayLibros) {
    console.log(`${l.titulo}, ${l.autor}, ${l.year}, ${l.genero}`);
  }
};
mostrarLibros();

const ordenarAutores = () => {
  let aut = [];

  for (let a of arrayLibros) {
    aut.push(a.autor);
  }
  console.log(aut.sort());
};
ordenarAutores();

const informacionLibro = () => {
  let genero = prompt("Ingresa el genero").toLowerCase();

  for (let info of arrayLibros) {
    if (genero == info.genero) {
      console.log(info.infoLibro());
    }
  }
};
informacionLibro();
