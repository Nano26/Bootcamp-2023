let biblioteca = [
  {
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes",
    paginas: 1056,
    prestado: false,
    genero: "Novela",
    publicado: 1605,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328,
    prestado: false,
    genero: "Ciencia ficción",
    publicado: 1949,
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    prestado: true,
    genero: "Realismo mágico",
    publicado: 1967,
  },
  {
    titulo: "En busca del tiempo perdido",
    autor: "Marcel Proust",
    paginas: 4215,
    prestado: true,
    genero: "Novela",
    publicado: 1913,
  },
  {
    titulo: "Ulises",
    autor: "James Joyce",
    paginas: 730,
    prestado: false,
    genero: "Modernismo",
    publicado: 1922,
  },
];

function findInArray(arr, name) {
  arr.find((e) => {
    if (e === name) {
      return true;
    } else {
      return false;
    }
  });
}

class Biblioteca {
  constructor(libros) {
    this.libros = libros;
  }
  showBooks() {
    this.libros.forEach((book) => {
      console.log(book.titulo, ",", book.autor);
    });
  }
  addBook({ titulo, autor, paginas, prestado = false, genero, publicado }) {
    this.libros.push({ titulo, autor, paginas, prestado, genero, publicado });
  }
  isTaken() {
    console.log(
      this.libros.filter((book) => {
        return book.prestado;
      })
    );
  }
  finder(title) {
    const wantedBook =  this.libros.find((book) => {
        return book.titulo === title;
      })
      return wantedBook;
  }
  pageSorter() {
    console.log(
      this.libros.sort((book1, book2) => {
        return book1.paginas - book2.paginas;
      })
    );
  }
  borrowing(title) {
    this.libros.find((book) => {
      return book.titulo === title;
    }).prestado = true;
  }
  findByAutor(writer) {
    this.libros.find((book) => {
      if (book.autor === writer) {
        return book;
      }
      return false;
    });
  }

  LibraryByAutors() {
    let autorsLibrary = [];
    for (let i = 0; i < this.libros.length; i++) {
      if (!Object.keys(autorsLibrary).includes(this.libros[i].autor)) {
        autorsLibrary[this.libros[i].autor] = [this.libros[i].titulo];
      } else {
        autorsLibrary[this.libros[i].autor].push(this.libros[i].titulo);
      }
    }
    return autorsLibrary;
  }

  PagesSum() {
    const pagesArr = this.libros.map((value) => value.paginas);
    const totalPages = pagesArr.reduce(function (a, b) {
      return a + b;
    });
    console.log(totalPages);
  }

  findByGenre(gen) {
    const genreBooks = this.libros.filter((book) => {
      if (book.genero === gen) {
        return book;
      }
    });
    console.log(genreBooks);
  }

  yearsRange(min, max) {
    const yearRangeLibrary = this.libros.filter((book) => {
      if (book.publicado >= min && book.publicado <= max) {
        return book;
      }
    });
    console.log(yearRangeLibrary);
  }

  deleteBook(title) {
    let index = this.libros.indexOf(this.finder(title));
    if (index > -1) {
      this.libros.splice(index, 1);
    }
  }
}

const library = new Biblioteca(biblioteca);
library.LibraryByAutors();
library.PagesSum();
library.addBook({
  titulo: "Cronicas Marcianas",
  autor: "Ray Bradbury",
  paginas: 268,
  prestado: false,
  genero: "Relatos",
  publicado: 1950,
});
library.addBook({
  titulo: "Farenheit 451",
  autor: "Ray Bradbury",
  paginas: 224,
  prestado: true,
  genero: "Novela",
  publicado: 1953,
});
library.PagesSum();
library.isTaken();
library.findByGenre("Modernismo");
library.yearsRange(1945, 1955);
library.deleteBook("Ulises");
library.showBooks()
library.deleteBook("En busca del tiempo perdido");
library.showBooks()
