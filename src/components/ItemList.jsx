import React from 'react'
import Item from './Item'

const ItemList = ({personajes}) => {
  return (
    <div>
        {personajes?.map(personaje => <Item id={personaje.id} nombre={personaje.title} descripcion={personaje.description} img={personaje.img} precio={personaje.price}/>)}
    </div>
  )
}

export default ItemList
