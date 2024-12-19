import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = ({ closeCart }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  console.log(cartItems);

  return (
    <>
      <div className="fixed top-0 right-0 w-[200px] lg:w-[459px] h-[981px] z-50">
        <div className="fixed top-0 right-10 w-[200px] lg:w-[459px] h-[981px] bg-[#D4D4D43B]/40 backdrop-blur-md z-0 rounded-[21px] m-2">
          <button onClick={closeCart} className="float-left py-10 pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 4l8 8-8 8M13 4l8 8-8 8"
              />
            </svg>
          </button>
        </div>
        <div className="fixed top-0 right-0 bg-white w-[200px] lg:w-[459px] h-[981px] py-[26px] px-[26px] rounded-[21px] border-2 border-black z-10 m-2">
          <div className="flex items-center gap-3 mb-16">
            <div className="h-[50px] w-[50px] rounded-full bg-slate-700"></div>
            <p>STV6Q...4Z7WD</p>
          </div>
          <div className="mb-24">
            <small className="text-[14px] text-[#7B7B7B]">In your wallet</small>
            <h1 className="text-[#02071D] text-[36px] font-[600]">0.129 BTC</h1>
          </div>
          <div>
            <h3 className="text-[#000000] text-[24px] font-[800]">Your NFTs</h3>
          </div>

          <div className="flex flex-col justify-between">
            {cartItems.length === 0 ? (
              <div className="flex h-96 flex-col items-center justify-center">
                <h4 className="text-[#617587] text-[24px] font-[400]">
                  You don't own any NFTs yet
                </h4>
                <div className="flex items-center justify-center mt-20">
                  <Link
                    to="/"
                    className="btn btn-primary flex justify-center items-center bg-[#23252B] w-[170px] h-[40.5px] lg:w-[248px] lg:h-[67px] rounded-[87px] text-white"
                  >
                    Start shopping
                  </Link>
                </div>
              </div>
            ) : (
              cartItems.map((item) => {
                const { id, image, title, price } = item;
                return (
                  <div
                    key={id}
                    className="flex flex-col-reverse lg:flex-row justify-between mb-5"
                  >
                    <div className="flex flex-col justify-between">
                      <div className="flex-row">
                        <h4 className="text-[#617587] text-[15px] lg:text-[24px] font-[400]">
                          {title}
                        </h4>
                        <p className="text-[#617587] text-[15px] lg:text-[24px] font-[400]">
                          {price}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => removeFromCart(id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div>
                      <img
                        src={image}
                        alt={title}
                        className="w-[150px] h-[150px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                );
              })
            )}

            {cartItems.length > 0 && (
              <div className="w-full flex justify-center">
                <button className="btn btn-primary bg-[#23252B] text-white w-[248px] h-[67px] rounded-[87px]">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
