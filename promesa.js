const count = true;

// constructor de promesa
let promesa = new Promise((resolve, reject) => {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(promesa);

// luego
promesa.then(function(result) {

    alert(result);
}).catch(function(error) {

    alert(error);
})
.finally(function() {

    alert("Finally");
});
