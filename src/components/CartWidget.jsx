
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {useCartContext} from './CartContext';

function CartWidget() {
/* const {getItemQty} = useCartContext() */


  return (
      <>
        <FontAwesomeIcon icon={faCartShopping}/>
        {/* {getItemQty()}   */}
      </>
    
  )
}

export default CartWidget