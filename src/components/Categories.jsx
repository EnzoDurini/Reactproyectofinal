import {useState, useEffect} from 'react'
import { collection,getDocs,getFirestore } from 'firebase/firestore'
import {Link} from 'react-router-dom';

export default function Categories() {

    const [category,setCategory] = useState ([])

    useEffect(() => {
        const db= getFirestore()
        const categoryCollection = collection(db, 'category')
        getDocs(categoryCollection).then((snapshot) =>{
            setCategory(snapshot.docs.map((doc)=> doc.data()))
        })

    },[])

  return (
  <>
    {category.map((categoria) => (
        <li className='nav-item' key={categoria.title}>
        <Link className='nav-link' to={'/products/' + categoria.title}>{categoria.label}</Link>
    </li>
    ))}
  </>
  )}

