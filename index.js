// index.js
import fetch from 'node-fetch'; // instalar: npm install node-fetch

const URL_BASE = 'https://fakestoreapi.com/products';

// Capturamos los argumentos desde la terminal
const [,, metodo, recurso, ...args] = process.argv;

// Funciones para interactuar con la API
async function obtenerTodosLosProductos() {
    try {
        const respuesta = await fetch(URL_BASE);
        const datos = await respuesta.json();
        console.log('Lista de productos:');
        console.table(datos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

async function obtenerProducto(id) {
    try {
        const respuesta = await fetch(`${URL_BASE}/${id}`);
        if (!respuesta.ok) throw new Error(`Producto con ID ${id} no encontrado`);
        const datos = await respuesta.json();
        console.log('Producto encontrado:');
        console.log(datos);
    } catch (error) {
        console.error('Error al obtener producto:', error);
    }
}

async function crearProducto(titulo, precio, categoria) {
    try {
        const respuesta = await fetch(URL_BASE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: titulo, price: precio, category: categoria })
        });
        const datos = await respuesta.json();
        console.log('Producto creado:');
        console.log(datos);
    } catch (error) {
        console.error('Error al crear producto:', error);
    }
}

async function eliminarProducto(id) {
    try {
        const respuesta = await fetch(`${URL_BASE}/${id}`, { method: 'DELETE' });
        if (!respuesta.ok) throw new Error(`No se pudo eliminar el producto con ID ${id}`);
        const datos = await respuesta.json();
        console.log('Producto eliminado:');
        console.log(datos);
    } catch (error) {
        console.error('Error al eliminar producto:', error);
    }
}

// Lógica principal para interpretar comandos
(async () => {
    if (metodo === 'GET') {
        if (recurso === 'products') {
            await obtenerTodosLosProductos();
        } else if (recurso.startsWith('products/')) {
            const id = recurso.split('/')[1];
            await obtenerProducto(id);
        } else {
            console.log('Comando GET no reconocido');
        }
    } else if (metodo === 'POST' && recurso === 'products') {
        const [titulo, precio, categoria] = args;
        if (!titulo || !precio || !categoria) {
            console.log('Faltan datos para crear el producto: título precio categoría');
        } else {
            await crearProducto(titulo, precio, categoria);
        }
    } else if (metodo === 'DELETE' && recurso.startsWith('products/')) {
        const id = recurso.split('/')[1];
        await eliminarProducto(id);
    } else {
        console.log('Comando no reconocido. Usa GET, POST o DELETE con la sintaxis correcta.');
    }
})();
