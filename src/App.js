/* eslint-disable react/jsx-pascal-case */
import React from "react";
import './App.css';
import Navbar from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from './pages';
import About from './pages/aboutus';
import SignUp from './pages/signup';
import SignIn from './pages/login';
import SBP from "./pages/shop by genre";
import MyAccount from "./pages/My account";
import ProductDetail from "./pages/product detail";
//import SearchBar from "./components/searchbar";
import Product_page from "./pages/products page";
import Cart from "./pages/cart";
import Contact from "./pages/contact us";
import TrackOrder from "./pages/track order";
import OrderSummary from "./pages/order summary";
import { CartProvider } from "react-use-cart";
import Footer from "./components/Navigation/footer/footer";

function App() {
  return (
    <CartProvider>
    <Router >
      <Navbar />
      {/*<SearchBar/>*/}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/shop-by-genre" element={<SBP/>} />
        <Route path="/product_page" element={<Product_page/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact_us" element={<Contact/>}/>
        <Route path="/track_order" element={<TrackOrder/>}/>
        <Route path="/order_history" element={<OrderSummary/>}/>
        <Route path="/myaccount" element={<MyAccount/>}/>
        <Route path="/productdetail" element={<ProductDetail/>}/>
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  );
}

export default App;