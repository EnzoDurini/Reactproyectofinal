import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection,getDocs,query,where, getFirestore} from 'firebase/firestore';
import carga from '../assets/carga.gif'

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
        setLoading();
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
  
  <div className= "d-flex align-content-center justify-content-around bg-black text-white-m">
  <div className="col-12 col-m-4">
        {loading? <div className="d-flex"><img src={carga}  frameBorder="0" height="500px" width="500px"/></div> :
        <ItemList personajes={personajes} />}
    </div>
    </div>
  </>
      
    )}