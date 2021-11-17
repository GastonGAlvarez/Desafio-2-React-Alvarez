import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ItemCount/ItemCount.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (

    <BrowserRouter>
            <div className="App border border-3 border-primary">
                <NavBar />
                  <Routes>
                      <Route exact path='/products' element={<ItemListContainer/>} />                 
                      <Route exact path='/detail/:productID' element={ <ItemDetailContainer/>} />
                  </Routes>     
            </div>
        </BrowserRouter>

)}

export default App;
