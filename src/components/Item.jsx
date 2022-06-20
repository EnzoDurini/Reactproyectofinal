import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img}) => {
  return (
  <div style={{display:'flex', flexWrap:'wrap'}}>
  <div className="card center" style={{width: "18rem", height:"18rem", margin: 10}}>
  <img src={img} className="card-img-top" style={{width: "18rem", height:"18rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <h6 className="btn btn-primary">${precio}</h6>
    <Link className="btn btn-primary" to={`/producto/${id}`}>Detalles</Link>
  </div>
</div>
</div>
    
    )
}

export default Item
