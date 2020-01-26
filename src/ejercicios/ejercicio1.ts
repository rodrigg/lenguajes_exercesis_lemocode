console.log("Ejercicio 1 Array operations");
const arrayPrueba = [1, 2, 3, 4];
const head = (array: number[]): number => {
    const [primero] = array;
    return primero
}
console.log(head(arrayPrueba));

const tail = (array: number[]): number[] => {
    const [primero, ...arrayExtr] = array;
    return arrayExtr
}
console.log(tail(arrayPrueba));

const init = (array: number[]): number[] => array.slice(0, array.length - 1);
console.log(init(arrayPrueba));

const last = (array: number[]): number => array[array.length - 1];
console.log(last(arrayPrueba));

