import React from 'react'
import Item from './Item'

const ItemList = ({personajes}) => {
  return (
      <div className="d-flex justify-content-between flex-wrap container ">
        {personajes?.map(personaje => <Item key={personaje.id} id={personaje.id} nombre={personaje.title} img={personaje.img} precio={personaje.price}/>)}
    </div>
    
  )
}

export default ItemList
