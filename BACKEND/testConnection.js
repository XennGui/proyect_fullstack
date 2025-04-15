// testConnection.js
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/productos', // Ruta que tengas definida
  method: 'GET'
};

const req = http.request(options, res => {
  console.log(`Estado: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error('Error al conectar con el servidor:', error.message);
});

req.end();
