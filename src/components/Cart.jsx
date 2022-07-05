import { Link } from "react-router-dom"
import {useCartContext} from './CartContext';
import CartList from "./CartList";

function Cart() {
  const {emptyCart,getItemPrice,getItemQty} = useCartContext()
  return (

  <>
  <div className="card text-center">
  <div className="card-header">Carrito</div>
  <div className="card-body">
    <div>
    <h5 className="card-title">
      <div className="container">
  <div className="row align-items-start">
  <div className="col">
    Cantidad
    </div>
    <div className="col">
    Producto
    </div>
    <div className="col">
      Precio unitario
    </div>
    <div className="col">
      Precio total
    </div>
  </div>
  <div className="row align-items-start">
  <CartList/>
  </div>
  </div>
  </h5>
    <p className="card-text"></p>

    </div>
    <h3>Precio total: ${getItemPrice()}</h3>
    <h4>Cantidad total de productos: ${getItemQty()}</h4>
    <Link to="/checkout"><button>Finalizar compra</button></Link>
    <Link to="/"><button>Seguir comprando</button></Link>
    <button onClick={() => emptyCart()} >Vaciar carrito</button>
  </div>
</div>
  </>
    
  )
}

export default Cart