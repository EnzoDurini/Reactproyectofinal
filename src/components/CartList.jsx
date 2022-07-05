import {useCartContext} from './CartContext';




const CartList = () => {
  

    const {deleteItem, cart} = useCartContext()
  return <div>
      {cart?.map(personaje => 
                        <div key={personaje.id} className='border border-secondary py-3 d-flex align-items-center'>
                          <div className='col-3'>{personaje.qty}</div>
                            <div className='col-3'>Producto: {personaje.title}</div>
                            <div className='col-3'>${personaje.price} </div>
                            <div className='col-3'>${personaje.price*personaje.qty}</div>
                            <div className='col-3'><button onClick={() => deleteItem(personaje.id)} variant="outline-danger">Borrar</button></div>
                        </div>
                )}
  </div>;
};

export default CartList;