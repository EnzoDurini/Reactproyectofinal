import './App.css';
import "./components/ItemList.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Error from './components/Error';
import Cart from './components/Cart';
import { CartContextProvider } from './components/CartContext';

function App() {
  return (
  <>
  <BrowserRouter>
  <CartContextProvider>
  <Navbar/>
  <Routes>
    <Route path="/" element = {<ItemListContainer/>} />
    <Route path="/home" element = {<ItemListContainer/>}/>
    <Route exact path="/contact" element = {<Contact/>} />
    <Route exact path="/products" element = {<ItemListContainer/>}/>
    <Route exact path="/products/:categoriaId" element = {<ItemListContainer/>}/>
    <Route exact path= "/producto/:productId" element = {<ItemDetailConteiner/>}/>
    <Route exact path="/aboutus" element = {<AboutUs/>} />
    <Route exact path="/cart" element = {<Cart/>} />
    <Route path="*" element = {<Error/>}/>
  </Routes>
  <Footer/>
  </CartContextProvider>
  </BrowserRouter>
  
  </>
    
  )
}

export default App