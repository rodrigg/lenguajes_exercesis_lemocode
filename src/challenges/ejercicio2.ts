console.log("2 Acceso en profundidad");
console.log("get deep");
const myObject = { a: 1, b: { c: null, d: { e: 3, f: { g: "bingo", } } } };
const deepGet = (object: Object, ...params: string[]): Object => params.reduce((accu, current) => accu[current], object);
console.log(deepGet(myObject, "x")); // undefined 
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}} 
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo 
console.log(deepGet(myObject));  // {a: 1, b: {...}}
console.log("set deep");

const myObjectSet = {};
const deepSet = (value: number, object: any, ...path: string[]) => {
    if (path.length === 0) {
        return null
    }

    let objectPath = object;
    for (let i = 0; i < path.length - 1; i++) {
        if (objectPath[path[i]] === undefined) objectPath[path[i]] = {};
        objectPath[path[i]][path[i + 1]] = undefined;
        objectPath = objectPath[path[i]];
    }

    objectPath[path[path.length - 1]] = value;
    return object;
}; deepSet(1, myObjectSet, "a", "b");
console.log(JSON.stringify(myObjectSet));  // {a: { b: 1}}
deepSet(2, myObjectSet, "a", "c");
console.log(JSON.stringify(myObjectSet));  // {a: { b: 1, c: 2}}
deepSet(3, myObjectSet, "a");
console.log(JSON.stringify(myObjectSet));  // {a: 3}

