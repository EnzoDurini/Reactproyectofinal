import React, { useState } from 'react'

const ItemCount = ({initial,max,onAdd}) => {

    const[count,setCount] = useState(initial)

    const sumar = () => {
        count < max ? setCount(count+1) : alert ('No puedes agregar mas productos')
    }
    const reset = () => {
        setCount(initial)
    }
    
    function restar() {
        count > initial ? setCount(count - 1) : alert('No puedes quitar mas productos')
            ;
    }

  return (
    <div class="align-content-center border-1 w-50 top-50 text-center">
        <h2>{count}</h2>
        <button class="btn-group btn-dark btn-outline-danger" onClick={restar}>-</button>
        <button class="btn-group btn-dark" onClick={() => {onAdd(count); reset()}}>Agregar al carrito</button>
        <button class="btn-group btn-dark" onClick={sumar}>+</button>
        <br />
        <button onClick={reset}>Reset</button>
        </div>
    
  )
}

export default ItemCount;