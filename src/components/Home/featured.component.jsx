import { useContext } from "react";

import { ArtistImage, WithTheStars } from "../../utils/images";

import { CartContext } from "../../context/CartContext";

const FeaturedComponent = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = {
      id: 2,
      image: WithTheStars,
      title: "With the stars",
      price: "0.12 BTC",
    };
    addToCart(item);
  };

  return (
    <>
      {/* <section>
        <ProgressBar />
      </section> */}
      <section className="bg-[#E6E9F2]  h-auto lg:h-[518px] align-elements rounded-[30px] p-6 lg:p-[74px]">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-full gap-6 lg:gap-0">
          <div className="text-center lg:text-left">
            <label className="bg-[#FADFE4] py-[9px] px-[35px] rounded-[49px]">
              Trending Now
            </label>
            <p className="text-[#617587] text-[18px] lg:text-[24px] leading-[29px] font-[400] mt-[20px] lg:mt-[37px]">
              Night sky collection
            </p>
            <h1 className="text-[32px] lg:text-[64px] font-[800] leading-[40px] lg:leading-[77.45px]">
              With the stars
            </h1>
            <div className="flex items-center gap-4 justify-center lg:justify-start mt-6">
              <img
                src={ArtistImage}
                alt="Artist image"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="text-start">
                <small className="text-[12px] text-[#617587]">Artist</small>
                <p className="text-[18px] lg:text-[24px] leading-[22px] lg:leading-[29.05px]">
                  Léa Jacquot
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[16px] mt-[30px] lg:mt-[58px]">
              <button
                onClick={handleAddToCart}
                className="rounded-[87px] bg-[#23252B] w-full lg:w-[248px] h-[50px] lg:h-[67px] flex justify-center items-center text-white"
              >
                Buy
              </button>
              <button className="rounded-[87px] border-[1px] border-[#23252B] w-full lg:w-[248px] h-[50px] lg:h-[67px] flex justify-center items-center text-[#23252B]">
                See collection
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[437px] h-[250px] sm:h-[300px] lg:h-[411px]">
            <img
              src={WithTheStars}
              alt="Night sky collection image"
              className="w-full h-full object-cover rounded-[52px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedComponent;
