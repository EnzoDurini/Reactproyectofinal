import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Error from './components/Error';
import Cart from './components/Cart';
import { CartContextProvider } from './components/CartContext';
import Checkout from './components/Checkout';


function App() {


  return (
  <div>
  <BrowserRouter>
  <CartContextProvider>
  <Navbar/>
  <Routes>
    <Route path="/" element = {<ItemListContainer/>} />
    <Route path="/home" element = {<ItemListContainer/>}/>
    <Route exact path="/products" element = {<ItemListContainer/>}/>
    <Route exact path="/products/:categoriaId" element = {<ItemListContainer/>}/>
    <Route exact path= "/producto/:productId" element = {<ItemDetailConteiner/>}/>
    <Route exact path="/cart" element = {<Cart/>} />
    <Route exact path="/checkout" element= {<Checkout/>}/>
    <Route path="*" element = {<Error/>}/>
    
  </Routes>
  </CartContextProvider>
  </BrowserRouter>
  
  </div>
    
  )
}

export default App