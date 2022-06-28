import {useState} from 'react'
import ItemCount from './ItemCount';
import {useCartContext} from './CartContext'
import { Link } from 'react-router-dom';


const ItemDetail = ({personaje}) => {
  const {id,img,title,description,fruit,price,stock} = personaje 
  console.log(personaje.img);

  const {isInCart ,addItem} = useCartContext()

  const onAdd = (count) => {

    alert (`sumaste ${count} productos`) ;
    isInCart(id)
    addItem({...personaje,qty:count})

  }
  
  const [show, setShow] = useState(false)

  return (
  <div className="card center" style={{width: "18rem", margin: 20}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-black">{title}</h5>
    <p className="card-text text-black">{description}</p>
    <p className="card-text text-black">{fruit}</p>
    <h3 className="card-body text-black">${price}</h3>
    <h4 className= "card-body"> Stock: {stock} </h4>
    <br />
    {show? <div>
      <Link to="/"><button>Continuar compra</button></Link>
      <Link to="/cart"><button>Ir al carrito</button></Link>
    </div>
    : <ItemCount stock={stock} onAdd={onAdd} />}
  </div>
</div>
    
    )
}

export default ItemDetail
