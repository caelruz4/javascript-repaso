// URL de la API de ejemplo que devuelve datos de usuario
const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

// Función para hacer una solicitud HTTP utilizando fetch
function fetchData() {
    fetch(apiUrl)
        .then(response => {
            // verificar el estado de la respuesta
            if (!response.ok) {
                throw new Error('La solicitud no pudo ser completada. Código de estado: ' + response.status);
            }
            // Convertir la respuesta a formato JSON
            return response.json();
        })
        .then(data => {
            // Manejar los datos recibidos
            console.log('Datos del usuario:', data);
        })
        .catch(error => {
            // Manejar errores
            console.error('Ocurrió un error al obtener los datos del usuario:', error);
        });
}

// Llamar a la función para hacer la solicitud HTTP
fetchData();
