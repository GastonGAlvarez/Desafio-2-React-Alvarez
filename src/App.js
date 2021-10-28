import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidget/>
      </NavBar>
      <ItemListContainer greeting="Hola, saludos comprador! :D"/>
    </div>
  );
}

export default App;
