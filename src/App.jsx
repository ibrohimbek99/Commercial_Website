import Assortment from "./pages/Assortment";
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom';
import React from 'react'

function App(){
  return(
    <Router>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Assortment">Assortment</Link>
      

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart/>}/>
           <Route path="/Product" element={<Product/>}/>
           <Route path="/Assortment" element={<Assortment/>}/>       
        </Routes>
        
    
    </Router>
  );
}
export default App;