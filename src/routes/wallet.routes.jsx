import { useContext, useEffect } from "react";
import { WalletContext } from "../context/walletContext";
import { useNavigate } from "react-router-dom";
import { use } from "react";

const Wallet = () => {
  const { isWalletConnected, connectWallet } = useContext(WalletContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isWalletConnected) {
      navigate("/");
    }
  }, [isWalletConnected, navigate]);

  return (
    <div className="h-screen bg-[#E6E9F2] flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-extrabold text-[#2D2D2D] mb-[90px]">
        Choose the wallet to connect
      </h1>

      <div className="grid grid-cols-3 gap-4 h-[174px]">
        {/* Example wallet options */}
        <button
          onClick={connectWallet}
          className="w-[191px] px-6 py-3 bg-[#3B3B3B] text-white rounded-lg hover:bg-[#555] transition duration-300"
        >
          MetaMask
        </button>
        <button
          onClick={connectWallet}
          className="w-[191px] px-6 py-3 bg-[#3B3B3B] text-white rounded-lg hover:bg-[#555] transition duration-300"
        >
          WalletConnect
        </button>
        <button
          onClick={connectWallet}
          className="w-[191px] px-6 py-3 bg-[#3B3B3B] text-white rounded-lg hover:bg-[#555] transition duration-300"
        >
          Exodus
        </button>
      </div>
    </div>
  );
};

export default Wallet;
