import React from 'react'

const ItemDetail = ({personaje}) => {
  const {img,title,description,fruit,price} = personaje 
  console.log(personaje.img);

  return (
  <div className="card center" style={{width: "18rem", margin: 20}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-black">{title}</h5>
    <p className="card-text text-black">{description}</p>
    <p className="card-text text-black">{fruit}</p>
    <h3 className="card-body text-black">${price}</h3>
  </div>
</div>
    
    )
}

export default ItemDetail
