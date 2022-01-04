import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './CartContext/CartContext';
import Cart from './components/Cart/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ItemCount/ItemCount.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
              <div className="App">
                  <NavBar />
                    <Routes>
                      <Route exact path='/' element={<ItemListContainer/>} />
                        <Route exact path='/category/:categoryID' element={<ItemListContainer/>} />
                        <Route exact path='/detail/:productID' element={ <ItemDetailContainer/>} />
                        <Route exact path='/cart' element={<Cart/>}/>
                    </Routes>     
              </div>
      </BrowserRouter>
    </CartContextProvider>

)}

export default App;
