import React from "react";
import NftCard from "./NftCard";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const NftCollection = () => {
  const { nftCollections } = useContext(CartContext);
  return (
    <section className="mb-[94px] align-elements rounded-[30px]">
      <div className="mt-24">
        <h1 className="text-[24px] font-[800] leading-[29.05px]">NFTs</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] my-10 h-full">
          {nftCollections.map((card) => (
            <NftCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NftCollection;
