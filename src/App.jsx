import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./routes/Home";
import Collection from "./routes/Collection";
import Wallet from "./routes/Wallet";

import { WalletProvider } from "./context/walletContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <WalletProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/collection/:id" element={<Collection />} />
              <Route path="/wallet" element={<Wallet />}></Route>
            </Route>
          </Routes>
        </CartProvider>
      </WalletProvider>
    </BrowserRouter>
  );
}

export default App;
