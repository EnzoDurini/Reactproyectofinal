import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

function ItemListContainer() {
  const [loading, setLoading] = useState([true])
  const [personajes, setPersonaje] = useState([])


  useEffect(() => {
    const personajes = new Promise((res) => {
      setTimeout(() => {
        res(
          [
            { id: 1, title: 'Luffy', description: 'Rol: Captain Fruit: Akuma no Mi', price: 15000, img: '/assets/luffy.jfif' },
            { id: 2, title: 'Zoro', description: 'Rol: Vice Fruit: none', price: 3200, img: '/assets/zoro.jfif' },
            { id: 3, title: 'Sanji', description: 'Rol: Cooker Fruit:none', price: 3300, img: '/assets/sanji.jfif' },
            { id: 4, title: 'Nami', description: 'Rol: Navigator Fruit:none', price: 660, img: '/assets/nami.jfif' },
            { id: 5, title: 'Robbin', description: 'Rol: Archaeologist Fruit: Hana Hana no Mi', price: 1300, img: '/assets/robbin.jfif' },
            { id: 6, title: 'Usopp', description: 'Rol: Sniper Fruit: none ', price: 2000, img: '/assets/usopp.jfif' },
            { id: 7, title: 'Franky', description: 'Rol: Shipwright Fruit: none', price: 940, img: '/assets/franky.jfif' },
            { id: 8, title: 'Brook', description: 'Rol: Musician Fruit: Yomi Yomi no mi', price: 830, img: '/assets/brook.jfif' },
            { id: 9, title: 'Chopper', description: 'Rol: Doctor Fruit: Hito Hito no Mi', price: 1, img: '/assets/chopper.jfif' }
          ])
      }, 2000)
    })
    personajes
      .then((result) => {
        setPersonaje(result)
      })
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