import React from 'react'
import Item from './Item'
import "./ItemList.css"
const ItemList = ({personajes}) => {
  return (
    <div className='gridAuto'>
        {personajes?.map(personaje => <Item key={personaje.id} id={personaje.id} nombre={personaje.title} img={personaje.img} precio={personaje.price}/>)}
    </div>
  )
}

export default ItemList
