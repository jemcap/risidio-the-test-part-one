import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProjectCollection = () => {
  const { id } = useParams();
  const { cardCollections } = useContext(CartContext);

  const collection = cardCollections.find((card) => card.id === parseInt(id));

  if (!collection) {
    return <p>Collection not found</p>;
  }
  const { image, title, description, artist, artistImage } = collection;

  return (
    <section className="h-auto lg:h-[518px] align-elements rounded-[30px] p-6 lg:p-[74px]">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-full gap-6 lg:gap-0">
        <div className="text-center lg:text-left">
          <label className="bg-[#FADFE4] py-[9px] px-[35px] rounded-[49px] text-[12px]">
            Trending Now
          </label>
          <p className="text-[#617587]  text-[18px] lg:text-[24px] leading-[29px] font-[400] mt-[37px]">
            Collection
          </p>
          <h1 className="text-[32px] lg:text-[64px] font-[800] leading-[77.45px]">
            {title}
          </h1>
          <p className="text-[#23252B] text-center lg:text-left text-[16px] leading-[36.32px] w-full lg:w-[630px] mt-[12px]">
            {description}
          </p>
          <div className="flex items-center gap-4 justify-center lg:justify-start mt-[29px]">
            <img src={artistImage} alt="Artist image" width={68} height={68} />
            <div className="text-start">
              <small className="text-[12px] text-[#617587]">Artist</small>
              <p className="text-[24px] leading-[29.05px]">{artist}</p>
            </div>
          </div>
        </div>
        <div className="w-3xl h-4xl lg:w-[437px] lg:h-[411px]">
          <img
            src={image}
            alt="Night sky collection image"
            className="w-full h-full object-cover rounded-[52px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectCollection;
