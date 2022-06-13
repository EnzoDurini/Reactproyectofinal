import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailConteiner() {
    const [loading, setLoading] = useState([true])
    const [personajes, setPersonaje] = useState([])

    useEffect(() => {
    const personajes = new Promise((res) => {
        setTimeout(() => {
        res([{id: 1, title: 'Luffy', description: 'Rol: Captain Fruit: Akuma no Mi', price: 15000, img: '/assets/luffy.jfif'}])
        }, 2000)
    })
    personajes
        .then((result) => {
        setPersonaje(result)
        })
        .catch(error => {console.error("Error",error);})
        .finally(()=>{
        setLoading(false);
        })
    }, [])

    return (
        <div>
            {loading? <h2 className='center'>Loading...</h2> : personajes?.map(personaje => <ItemDetail id={personaje.id} nombre={personaje.title} descripcion={personaje.description} img={personaje.img} precio={personaje.price}/>)}
        </div>
    )}


export default ItemDetailConteiner