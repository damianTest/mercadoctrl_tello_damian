
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <NavBar/>
       {/* <ItemListContainer props = 'greeting'/> */}
       <Routes>
         <Route path='/' element={<ItemListContainer/>}></Route>
         <Route path='/categoria/:categoriaid' element={<ItemListContainer/>} ></Route>
         <Route path='/linea/:productoid' element={ <ItemDetailContainer />}></Route>
         <Route path='/cart/' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
