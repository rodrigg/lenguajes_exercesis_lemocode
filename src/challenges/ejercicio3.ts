console.log("3 Arbol");
interface Bibliotec {
    isbn: number;
    children?: NodoArbol<Bibliotec>;
}
type NodoArbol<T> = T | Array<NodoArbol<T>>

const biblio: Bibliotec = ({ isbn: 1, children: [{ isbn: 1 }] })