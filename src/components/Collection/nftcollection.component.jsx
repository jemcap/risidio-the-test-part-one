import React from "react";
import NftCard from "./nftcardcollection.component";
import {
  NightSkyThumbnail,
  WithTheStars,
  SummerThumbnail,
  QuietThumbnail,
  TravelThumbnail,
  TheRainThumbnail,
} from "../../utils/images";

const cardCollections = [
  {
    id: 1,
    image: NightSkyThumbnail,
    title: "Night is coming",
    price: "0.12 BTC",
  },
  {
    id: 2,
    image: WithTheStars,
    title: "With the stars",
    price: "0.12 BTC",
  },
  {
    id: 3,
    image: SummerThumbnail,
    title: "Summer",
    price: "0.12 BTC",
  },
  {
    id: 4,
    image: QuietThumbnail,
    title: "Quiet",
    price: "0.14 BTC",
  },
  {
    id: 5,
    image: TravelThumbnail,
    title: "Travel",
    price: "0.12 BTC",
  },
  {
    id: 6,
    image: TheRainThumbnail,
    title: "The rain",
    price: "0.18 BTC",
  },
];

const NftCollection = () => {
  return (
    <section className="mb-[94px] align-elements rounded-[30px]">
      <div className="mt-24">
        <h1 className="text-[24px] font-[800] leading-[29.05px]">NFTs</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] my-10 h-full">
          {cardCollections.map((card) => (
            <NftCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NftCollection;
