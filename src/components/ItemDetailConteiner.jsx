import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc,getDoc,getFirestore} from 'firebase/firestore';

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
    <div>
      {loading ? (
        <h2 className="center">Loading...</h2>
      ) : (
        <ItemDetail personaje={personaje} />
      )}
    </div>
  );
}

export default ItemDetailConteiner;