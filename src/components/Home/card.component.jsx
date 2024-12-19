import React from "react";
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/helpers";

const Card = ({
  id,
  image,
  title,
  price,
  description,
  tags,
  artist,
  artistImage,
}) => {
  return (
    <div className="max-w-[424px] max-h-[529px] rounded-[47px] overflow-hidden shadow-2xl">
      <div className="w-full h-[227px] relative group">
        <Link to={`/collection/${id}`}>
          <img
            className="w-full h-full object-cover p-4 flex justify-center items-center rounded-[47px] group-hover:brightness-50 transition-all duration-300"
            src={image}
            alt={title}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="flex items-center p-6 w-[248px] h-[67px] text-[16px] justify-center bg-[#FAFAFA] text-black rounded-full">
              <span>Go to collection</span>
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
      <div className="px-7 mt-6">
        <div className="flex justify-between items-center mb-[29px]">
          <h2 className="font-bold text-2xl">{title}</h2>
          <span className="flex py-[9px] text-[12px] px-[35px] bg-[#E1EDD9] justify-center items-center rounded-[49px]">
            {tags}
          </span>
        </div>
        <small className="text-[14px] text-[#617587] leading-[16.94px]">
          Price Range: {price}
        </small>
        <p className="text-gray-700 text-base">
          {truncateText(description, 75)}{" "}
        </p>
      </div>

      <div className="px-7 my-[38px] flex items-center gap-3">
        <img
          src={artistImage}
          alt="Artist Léa Jacquot"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <small className="text-[12px] text-[#617587] leading-[14.52px]">
            Artist
          </small>
          <p className="text-[16px] leading-[19.36px] font-[400]">{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
