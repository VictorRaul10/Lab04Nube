const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación Express!');
});

// Ruta para mostrar 3 clientes
app.get('/clientes', (req, res) => {
    const clientes = ['Victor', 'Oscar', 'Alex'];
    res.json(clientes);
});

// Ruta para mostrar 3 productos
app.get('/productos', (req, res) => {
    const productos = ['Laptop', 'Maus', 'USB'];
    res.json(productos);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
