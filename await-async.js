// Promesa
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// Funcion asincronica
async function asyncFunc() {
    try {
        // espera a que se resuelva la promesa 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}

// ejecuta la funcion asincronica
asyncFunc(); // Promise resolved