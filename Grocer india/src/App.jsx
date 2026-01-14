import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./starpage/Home";
import Products from "./starpage/Products";
import Cart from "./starpage/Cart";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import Footer from "./components/Footer.jsx";
import Checkout from "./starpage/Checkout";
import OrderSuccess from "./starpage/OrderSuccess";
import ForgotPassword from "./auth/ForgotPassword.jsx";
import ResetPassword from "./auth/ResetPassword.jsx";




function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<Signup />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/reset" element={<ResetPassword />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
