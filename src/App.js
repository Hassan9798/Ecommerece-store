import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Product from './pages/Product';
import { useSelector } from 'react-redux';
function App() {
  const user=useSelector(state=>state.user.loggedInUser);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={user?(<Navigate replace to='/'/>) :(<Login/>)} />
        <Route path='/register' element={user?(<Navigate replace to='/'/>) :(<Register/>)} />
        <Route path='/products/:category' element={<ProductList/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
