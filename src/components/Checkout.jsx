import {useState} from 'react'
import {useCartContext} from './CartContext';
import { addDoc,collection,getFirestore } from 'firebase/firestore';
export default function Checkout() {

const [cliente, setCliente] = useState('')
const [email, setEmail] = useState('')
const [cel, setCel] = useState('')
const [compra, setCompra] = useState(false)
const {cart,getItemPrice} = useCartContext()
const db= getFirestore()
const orderCollection = collection(db,'orders')


function handleClick(){
    const order = {
        buyer:{cliente,email,cel},
        items: cart,
        total: getItemPrice(),
    }
    //validar
    addDoc(orderCollection, order).then(({id})=>{setCompra(id)})

}

return (
    
        <div>
            {compra? (<h2> Gracias por su compra vuelvas prontos</h2>) : (
        <div> <h1> Ultimo paso para finalizar su compra </h1>
     <h3>Datos personales</h3>
     <input onChange={(e)=> setCliente(e.target.value)} placeholder= "Ingrese su nombre" />
     <input onChange={(e)=> setEmail(e.target.value)} placeholder= "Ingrese su email" />
     <input onChange={(e)=> setCel(e.target.value)} placeholder= "Ingrese su cel" />
     <button onClick={() => handleClick()}>Comprar!</button>
     </div>)
        }
    </div>
     
)
}

