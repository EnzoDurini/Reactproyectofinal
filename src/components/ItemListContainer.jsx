import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection,getDocs,query,where, getFirestore} from 'firebase/firestore';


export default function ItemListContainer() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [personajes, setPersonaje] = useState([])
  const { categoriaId } = useParams();
  
  useEffect(() => {
    const db= getFirestore();
    const personajesCollection = collection(db,'productos')

    if(categoriaId){
      const categoria= query(personajesCollection, where("category","==",categoriaId))

      getDocs(categoria).then((snapshot) => {
        setPersonaje(snapshot.docs.map((doc)=>({...doc.data(),id: doc.id }))
        )
      }).catch((error) => {setError(error)
      }).finally(()=>{
        setLoading(false);
      })
    }
    else {
      getDocs(personajesCollection)
      .then((snapshot) => {
        setPersonaje(snapshot.docs.map((doc)=>({...doc.data(),id: doc.id })))
      })
      .catch((error) => {setError(error);}
      ).finally(() => {
        setLoading(false);
      })
      }},[categoriaId]);

  return (<>
  <div>
        {loading? <h2 className='center'>Loading...</h2> :
        <ItemList personajes={personajes} />}
    </div>
  </>
      
    )}