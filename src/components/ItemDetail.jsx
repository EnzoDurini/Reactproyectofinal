import ItemCount from './ItemCount';
import {useCartContext} from './CartContext'




const ItemDetail = ({personaje}) => {
  const {id,img,title,description,category,fruit,price,stock} = personaje

  const {isInCart ,addItem} = useCartContext()
  

  const onAdd = (count) => {
    isInCart(id)
    addItem({...personaje,qty:count})
    
  }
  


  return (
<div className="card center">
  <img src={img} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h3 className="card-title text-black  d-flex justify-content-center">{title}</h3>
    <p className="card-text text-black d-flex justify-content-center">{description}</p>
    { category === "sinfruta"? <p></p>
    : <p className="card-text text-black d-flex justify-content-center">Poder : {fruit}</p>
    }
    
    <h3 className="text-black d-flex justify-content-center">${price}</h3>
    <h4 className= "d-flex justify-content-center"> Stock: {stock} </h4>
    <br />
    <ItemCount stock={stock} onAdd={onAdd} />
  </div>
</div>  
    
    )
}

export default ItemDetail
