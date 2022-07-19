import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc,getDoc,getFirestore} from 'firebase/firestore';
import carga from '../assets/carga.gif';

function ItemDetailConteiner() {
  const { productId } = useParams();
  const [loading, setLoading] = useState([true]);
  const [error,setError] = useState([false]);
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db,'productos', productId);
    getDoc(productRef).then((snapshot) =>{
      setPersonaje({...snapshot.data(), id: snapshot.id})
      
    })
      .catch((error) => {
        setError(error)
        console.error("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="d-flex justify-content-center ">
      {loading ? (
          <div className="d-flex"><img src={carga} frameBorder="0" height="500px" width="500px"/></div>
        
      ) : (
        <ItemDetail personaje={personaje} />
      )}
    </div>
  );
}

export default ItemDetailConteiner;