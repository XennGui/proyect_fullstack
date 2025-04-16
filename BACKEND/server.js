// server.js

//importamos las dependencias
const express = require('express'); //para el manejo de solicitud HTTP
const cors = require('cors');  //habilita los cors en la aplicación para la comunicación
const productRoutes = require('./routes/productRouters');
const clientRoutes = require('./routes/clientRoutes');

class Server {  //clase para encapsular la configuración y el arraque del servidor
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() { //metodo config
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() { //metodo routers
    // Todas las rutas de productos se alojarán en /productos
    this.app.use('/productos', productRoutes);
    this.app.use('/clientes', clientRoutes);
  }

  start() {  //metodo start
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  }
}

const server = new Server();
server.start();
