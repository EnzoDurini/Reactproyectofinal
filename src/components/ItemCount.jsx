import { useState } from "react"
import {Link} from 'react-router-dom';
import "./ItemCount.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({stock,onAdd}) => {

const [count, setCount] = useState(1)
const [show, setShow] = useState(false)
const maximo = () => toast("No puedes agregas mas productos")
const minimo = () => toast("No puedes quitar mas productos")
const agregadoCarrito = (count) => toast(`sumaste ${count} productos`)
    const sumar = () => {
        count < stock ? setCount(count+1) : maximo()
        
    }
    function restar() {
        count > 1 ? setCount(count - 1) : minimo()
    }
    const agregar = () => {
        onAdd(count,setShow(true))
        agregadoCarrito(count)
    } 
return (
    <>{show? <div className="d-flex justify-content-center">
        <Link to="/" className="text-decoration-none">
            <button className='boton'>Continuar comprando</button>
            </Link>
        <Link to="/cart" className="text-decoration-none">
            <button className='boton'>Ir al carrito</button>
            </Link>
        </div>
    : <div>
        <div className="d-flex justify-content-center">
        <button className='boton' onClick={restar}>-</button>
        <h2 className='count'>{count}</h2>
        <button className='boton' onClick={sumar}>+</button>
        </div>
        
        <div className="d-flex">
        <button className='boton' onClick={agregar}>Agregar al carrito</button>
        </div>
        
        <ToastContainer />
        </div>
}
    
    </>
    
    
)
}

export default ItemCount;


