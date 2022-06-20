import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailConteiner() {
  const { productId } = useParams();
  const [loading, setLoading] = useState([true]);
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    const perdb = new Promise((res) => {
          res(
            fetch("/data.json")
              .then(function(response) {
                return response.json()
            }));
    });
    perdb
      .then((result) => {
        setPersonaje(result.find(e => e.id == productId))
      })
      .catch((error) => {
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