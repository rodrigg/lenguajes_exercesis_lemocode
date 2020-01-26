console.log("Ejercicio2 Concat");
const concat = (arrayA: number[], arrayB: number[])
    : number[] => [...arrayA, ...arrayB];
console.log(concat(arrayPrueba, arrayPrueba));

const concatOptional = (...arrays: number[][])
    : number[] => arrays.reduce((a, b) => [...a, ...b], []);;

console.log(concatOptional(arrayPrueba, arrayPrueba, arrayPrueba));
