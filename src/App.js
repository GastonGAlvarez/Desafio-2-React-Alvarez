import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ItemCount/ItemCount.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Cart de prueba
const Cart = () =>{
  return (<p>Este es su carrito de compras</p>)
}


function App() {

  return (

    <BrowserRouter>
            <div className="App border border-3 border-primary">
                <NavBar />
                  <Routes>
                      <Route exact path='/products' element={<ItemListContainer/>} />                 
                      <Route exact path='/detail/:productID' element={ <ItemDetailContainer/>} />
                      <Route exact path='/cart' element={<Cart/>}/>
                  </Routes>     
            </div>
        </BrowserRouter>

)}

export default App;
