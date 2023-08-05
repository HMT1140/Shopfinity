
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './components/Main components/Navbar';
import Home from './components/Main components/Home';
import Shop from './components/Main components/Shop';
import Contactus from './components/Main components/Contactus'
import ShoppingCart from './components/Checkout/Shoppingcart'

import Productdetails from './components/Products/Productdetails';
import Select from './components/authentication/Select'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup';
import Checkoutprocess from './components/Checkout/Checkoutprocess';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path='/Shop' element={<Shop/>}></Route>
      </Routes>
      <Routes>
        <Route path='/Contactus' element={<Contactus/>}></Route>
      </Routes>
      <Routes>
        <Route path='/shoppingcart' element={<ShoppingCart/>}></Route>
      </Routes>
      <Routes>
        <Route path='/productdetails/:id' element={<Productdetails/>}></Route>
      </Routes>
      <Routes>
        <Route path='/select' element={<Select/>}></Route>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Routes>
        <Route path='/checkoutprocess' element={<Checkoutprocess/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
