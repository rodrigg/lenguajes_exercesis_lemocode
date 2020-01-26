console.log("5 memoization");
const expensiveFunction = () => { console.log("Una única llamada"); return 3.1415; }

const memoize = (funcion: Function, cache: | Object = undefined): Function =>
    () => (cache) ? cache : cache = funcion();


const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415 console.log(memoized()); // 3.1415 console.log(memoized()); // 3.1415
