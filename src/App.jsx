import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./routes/home.routes";
import Collection from "./routes/collection.routes";
import Wallet from "./routes/wallet.routes";

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
