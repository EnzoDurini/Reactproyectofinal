import { useState } from "react"
import {Link} from 'react-router-dom';


const ItemCount = ({stock,onAdd}) => {

const [count, setCount] = useState(1)
const [show, setShow] = useState(false)
    const sumar = () => {
        count < stock ? setCount(count+1) : alert ('No puedes agregar mas productos')
        
    }
    function restar() {
        count > 1 ? setCount(count - 1) : alert('No puedes quitar mas productos')
    }
    const agregar = () => {
        onAdd(count,setShow(true))
    } 
return (
    <>{show? <div className="d-flex col-xl-6 justify-content-evenly mb-3">
        <Link to="/"><button className="btn-group btn-dark">Continuar comprando</button></Link>
        <div><Link to="/cart"><button className="btn-group btn-dark">Ir al carrito</button></Link></div>
        </div>
    : <div className="d-flex col-xl-6 justify-content-evenly mb-3">
        <button className="btn-group btn-dark btn-outline-danger" onClick={restar}>-</button>
        <div>
        <h2>{count}</h2>
        </div>
        <button className="btn-group btn-dark" onClick={sumar}>+</button>
        <button className="btn-group btn-dark" onClick={agregar}>Agregar al carrito</button> 
        </div>
}
    
    </>
    
    
)
}

export default ItemCount;


