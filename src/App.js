import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/productlist' element={<ProductList/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
