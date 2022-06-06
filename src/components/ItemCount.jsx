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
    <div>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <br />
        <button onClick={reset}>Reset</button>
        <button onClick={() => {onAdd(count); reset()}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;