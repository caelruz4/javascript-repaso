// asincronia dada por el navegador
let segundos = 2;
setTimeout(() => {
    console.log(`Ya pasaron los ${segundos} segundos`);
}, segundos * 1000)

console.log('Esto se ejecuta antes de que termine el setTimeOut');

// operacion sincronica
console.time('Tiempo de ejecucion');
let total=0;
for (let i = 0; i < 500000000; i++) {
    total += i;
}
console.timeEnd('Tiempo de ejecucion');
console.log("tiempo: "+total);

function clickear() {
    console.log("CLICK");
}