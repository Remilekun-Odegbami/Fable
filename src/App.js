import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import SingleProduct from "./components/Products/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
