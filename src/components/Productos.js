import React from 'react';

const Productos = ({item, carrito, addToCarrito, productos}) => {

    const {id, articulo, precio} = item; 
    const Buy = id => {
        console.log("Comprando " + articulo + "...");
        const producto = productos.filter(p => p.id === id);
        console.log(producto); //This is to check if the the variable is receving the information.
        addToCarrito([
            ...carrito,
            item
        ]);
    }
    return(
        <div>
            <h3>{articulo}</h3>
            <h4>Precio: ${precio}</h4>
            <button 
                type = "button"
                onClick = {() => Buy(id)}
            >Comprar</button>
        </div>
    );
};

export default Productos;
