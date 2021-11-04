import React from 'react';

const Productos = ({item, carrito, addToCarrito, productos}) => {

    const {id, articulo, precio} = item; 

    //Agregar producto al carrito
    const Buy = id => {
        console.log("Comprando " + articulo + "...");
        const producto = productos.filter(p => p.id === id);
        console.log(producto); //Esto es para verificar si la variable esta recibiendo la informacion
        addToCarrito([
            ...carrito,
            item
        ]);
    }

    //Eliminar producto del carrito
        const eliminarProducto = id => {
            
            //Se conservaran los productos que no coincidan con el id
            const productos = carrito.filter(a => a.id !== id)             

            //Colocar los productos en el state
            addToCarrito(productos);
        };


    return(
        <div>
            <h3>{articulo}</h3>
            <h4>Precio: ${precio}</h4>
            {productos //Si en este componente hay productos (si habia una lista previamente)...
                ? //Ejecuta este codigo...
                    (
                        <button 
                            type = "button"
                            onClick = {() => Buy(id)}
                        >Comprar</button>
                    )
                :  //caso contrario, ejecuta este otro...
                    (
                        <button 
                            type = "button" 
                            onClick = {() => eliminarProducto(id)}                       
                        >Eliminar</button>
                    )      
            }
        </div>
    );
};

export default Productos;
