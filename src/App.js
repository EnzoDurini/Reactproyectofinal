import './App.css';
import "./components/ItemList.css"
import ItemCount from './components/ItemCount';
/* import ItemListContainer from './components/ItemListContainer'; */
import Navbar from './components/Navbar';
import ItemDetailConteiner from './components/ItemDetailConteiner';

function App() {

  /* const onAdd = (count) => {

    alert (`sumaste ${count} productos`) ;

  } */

  return (
  <>

    <Navbar/>
    <ItemDetailConteiner/>
    {/* <ItemListContainer/>; */}
    {/* <ItemCount initial={1} max={10} onAdd={onAdd} />; */}
  </>
    
  );
}

export default App;