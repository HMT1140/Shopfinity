
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
import Sidebar from './components/Main components/Sidebar';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Sidebar/>
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
    </div>
    </Router>
  );
}

export default App;
