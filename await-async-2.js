// Simulación de una solicitud al servidor para obtener datos de usuario

let getUserData = new Promise(function (resolve, reject) {
    // solicitud al servidor para obtener los datos del usuario
    setTimeout(() => {
        let userData = {
            name: 'Lola',
            age: 23,
            email: 'lola@gmail.com'
        };
        resolve(userData); // solicitud es exitosa y devolvemos los datos del usuario
    }, 2000); // simular un tiempo de espera de 2 segundos
});

// Función asíncrona para obtener y mostrar los datos del usuario
async function getUserInfo() {
    try {
        // esperar que la promesa se resuelva para obtener los datos del usuario
        let userData = await getUserData;

        console.log("Datos del usuario:");
        console.log("Nombre:", userData.name);
        console.log("Edad:", userData.age);
        console.log("Correo electrónico:", userData.email);
    } catch (error) {
        console.log("Ocurrió un error al obtener los datos del usuario:", error);
    }
}

// Llamamos a la función asíncrona para obtener y mostrar los datos del usuario
getUserInfo();

// NOTA: si no se resuelve la promesa, la función getUserInfo() no se ejecuta
// NOTA2: 
// Cuando se quita la palabra clave await en la función getUserInfo, 
// la ejecución de la función continúa sin esperar a que la promesa se resuelva.