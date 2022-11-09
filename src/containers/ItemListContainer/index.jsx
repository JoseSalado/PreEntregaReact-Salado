import React from 'react';
import { useState } from 'react';
import './styles.css';

const ItemListContainer = ({greeting})=>{

    const [nombre , setNombre] = useState("Sorrentinos")

    const cambiarNombre =()=>{
        if (nombre === "Sorrentinos") setNombre("Ravioles")
        else setNombre ("Sorrentinos")
    }
    return(
        <div className='item-list-container'>
            <h2>{greeting}</h2>
            <p>{nombre}</p>
            <button onClick={cambiarNombre}>Cambiar de Producto</button>
        </div>
    )

}
export default ItemListContainer;