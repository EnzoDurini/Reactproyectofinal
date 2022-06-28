import { useState } from "react"

const ItemCount = ({stock,onAdd}) => {

const [count, setCount] = useState(1)

    const sumar = () => {
        count < stock ? setCount(count+1) : alert ('No puedes agregar mas productos')
        console.log(count)
    }
    function restar() {
        count > 1 ? setCount(count - 1) : alert('No puedes quitar mas productos')
        console.log(count)
    }
    const agregar = () => {onAdd(count);} 
return (
    <div className="d-flex col-xl-6 justify-content-evenly mb-3">
        <button className="btn-group btn-dark btn-outline-danger" onClick={restar}>-</button>
        <div>
        <h2>{count}</h2>
        </div>
        <button className="btn-group btn-dark" onClick={sumar}>+</button>
        <button className="btn-group btn-dark" onClick={agregar}>Agregar al carrito</button>  
        </div>
    
)
}

export default ItemCount;