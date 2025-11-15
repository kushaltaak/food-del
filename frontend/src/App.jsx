import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* ✅ Login popup (conditionally visible) */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        {/* 🧭 Navbar */}
        <Navbar setShowLogin={setShowLogin} />

        {/* 📌 Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
         <Route path="/verify" element={<Verify/>}/>
         <Route path="/myorders" element={<MyOrders/>}/>
        </Routes>
      </div>

      {/* 📱 App Download section + Footer */}
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
