import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WalletContext } from "../../context/walletContext";

const NftCard = ({ id, image, title, price }) => {
  const { addToCart } = useContext(CartContext);
  const { isWalletConnected } = useContext(WalletContext);

  const handleAddToCart = () => {
    const item = { id, image, title, price };
    addToCart(item);
  };
  return (
    <div className="max-w-[424px] max-h-[498px] rounded-[47px]  overflow-hidden shadow-2xl">
      <div className="w-full relative group">
        <img
          className="w-full h-[345px] object-cover p-4 flex justify-center items-center rounded-[47px] group-hover:brightness-50 transition-all duration-300"
          src={image}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {!isWalletConnected ? (
            <Link
              to="/wallet"
              className="flex items-center p-6 w-[248px] h-[67px] text-[16px] justify-center bg-[#FAFAFA] text-black rounded-full"
            >
              <span>Buy</span>
              <svg
                width="24"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="ml-2  flex justify-center"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </Link>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex items-center p-6 w-[248px] h-[67px] text-[16px] justify-center bg-[#FAFAFA] text-black rounded-full"
            >
              <span>Buy</span>
              <svg
                width="24"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="ml-2  flex justify-center"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-16 mt-[45px] px-[21px]">
          <h2 className="font-bold text-2xl">{title}</h2>
          <span className="flex py-[9px] text-[12px] px-[35px] bg-[#D4D3EB] justify-center items-center rounded-[49px]">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
