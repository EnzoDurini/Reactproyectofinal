import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

function ItemListContainer() {
  const [loading, setLoading] = useState([true])
  const [personajes, setPersonaje] = useState([])
  const { categoriaId } = useParams();
  
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
        if(categoriaId === undefined){
          setPersonaje(result)
        } else if (categoriaId === "sinFruta"){
          setPersonaje(result.filter(e => e.category === false))
        } else if (categoriaId === "conFruta"){
          setPersonaje (result.filter(e => e.category === true))}
        else{alert("No exite esta categoria")}
        
          })
        
      .catch(error => {console.error("Error",error)})
      .finally(()=>{
        setLoading(false);
      })

  }, [categoriaId])

  return (
      <div>
        {loading? <h2 className='center'>Loading...</h2> :
        <ItemList personajes={personajes} />}
    </div>
    )}
    


export default ItemListContainer