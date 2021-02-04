import React, {useState} from 'react';

const ItemListContainer= (props)=> {
    const[contador,setContador]= useState(12);
    return(
        <>
          <button
          
            onClick={ contador>=1? setContador(1) : () => setContador(contador--) }>
            -
          </button>

          <p>El contador es {(useState)} </p>

          <button
          
            onClick={contador<=12? ()=> setContador(contador++): setContador(12)}>
            +
          </button>
          </>
        )
    }
    export default ItemListContainer;