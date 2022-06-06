import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {

  const onAdd = (count) => {

    alert (`sumaste ${count} productos`) ;

  }

  return (
  <>
    <Navbar/>
    <ItemListContainer gracias={'Hola gracias por pasarte'}/>;
    <ItemCount initial={1} max={10} onAdd={onAdd} />;
  </>
    
  );
}

export default App;