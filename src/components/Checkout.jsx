import {useState} from 'react'
import {useCartContext} from './CartContext';
export default function Checkout() {

const [cliente, setCliente] = useState('')
const [email, setEmail] = useState('')
const [cel, setCel] = useState('')
const {cart,getItemPrice} = useCartContext()

function handleClick(){
    const order = {
        buyer:{cliente,email,cel},
        items: cart,
        total: getItemPrice(),
    }
    console.log(order)
}

return (
    <div> <h1> Ultimo paso para finalizar su compra </h1>
    <h3>Datos personales</h3>
    <input onChange={(e)=> setCliente(e.target.value)} placeholder= "Ingrese su nombre" />
    <input onChange={(e)=> setEmail(e.target.value)} placeholder= "Ingrese su email" />
    <input onChange={(e)=> setCel(e.target.value)} placeholder= "Ingrese su cel" />
    <button onClick={() => handleClick()}>Comprar!</button>
    </div>
)
}

