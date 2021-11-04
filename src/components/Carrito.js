import React from 'react';
import Productos from './Productos';
import '../styles/Carrito.css';

const Carrito = ({carrito, addToCarrito}) => (
//No se hara ninguna operacion antes del return

    <div className = "carrito">
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
        
        ? <p>No tienes articulos en el carrito</p>
        
        : carrito.map(a => (
            <Productos 
                key = {a.id}
                item = {a}
                carrito = {carrito}
                addToCarrito = {addToCarrito}
            />
        ))
    }
    </div>
);

export default Carrito;