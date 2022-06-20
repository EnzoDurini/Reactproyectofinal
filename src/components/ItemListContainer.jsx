import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

function ItemListContainer() {
  const [loading, setLoading] = useState([true])
  const [personajes, setPersonaje] = useState([])

  
  useEffect(() => {
    const personajes = new Promise((res) => {
      setTimeout(() => {
          res(fetch('/data.json')
          .then(function(response) {
            return response.json()
          }));
      }, 0)
    })
    personajes
      .then((result) => {
        setPersonaje(result)})
      .catch(error => {console.error("Error",error)})
      .finally(()=>{
        setLoading(false);
      })

  }, [])

  return (
      <div>
        {loading? <h2 className='center'>Loading...</h2> :
        <ItemList personajes={personajes} />}
    </div>
    )}
    


export default ItemListContainer