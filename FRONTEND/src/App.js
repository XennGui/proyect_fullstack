// src/App.js

// PASO 1: Asegúrate de importar useRef correctamente
import React, { useState, useEffect, useRef } from "react"; // ← Añade useRef aquí
import { getProducts, deleteProduct } from "./services/Product/productService";
import ProductList from "./components/Product/ProductList";
import ProductForm from "./components/Product/ProductForm";
import './style/Product.css';

function App() {
  const [products, setProducts] = useState([]);
  const [productIdToEdit, setProductIdToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // PASO 2: Crea la referencia (esto debe estar dentro del componente)
  const formRef = useRef(null);

  // Efecto que se ejecuta al cargar el componente para obtener los productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener los productos", error);
        setError("Hubo un error al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Efecto que hace scroll al formulario cuando se edita un producto
  useEffect(() => {
    if (productIdToEdit && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [productIdToEdit]);


  // Función que maneja el agregado de un nuevo producto
  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Función que maneja la actualización de un producto
  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setProductIdToEdit(null); // Añade esta línea para resetear el formulario
  };

  // Función que maneja la eliminación de un producto
  // Función que maneja la eliminación de un producto
  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
      // Si el producto eliminado era el que se estaba editando, reseteamos el formulario
      if (productIdToEdit === id) {
        setProductIdToEdit(null);
      }
    } catch (error) {
      console.error("Error al eliminar el producto", error);
      setError("Hubo un error al eliminar el producto.");
    }
  };

  // Función que maneja la edición de un producto
  const handleEditProduct = (id) => {
    setProductIdToEdit(id);
  };

  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          {/* Envuelve ProductForm con un div y añade la ref */}
          <div ref={formRef}>
            <ProductForm
              productId={productIdToEdit}
              onAddProduct={handleAddProduct}
              onUpdateProduct={handleUpdateProduct}
            />
          </div>
          <ProductList
            products={products}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            onEditProduct={handleEditProduct}
          />
        </>
      )}
    </div>
  );
}

export default App;

//************************************************************************************* */

// // src/App.js
// import React, { useState, useEffect, useRef } from "react";
// import { getClients, deleteClient, updateClient } from "./services/Client/clientService";
// import ClientList from "./components/Client/ClientList";
// import ClientForm from "./components/Client/ClientForm";
// import './style/Client.css';

// function App() {
//   const [clients, setClients] = useState([]);
//   const [clientToEdit, setClientToEdit] = useState(null); // Ahora guardamos el cliente completo
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const formRef = useRef(null);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await getClients();
//         setClients(response.data);
//       } catch (error) {
//         console.error("Error al obtener clientes", error);
//         setError("Error al cargar los clientes");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchClients();
//   }, []);

//   useEffect(() => {
//     if (clientToEdit && formRef.current) {
//       formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [clientToEdit]);

//   const handleAddClient = (newClient) => {
//     setClients(prev => [...prev, newClient]);
//   };

//   const handleUpdateClient = async (updatedClient) => {
//     try {
//       if (!clientToEdit || !clientToEdit.id) {
//         throw new Error("No hay cliente seleccionado para editar");
//       }

//       const response = await updateClient(clientToEdit.id, updatedClient);
//       setClients(prev =>
//         prev.map(client =>
//           client.id === clientToEdit.id ? response.data : client
//         )
//       );
//       setClientToEdit(null);
//     } catch (error) {
//       console.error("Error al actualizar cliente", error);
//       setError(error.response?.data?.message || "Error al actualizar el cliente");
//     }
//   };

//   const handleDeleteClient = async (dni) => {
//     try {
//       await deleteClient(dni);
//       setClients(prev => prev.filter(client => client.dni !== dni));
//       if (clientToEdit && clientToEdit.dni === dni) {
//         setClientToEdit(null);
//       }
//     } catch (error) {
//       console.error("Error al eliminar cliente", error);
//       setError("Error al eliminar el cliente");
//     }
//   };

//   const handleEditClient = (client) => {
//     setClientToEdit(client); // Guardamos el cliente completo
//   };

//   return (
//     <div className="App">
//       <h1>Gestión de Clientes</h1>
//       {loading ? (
//         <p>Cargando clientes...</p>
//       ) : error ? (
//         <div className="error">{error}</div>
//       ) : (
//         <>
//           <div ref={formRef}>
//             <ClientForm
//               clientToEdit={clientToEdit} // Pasamos el cliente completo
//               onAddClient={handleAddClient}
//               onUpdateClient={handleUpdateClient}
//             />
//           </div>
//           <ClientList
//             clients={clients}
//             onDeleteClient={handleDeleteClient}
//             onEditClient={handleEditClient}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;