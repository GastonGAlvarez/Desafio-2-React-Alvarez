import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ItemCount/ItemCount.css';

function App() {

  return (
    <div className="App">
      <NavBar>
        <CartWidget/>
      </NavBar>
      <ItemListContainer greeting="Hola, saludos comprador! :D"/>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
