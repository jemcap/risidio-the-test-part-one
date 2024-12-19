import React from "react";
import Card from "./card.component";
import {
  NightSkyThumbnail,
  FutureThumbnail,
  MotherNatureThumbnail,
  JulienImage,
  MariaImage,
} from "../../utils/images";
import { ArtistImage, WithTheStars } from "../../utils/images";

const cardCollections = [
  {
    id: 1,
    image: NightSkyThumbnail,
    title: "Night Sky",
    price: "0.12BTC - 0.18BBTC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo",
    tags: "120 NTF",
    artist: "Léa Jacquot",
    artistImage: ArtistImage,
  },
  {
    id: 2,
    image: FutureThumbnail,
    title: "Future",
    price: "0.12BTC - 0.18BBTC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo",
    tags: "120 NTF",
    artist: "Julien",
    artistImage: JulienImage,
  },
  {
    id: 3,
    image: MotherNatureThumbnail,
    title: "Mother Nature",
    price: "0.12BTC - 0.18BBTC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo",
    tags: "120 NTF",
    artist: "Maria",
    artistImage: MariaImage,
  },
];

const Collections = () => {
  return (
    <section className=" h-full align-elements rounded-[30px]">
      <div className="mt-24">
        <h1 className="text-[24px] font-[800] leading-[29.05px]">
          Collections
        </h1>
        <div className="flex flex-col lg:flex-row gap-[32px] mt-10 mb-[153px] h-full">
          {cardCollections.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
