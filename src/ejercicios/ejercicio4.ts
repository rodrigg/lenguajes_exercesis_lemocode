console.log("Ejercicio 4 Read Books ");
interface Libro {
    title: string;
    isRead: boolean;
}
const books: Libro[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },]

const isBookRead = (books: Libro[], titlsetoSearch: string) =>
    books.some(libroitem => libroitem.title === titlsetoSearch && libroitem.isRead);

console.log(isBookRead(books, "Devastación")); // true 
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false 
