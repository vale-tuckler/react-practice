import React from 'react';
import Productos from './Productos';
import '../styles/Carrito.css';

const Carrito = ({carrito}) => (
//No se hara ninguna operacion antes del return

    <div className = "carrito">
        <h2>Tu carrito de compras</h2>
        {carrito.map(a => (
            <Productos 
                key = {a.id}
                item = {a}

            />
        ))}
    </div>
);

export default Carrito;