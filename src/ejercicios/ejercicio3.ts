

console.log("Ejercicio3 Merge ")
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const clone = (source: any): any => ({ ...source })
console.log(clone(a));

const merge = (source: any, target: any): any => ({ ...target, ...source })
console.log(merge(a, b));