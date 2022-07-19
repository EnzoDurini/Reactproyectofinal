import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img}) => {
  return (  
  <div className="card center d-flex w-25 h-40 m-1">
  <img src={img} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body d-flex flex-column">
    <h2 className="card-title text-black  d-flex justify-content-center">{nombre}</h2>
    <h3 className="card-title text-black  d-flex justify-content-center">${precio}</h3>
    <Link className="text-decoration-none" to={`/producto/${id}`}><button className='boton'>Detalles</button></Link>
    
  </div>
</div>
    
    )
}

export default Item
