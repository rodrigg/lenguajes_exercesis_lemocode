console.log("1 Aplanando arrays");
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const flattenDeepVariosNiveles = (arrayMulti: any[]): any[] => arrayMulti.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeepVariosNiveles(val)) : acc.concat(val), []);
console.log(flattenDeepVariosNiveles(sample));

const sample2: (number | number[])[] = [1, [2, 3], [4], [5, 6, 7, 8, 9]];
const flattenDeep2Niveles: <t>(value: (t | t[])[]) => t[] =
    (arrayMulti: any[]): any[] => [].concat(...arrayMulti);
console.log(flattenDeep2Niveles(sample2));

