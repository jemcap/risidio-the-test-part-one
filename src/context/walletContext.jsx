import { createContext, useContext, useEffect, useState } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(
    localStorage.getItem("isWalletConnected") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isWalletConnected", isWalletConnected);
  }, [isWalletConnected]);

  const connectWallet = () => {
    setIsWalletConnected(true);
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
  };

  return (
    <WalletContext.Provider
      value={{
        isWalletConnected,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
