import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';
import Carrito from './components/Carrito';


function App() {

  //state para listado de productos
  const [productos, setProductos] = useState([
    {id:1, articulo:'iPhone', precio:2000},
    {id:2, articulo:'Xiaomi phone', precio:500},
    {id:3, articulo:'LG phone', precio:200},
    {id:4, articulo:'Samsung phone', precio:2000}
  ]);

  // state para carrito de compras
  const [carrito, addToCarrito] = useState([]);

  //Obteniendo la fecha
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo='Mi titulo'
      />

      <h1>Lista de productos</h1>
      {productos.map(x => (
        <Productos            
            key = {x.id}
            item = {x}
            productos = {productos}                       
            carrito = {carrito}
            addToCarrito = {addToCarrito}            
         />
      ))}
      <Carrito 
          carrito = {carrito}
          addToCarrito = {addToCarrito}
      />
      <Footer
        year = {date}
      />
    </Fragment>
  );
}

export default App;
