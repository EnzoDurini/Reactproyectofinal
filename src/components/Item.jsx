import React from 'react'

const Item = (personaje) => {
    const{nombre,descripcion,precio,img} = personaje
  return (
  <div style={{display:'flex', flexWrap:'wrap'}}>
  <div class="card center" style={{width: "18rem", margin: 20}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{nombre}</h5>
    <p class="card-text">{descripcion}</p>
    <a href="#" class="btn btn-primary">${precio}</a>
    <a href="#" class="btn btn-primary">Mas informacion</a>
  </div>
</div>
</div>
    
    )
}

export default Item
