import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget({numero}) {
  return (
      <>
        <FontAwesomeIcon icon={faCartShopping}/>
        {numero}  
      </>
    
  )
}

export default CartWidget