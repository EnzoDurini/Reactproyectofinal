import './App.css';
import "./components/ItemList.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import CartWidget from './components/CartWidget';
import Footer from './components/Footer';
import ItemDetailConteiner from './components/ItemDetailConteiner';


function App() {

  const onAdd = (count) => {

    alert (`sumaste ${count} productos`) ;

  }

  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element = {<ItemListContainer/>} />
    <Route path="/home" element = {<ItemListContainer/>}/>
    <Route path="/contact" element = {<Contact/>} />
    <Route path="/products" element = {<ItemListContainer/>}/>
    <Route path="/products/:categoriaId" element = {<ItemListContainer/>}/>
    <Route path= "/producto/:productId" element = {<ItemDetailConteiner/>}/>
    <Route path="/aboutus" element = {<AboutUs/>} />
    <Route path="/cart" element = {<CartWidget/>} />
    
  
  </Routes>
  <Footer/>
  </BrowserRouter>
    <ItemCount initial={1} max={10} onAdd={onAdd} />
  </>
    
  )
}

export default App