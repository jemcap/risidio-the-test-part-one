import { useContext } from "react";
import { Link } from "react-router-dom";
import { WalletContext } from "../../context/walletContext";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/cart.component";

const Navbar = () => {
  const { isWalletConnected } = useContext(WalletContext);
  const { isCartOpen, openCart, closeCart } = useContext(CartContext);
  return (
    <nav>
      <div className="flex justify-between items-center my-[33px] align-elements bg-transparent ">
        <Link to="/">
          <h1 className="text-3xl font-bold uppercase">Marketplace.</h1>
        </Link>

        {!isWalletConnected ? (
          <Link
            to="wallet"
            className="btn btn-primary border-[1px] border-black py-[24px] px-[42px] rounded-full"
          >
            Connect Wallet
          </Link>
        ) : (
          <>
            <button
              onClick={openCart}
              className="btn btn-primary border-[1px] border-black py-[24px] px-[42px] rounded-full"
            >
              Account
            </button>
            {isCartOpen && <Cart closeCart={closeCart} />}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
