import {useState , useEffect} from 'react'
import '../styles/normalize.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {

  const [carrito , setCarrito]=  useState([]);

  useEffect(() => {

    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    
    setCarrito(carritoLS);

  },[]);

  useEffect(() => {
    
    localStorage.setItem('carrito' , JSON.stringify(carrito));

  },[carrito]);


  const agregarCarrito = producto => {

    /* verificar si ya existe el producto con .some devuelve tru o false*/

    if( carrito.some(guitarra => guitarra.id === producto.id)) {

      const carritoActualizado = carrito.map(articulo => {
        if(articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }

        return articulo;

      })

      setCarrito(carritoActualizado);

    } else {
      setCarrito([...carrito , producto]);

    }
    
  }

  const actualizarCantidad = producto => {

    const carritoActualizado = carrito.map(articulo => {
      if(articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }

      return articulo;

    });


    setCarrito(carritoActualizado);

  }


  const eliminarProducto = id => {
  
    if(carrito.some(producto => producto.id === id)) {

      const carritoActualizado = carrito.filter(producto => producto.id !== id);
      
      setCarrito(carritoActualizado);

    }


  }

  return <Component {...pageProps}  
        carrito={carrito} 
        agregarCarrito={agregarCarrito}
        actualizarCantidad={actualizarCantidad}
        eliminarProducto={eliminarProducto}
  />
}

export default MyApp
