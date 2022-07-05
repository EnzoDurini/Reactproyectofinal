
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {useCartContext} from './CartContext';
import { Link } from 'react-router-dom';


function CartWidget() {
const {getItemQty, cart} = useCartContext()


  return (
      <> <Link to= "/cart"><FontAwesomeIcon icon={faCartShopping}/>
      {cart.length > 0 && <span>{getItemQty()}</span>} </Link>
        
      </>
    
  )
}

export default CartWidget